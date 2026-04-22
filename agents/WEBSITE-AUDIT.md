# SamenOntzorgen Website — Volledige Audit
**Datum**: 19 april 2026  
**Bron**: Browser-exploratie https://www.samenontzorgen.nl  
**Status**: Live operationeel  

---

## 1. PROJECTSTRUCTUUR

### Mappenopbouw
```
samenontzorgen-website/
├── index.html (homepage)
├── zorginstellingen.html
├── huisartsen.html
├── zelfstandigen.html
├── deeltijdwerkers.html
├── contact.html
├── tariefcheck.html (calc tool)
├── css/
│   └── style.css (unified styling)
├── js/
│   └── main.js (vanilla JS, forms, toggles)
├── images/
│   └── samenontzorgen_logo.png + assets
└── [.htaccess / config files voor Railway]
```

### Frameworks & Tools
- **Frontend**: Plain HTML5 + CSS3 + vanilla JavaScript (geen frameworks)
- **Build System**: Geen build tool (direct HTML delivery)
- **Hosting**: Railway (Git-based auto-deploy)
- **Meta**: UTF-8, mobile-responsive viewport, Dutch locale

### Build & Deployment
- Git-based push-to-deploy via Railway
- Statische HTML-bestanden, geen server-side rendering
- CSS-linked (relatieve paden: `../css/style.css`)
- JavaScript: één `main.js` bestand voor alle interactie

**Assessment**: Pragmatisch, snelle iteratie, lage maintenance overhead. Geschikt voor statisch marketingcontent en formulieren.

---

## 2. DOELGROEP

### Segmentatie (4 primaire groepen)

#### **A. Zorginstellingen** (ziekenhuizen, thuiszorg, verpleeghuizen)
- **Pijn**: Roosters die niet kloppen, extern personeel duur, juridische onzekerheid rond zzp-inzet
- **Begehaving**: Meer grip op kosten, continuïteit en verantwoording
- **Tonaliteit**: Zakelijk, structureel, kostengeoriënteerd
- **CTA**: "Plan een kennismaking" + "Bereken uw besparing" (Tariefcheck)

#### **B. Huisartsen & Praktijken** (primaire zorg)
- **Pijn**: VBAR/Wet DBA onzekerheid, waarneming regelen juridisch risky
- **Behoefte**: VBAR-proof structuur, blijf flex werken zonder risico
- **Tonaliteit**: Juridisch ondersteunend, compliance-gericht
- **Features**: VBAR-checklist tool, 4 opdrachttypes (consulten/visites/avond/digitaal)

#### **C. Zelfstandigen** (zzp-ers in zorg)
- **Pijn**: Minder opdrachten, bureaus duwen naar uitzendwerk, marge wegleek
- **Behoefte**: Vrijheid behouden, meer verdienen, juridische zekerheid
- **Tonaliteit**: Warm, emanciperend, "jij bepaalt"
- **Messaging**: "Lid zijn, niet product" / coöperatieve ownership

#### **D. Deeltijdwerkers** (hoger beroepsonderwijs/hbo+)
- **Pijn**: Roosters vast, extra uren bij werkgever slecht beloond
- **Behoefte**: Meer uren op eigen voorwaarden, eerlijk tarief
- **Tonaliteit**: Vriendelijk, motiverend, low-friction
- **Features**: Tarief-calculator per functie (helpende/verpleegkundige/etc)

### Overlap & Strategie
- **Primaire**: Zorginstellingen + Huisartsen (B2B, decision-makers)
- **Secundair**: Zelfstandigen + Deeltijdwerkers (B2C, execution layer)
- **Model**: Coöperatie werkt enkel als *beide* zijden (demand + supply) aansluit

---

## 3. HUIDGE TONE OF VOICE

### Register & Karakteristieken

#### **Problem-First Model** (consisten op álle pagina's)
1. Pagina opent met doelgroep-label (bijv. "Voor zorginstellingen")
2. **H1 = Pijnstelling** niet benefit ("Roosters die niet kloppen" vs "Robuuste planning")
3. Urgent context-paragrafen (wat voelen zij nu?)
4. Strukturele analyse (waaróm is dit zo?)

#### **Tone: Rustig, Eerlijk, Niet-Salesy**
- **Geen slogans** ("De toekomst van zorg!")
- **Concrete taal** ("25–35% structurele besparing" met voorwaarden)
- **Transparantie over grenzen** ("Niet perfect of zonder risico, maar wel ingericht om...")
- **Geen hype** (VBAR-proof by design, niet "revolutionair")
- **Erkent complexiteit** ("Dit speelt niet in één gesprek op")

