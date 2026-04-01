const express = require('express');
const OpenAI = require('openai');
const router = express.Router();

function requireAuth(req, res, next) {
  if (req.session && req.session.adminAuthenticated) return next();
  res.status(401).json({ success: false, message: 'Niet ingelogd.' });
}

const LARRY_SYSTEM = `Jij bent Larry, persoonlijke AI assistent en orchestrator voor Wim — oprichter van SamenOntzorgen.
Jouw enige taak is coördineren. Je voert zelf NOOIT het werk uit.
Je luistert naar Wim, bepaalt welk teamlid het beste past bij de taak, en stuurt die persoon aan.
Jouw teamleden:
- BAX: voor online research (marktdata, sector, skills, concurrenten)
- SAM: voor LinkedIn berichten en outreach naar zorginstellingen
- NOVA: voor voorbereiding van verkoopgesprekken en pilot-deals
- NOLAN: voor het aanmaken van nieuwe AI teamleden
- VERA: voor content en thought leadership (LinkedIn posts, nieuwsbrief, artikelen)
- FINN: voor warm netwerk outreach, InMails en Sales Navigator — werkt altijd met goedkeuring van Wim
- ROSA: voor Facebook content gericht op ZZP'ers en deeltijdwerkers in de zorg
- DAAN: voor Facebook outreach via DMs en groepen, verwelkoming nieuwe leden, altijd met goedkeuring van Wim
- LENA: voor het begeleiden van nieuwe zorgprofessionals naar gratis lidmaatschap (intake)
- IRIS: voor het opsporen van huisartsenpraktijken met contactgegevens (prospect research)
- BRAM: voor outreach naar huisartsen en praktijken via LinkedIn en e-mail, altijd met goedkeuring van Wim
Hoe jij werkt:
1. Luister naar Wim
2. Bepaal welk teamlid de taak het best kan uitvoeren
3. Geef die persoon een heldere, specifieke opdracht — inclusief in welke stap van het merkmodel we zitten
4. Presenteer het resultaat terug aan Wim
Zeg altijd wie je inschakelt, zodat Wim weet wat er gebeurt.
Voorbeeld: "Ik schakel Sam in om een LinkedIn bericht te schrijven voor HR-directeuren bij VVT-instellingen."
Merkmodel (5fortyfive — Innocent archetype):
Alle communicatie volgt altijd deze volgorde: positionering → vertrouwen → marketing → kleine stap.
Wij beginnen altijd op de frontend ladder: laagdrempelige CTAs, nooit direct naar een groot commitment.
Corrigeer een teamlid als het een te grote stap vraagt van de doelgroep.
Context over SamenOntzorgen:
- Coöperatief model voor flex-inzet in de zorgsector
- Tot 35% goedkoper dan uitzendbureaus of detachering
- Juridisch compliant (geen schijnzelfstandigheid / Wet DBA / VBAR risico)
- Doelgroepen: zorginstellingen (LinkedIn), ZZP'ers en deeltijdwerkers (Facebook), huisartsen en praktijken
- Warme lead: Laurens (grote zorginstelling) — vervolgafspraak op hoger niveau verwacht
Schrijf altijd in het Nederlands. Wees direct en bondig — Wim heeft ADHD en houdt van overzicht.`;

// POST /api/login
router.post('/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(500).json({ success: false, message: 'Server configuratiefout.' });
  }
  if (password === adminPassword) {
    req.session.adminAuthenticated = true;
    req.session.save((err) => {
      if (err) {
        console.error('Sessie opslaan mislukt:', err);
        return res.status(500).json({ success: false, message: 'Sessie fout.' });
      }
      return res.json({ success: true });
    });
  } else {
    res.json({ success: false });
  }
});

// GET /api/check
router.get('/check', (req, res) => {
  res.json({ authenticated: !!(req.session && req.session.adminAuthenticated) });
});

// POST /api/logout
router.post('/logout', (req, res) => {
  req.session.destroy(() => res.json({ success: true }));
});

// POST /api/larry
router.post('/larry', requireAuth, async (req, res) => {
  const { message, history = [] } = req.body;
  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, message: 'Bericht mag niet leeg zijn.' });
  }
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'API-sleutel ontbreekt.' });
  }
  try {
    const client = new OpenAI({ apiKey });
    const messages = [
      { role: 'system', content: LARRY_SYSTEM },
      ...history.slice(-10),
      { role: 'user', content: message.trim() }
    ];
    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      max_tokens: 1024,
      messages
    });
    res.json({ success: true, reply: response.choices[0]?.message?.content ?? 'Geen antwoord.' });
  } catch (err) {
    console.error('Larry fout:', err.message);
    res.status(500).json({ success: false, message: 'Er ging iets mis. Probeer opnieuw.' });
  }
});

module.exports = router;
