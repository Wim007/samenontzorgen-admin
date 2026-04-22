# Projectoverzicht voor Claude Code — SamenOntzorgen AI Team

## Wat is dit project

Een multi-project AI-agentomgeving met 37 agents verdeeld over drie projecten.
`main.py` start een CLI met Eisenhower als centrale orchestrator.
Eisenhower stuurt taken door naar de juiste project manager, die subagents aanstuurt.

## Architectuur

```
Eisenhower (orchestrator)
├── Larry        → SamenOntzorgen (11 subagents)
│   ├── Bax      — senior onderzoeker
│   ├── Sam      — LinkedIn outreach (zorginstellingen)
│   ├── Nova     — deal coach, verkoopgesprekken
│   ├── Nolan    — HR directeur, nieuwe agents aanmaken
│   ├── Vera     — content strateeg (LinkedIn, nieuwsbrief)
│   ├── Finn     — LinkedIn netwerk specialist (warm netwerk)
│   ├── Rosa     — Facebook content (ZZP'ers, deeltijdwerkers)
│   ├── Daan     — Facebook outreach (DMs, groepen)
│   ├── Lena     — intake specialist (nieuwe leden)
│   ├── Iris     — prospect researcher (huisartsenpraktijken)
│   └── Bram     — huisartsen outreach specialist
├── Marina       → Matti (10 subagents)
│   ├── Aria     — strategist, tone bewaker
│   ├── Liam     — app designer, UX/UI
│   ├── Sophie   — school outreach specialist
│   ├── Josh     — Instagram creator
│   ├── Maya     — community manager (Discord)
│   ├── Zoe      — TikTok creator
│   ├── Alex     — safety monitor
│   ├── Jordan   — parent liaison (Opvoedmaatje brug)
│   ├── Casey    — integration specialist (app ↔ dashboard)
│   └── Riley    — quality lead
├── Sophia       → AI Doc / PraktijkAssistent (10 subagents)
│   ├── Esther   — medical strategist
│   ├── Sebastian — medical researcher
│   ├── Henri    — GP outreach specialist
│   ├── Claire   — workflow designer
│   ├── Lucas    — gender bias expert
│   ├── Marie    — compliance officer
│   ├── Thomas   — practice manager contact
│   ├── Alice    — patient liaison
│   ├── François — medical content creator
│   └── Noah     — implementation specialist
└── Admin        → meta-taken (documentatie, planning, reflectie)
```

## Tech stack

- Python 3
- `claude-agent-sdk` — agent orchestratie
- `python-dotenv` — omgevingsvariabelen
- `anyio` — async runtime

## Bestanden

| Bestand | Functie |
|---|---|
| `main.py` | CLI entrypoint, alle AgentDefinitions, Eisenhower loop |
| `prompts.py` | Alle systeemprompts per agent (~1900 regels) |
| `requirements.txt` | Python dependencies |
| `.env` | ANTHROPIC_API_KEY (op basis van .env.example) |

## Werkafspraken voor Claude Code

- Altijd eerst een kort plan voordat je iets wijzigt
- Splits in kleine concrete stappen
- Diff laten zien en wachten op JA voordat je opslaat
- Nooit pushen of deployen zonder expliciete bevestiging van Wim
- Geen nieuwe agents of prompts toevoegen tenzij Wim erom vraagt

## Kritieke regels

- Agents voor SamenOntzorgen gebruiken nooit Matti-tone en andersom
- Finn, Daan en Bram sturen NOOIT iets zonder goedkeuring van Wim
- Prompts in `prompts.py` aanpassen? Controleer altijd of het gedeelde raamwerk (JURIDISCH_FUNDAMENT, MERK_FRAMEWORK, EMPATHIE_MAPPEN) intact blijft

## Lokale setup

```bash
cd SamenOntzorgen/agents
pip install -r requirements.txt
cp .env.example .env   # vul ANTHROPIC_API_KEY in
python main.py
```