#### **Structuur per sectie**
- **Urgentie-sectie**: List van 5–6 concrete gevolgen van inactie
- **Gewenste situatie**: Split per stakeholder (bijv. "voor zorginstellingen" vs "voor teams" vs "voor professionals")
- **Oplossing**: 3–5 core features met balancing language ("direct samenwerken, *zonder* tussenlaag")
- **Process**: Stap 1-3 route naar kennismaking (geen lange sales funnels)

#### **Woordkeus markers**
- "Eerlijk", "duidelijk", "grip", "continuïteit", "juridisch verdedigbaar"
- "Coöperatie van zorgprofessionals" (ownership-language)
- "Geen verplichtingen", "30 minuten", "gewoon een gesprek"
- Vermijd: "transformatie", "revolutie", "best-in-class"

#### **Engagement-strategie**
- Elke page eindigt met 2 CTA's: kennismaking + tool (Tariefcheck/VBAR-checklist)
- Contact form: minimaal ("naam, org, email, bericht")
- Footer: breadcrumb terug naar doelgroepen + contact
- Geen email sequence copy visible (opvolgmail intern beheerd)

**Kernbevinding**: Tone is zeer aligned met jouw 5fortyfive-strategie (problem → consequence → desire → transformation). Geen skill-laag nodig, dit is already dialed in.

---

## 4. BESTAANDE TEKSTEN & PATTERNS

### Homepage (Master Template)
```
Hero: "De flexschil groeit. De grip erop niet."
  └─ 3 subproblemen bullets
  └─ 2x CTA (kennismaking, tariefcheck)
  
Urgentie: "Wat er gebeurt als je niets verandert"
  └─ 5 bullet consequences
  └─ Closing para: "struktureel probleem"
  
Gewenste situatie: "Hoe het eruitziet als het wél klopt"
  └─ 4 sub-groups (zorginstellingen/professionals/deeltijdwerkers/zorg)
  └─ Each gets 1 sentence outcome
  
Oplossing: "Hoe SamenOntzorgen dit anders organiseert"
  └─ Intro: "via een coöperatief model"
  └─ 4 feature bullets
  └─ Closing: "beter uitlegbaar, beter vol te houden"
  
Doelgroepen: "Één model, vier groepen geholpen"
  └─ Icon + heading + 1-line problem + link per groep
  
Coöperatie-blok: "Een coöperatie van zorgprofessionals"
  └─ 3-line benefit statement
  └─ Quote: "Transparant. Uitlegbaar. Juridisch verdedigbaar."
  
Process: "Van kennismaking naar zekerheid"
  └─ 1-2-3 stappen, elk 3-4 regels
```

### Zorginstellingen-pagina (B2B variatie)
```
Hero: "Roosters die niet kloppen. Kosten die blijven oplopen."
  └─ Problem context (druk stijgt, bureaus duur, zzp risico)
  
Urgentie: "Wat er gebeurt als er niets verandert" 
  └─ 5 bullets (druk stijgt, roosters kwetsbaar, kosten, continuïteit, verantwoording)
  └─ Note: "structureel probleem in kosten, samenwerking en houdbaarheid"
  
Gewenste situatie: Split in 5 personas:
  - Voor zorginstellingen: "roosters beter, minder gaten, minder druk, grip op kosten"
  - Voor teams: "stabiliteit, minder overbelasting, minder wisselende inzet"
  - Voor professionals: "duidelijkheid, heldere afspraken, ruimte om goed werk te doen"
  - Voor cliënten: "continuïteit, herkenbare gezichten, minder onrust"
  - Voor organisatie: "minder verspilling, beheersbare kosten, samenwerking"
  
Oplossing: "Hoe SamenOntzorgen dit anders organiseert"
  └─ 6 bullets (direct samenwerken, minder afhankelijkheid, grip, juridisch, geen bureaumarge, *25–35% besparing*)
  
Process: 1-2-3 Kennismaking/Verkenning/Afspraken
  └─ Note: "Geen pitch. Geen druk. Wel een eerlijk gesprek."
```

### Huisartsen-pagina (Compliance-driven)
```
Hero: "Waarneming regelen mag geen juridisch risico zijn."

Wat u ervaart (3 quotes):
  - "Ik werk nog met ZZP-waarnemers, maar weet niet meer of dat nog mag."
  - "Ik ben gestopt met ZZP'ers en heb nu een capaciteitsprobleem."
  - "Mijn waarnemer wil zelfstandig blijven, maar ik wil geen boete."
  
Model uitleg: "Een coöperatief model dat VBAR-proof is by design"
  └─ 3 design pillars (vervangingsclausule, geen gezagsverhouding, modelovereenkomst)
  
Opdrachttypes: TABLE (A/B/C/D)
  └─ Col 1: Opdracht type + omschrijving
  └─ Col 2: Resultaatverplichting
  └─ Col 3: Gezagsverhouding
  └─ Col 4: VBAR-check status
  
Tool-offer: "VBAR-checklist" (gratis, email-based lead capture)
```

### Zelfstandigen-pagina (B2C emotional)
```
Hero: "Werken als zzp'er in de zorg wordt steeds moeilijker uitlegbaar."
  └─ Subtext: "minder opdrachten, bureaus duwen naar uitzendwerk, vrijheid inlevert"

Urgentie: 6 consequences
  - Minder opdrachten
  - Opdrachtgevers kiezen veiliger constructies
  - Bureaus duwen naar uitzendwerk
  - Marge gaat weg
  - Je gaat minder verdienen
  - Teruggang naar loondienst dreigt
  
Gewenste situatie: 6 benefits
  - Meer vrijheid om te werken op jouw manier
  - Meer verdienen (geen bureaumarge)
  - Duidelijke afspraken
  - Meer rust (geen twijfel per opdracht)
  - Lid van coöperatie (niet product)
  - Balans tussen zelfstandigheid en samenwerking
```

### Deeltijdwerkers-pagina (B2C incentive)
```
Hero: "Werk extra. Wanneer jij wilt."

Immediate value prop: 3 checks
  ✓ Jij geeft aan wanneer je beschikbaar bent
  ✓ Je blijft in loondienst (pensioen/zekerheid intact)
  ✓ Eerlijk zzp-tarief zonder btw-rompslomp

Compare table: "Waarom dit echt loont"
  Extra uren via werkgever vs Extra via SamenOntzorgen
  (5 bullets pro/con per optie)
  
Earnings calculator: 
  "Wat werkt u bij per week?"
  → Functie + tarief → €/week output

3-stap process: Aanmelden / Beschikbaarheid / Verdienen
```

### Contact-pagina (Low-friction)
```
Headline: "Eén gesprek. Geen verplichtingen."
Subtext: "U heeft vragen, twijfels, of wilt weten of dit model past."

Expectation-setting: 3 items
  - 30 minuten
  - Geen verplichtingen
  - Email: info@samenontzorgen.nl

Form: 5 fields
  - Naam (required)
  - Organisatie
  - Email (required)
  - Telefoonnummer
  - Bericht (required)

Process afterward: 1-2-3
  - Response within 1 werkdag
  - 30-min kennismaking (echte reactie, niet chatbot)
  - U beslist zelf (geen druk)
```

### Critical Patterns Observed
1. **Alle pagina's volgen dezelfde 6-section flow** (urgentie → gewenst → oplossing → process)
2. **No "about us" or founder story** (niet nodig; the model speaks for itself)
3. **Numbers are honest** ("25–35% possible" not "up to 50%")
4. **Every CTA repeats 2x per page** (at hero + at close)
5. **No testimonials or case studies** (trust = transparency, not proof)
6. **Forms are minimal** (bias toward conversation over submission)
7. **Footer mirrors navbar** (4 doelgroepen links + contact)

---

## 5. CONTENT TAGS & SEGMENT-SPECIFIC MESSAGING

### Zorginstellingen — Tags
- **Primary need**: Kostenbeheersing, juridische zekerheid, continuïteit
- **Tone**: Zakelijk, risicobeperking, bestuurdersjargon
- **Evidence mode**: Numbers (25–35% besparing), process clarity, compliance
- **Objection handling**: "Niet perfect of zonder risico, maar wel ingericht"
- **Process**: Kennismaking → Verkenning → Afspraken
- **Pressure level**: Low; "U beslist zelf"

### Huisartsen — Tags
- **Primary need**: VBAR compliance, legal defensibility, flex capacity
- **Tone**: Regulatory-aware, reassuring, option-rich
- **Evidence mode**: Table of opus types, model pillars (vervangingsclausule), Belastingdienst alignment
- **Objection handling**: "VBAR-proof by design" (not "we hope")
- **Tool**: Free VBAR-checklist (email capture)
- **Pressure level**: Moderate; compliance creates urgency

### Zelfstandigen — Tags
- **Primary need**: Autonomy, income protection, job security
- **Tone**: Empathetic, anti-exploitative, ownership language
- **Evidence mode**: Coöp structure > bureau structure, "lid niet product"
- **Objection handling**: "Niet perfect maar beter dan alternatives"
- **Segment worry**: Fear of losing freedom or income
- **Pressure level**: Low; trust is built via transparency

### Deeltijdwerkers — Tags
- **Primary need**: Flexibility, immediate income, minimal friction
- **Tone**: Friendly, motivating, energetic
- **Evidence mode**: Calculator (concrete earnings), comparison table, simplicity
- **Objection handling**: "Your day job stays intact; this is just extra"
- **Segment worry**: Don't want complicated bureaucracy or tax mess
- **Pressure level**: Very low; "no commitment, just extra ours when you want"

### Cross-segment Pattern
- **All copy starts with THEIR problem, not the solution**
- **All copy acknowledges trade-offs** ("not perfect, but...")
- **All copy ends with a human next step** (30 min call, not webinar funnel)
- **All copy avoids feature-dumping** (max 6 bullets per section)

---

## 6. TECH STACK

### Frontend
- **HTML5**: Semantic markup, meta tags, mobile viewport
- **CSS3**: Responsive grid (likely flexbox/grid), no pre/post-processor evident
- **JavaScript**: Vanilla JS, no framework detected
  - `main.js` handles form submission, mobile menu toggle, section interactions
  - No external libs visible (no jQuery, React, Vue, etc.)

### Build & Deployment
- **No build tool**: Direct HTML delivery (no webpack, Vite, Next.js)
- **Hosting**: Railway (git-based)
- **Git push-to-deploy**: Changes to GitHub → auto-deploy to railway.app
- **CDN**: Not evident (Railway likely serves all assets directly)

### Form Processing
- Contact form submits to unknown backend (likely:
  - Email API (SendGrid, AWS SES, etc.) via serverless function
  - OR direct form service (Formspree, Basin, etc.)
  - Confirmation email not visible in HTML
)

### Performance
- Single CSS file (`../css/style.css`)
- Single JS file (`../js/main.js`)
- Images stored locally (`/images/samenontzorgen_logo.png`)
- Mobile-responsive (viewport meta set)
- No tracking pixels visible (privacy-conscious)

### SEO Setup
- Title: Descriptive + brand ("SamenOntzorgen | Eerlijk, eenvoudig, juridisch veilig")
- Meta description: "Coöperatie van zorgprofessionals. Tot 35% goedkoper dan uitzendbureau, VBAR-proof"
- Meta lang: Dutch (nl)
- No structured data visible (no schema.org)
- Relative internal links (site-wide navigation consistent)

### Estimated Tech Debt
- ✅ **Good**: Simple, fast, maintainable
- ⚠️ **Consider**: Add schema.org for SEO, add GTM for analytics, consider Lighthouse audit
- ⚠️ **Risk**: Single main.js could grow; consider component breakdown if site expands

---

## KEY TAKEAWAYS FOR YOUR WORKFLOW

1. **Replicable model**: The 6-section flow (urgentie → gewenst → oplossing → proces) works for all doelgroepen. This is your template.

2. **No "about" needed**: SamenOntzorgen doesn't have an /over-ons.html. The model *is* the story. Trust = transparency in structure, not founder narrative.

3. **Tone is dialed in**: Already matches your 5fortyfive + Innocent archetype. No rewrite needed; just template it for new doelgroepen.

4. **Tech: Keep it simple**: Plain HTML works. Don't over-engineer. Railway + GitHub is fast iteration.

5. **Low-friction rules**: Every page removes friction—minimal forms, clear process, "no commitment" messaging.

6. **Segment deeply**: Each doelgroep gets its own page with tailored problem/solution, not generic copy. This works.

7. **Numbers are powerful but honest**: "25–35% besparing" beats "50% cheaper" because it's defensible.

8. **Next opportunity**: Implement analytics (Google Tag Manager) to track which doelgroep converts best; Tariefcheck and VBAR-checklist are lead magnets—measure them.

---

**End of Audit**

*Used for: Developing cloud.md, planning new content, training AI teammates, replicating model for new projects*
