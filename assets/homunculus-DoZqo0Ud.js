import{a as e,c as t,i as n,n as r,o as i,r as a}from"./index-C2lOIWJp.js";t();var o={bg:`#050806`,bgElev:`#0a0f0b`,green:`#4dff9b`,greenSoft:`#9dffca`,greenDim:`#2f7a54`,crimson:`#ff2d55`,amber:`#ffb347`,blue:`#5ac8fa`,border:`rgba(77, 255, 155, 0.18)`,borderStrong:`rgba(77, 255, 155, 0.45)`,prism:`#38e8ff`},s=n`
  @keyframes hmnScan {
    0% { background-position: 0 0; }
    100% { background-position: 0 100vh; }
  }
`,c=a`
  0%, 96%, 100% { opacity: 1; }
  97% { opacity: 0.82; }
  98% { opacity: 0.95; }
`,l=a`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`,u=a`
  0%   { transform: translateX(-120%); }
  100% { transform: translateX(120%); }
`,d=e.div`
  /* Scanlines are baked into the page background (an extra gradient layer),
     not a separate position:fixed overlay — a fixed full-viewport layer can
     trigger black-screen compositing bugs in some Chromium builds. */
  background:
    repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0) 0px,
      rgba(0,0,0,0) 2px,
      rgba(0,0,0,0.16) 3px,
      rgba(0,0,0,0) 4px
    ),
    radial-gradient(ellipse at 50% -10%, rgba(77,255,155,0.10), transparent 60%),
    ${o.bg};
  color: ${o.greenSoft};
  font-family: 'Share Tech Mono', 'Fira Code', ui-monospace, monospace;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`,f=e.section`
  padding: 150px 24px 70px;
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
`,p=e.div`
  font-size: 13px;
  letter-spacing: 6px;
  color: ${o.greenDim};
  text-transform: uppercase;
  margin-bottom: 22px;
`,m=e.h1`
  font-family: 'Orbitron', 'Share Tech Mono', monospace;
  font-weight: 700;
  font-size: clamp(44px, 9vw, 118px);
  line-height: 0.95;
  margin: 0;
  color: ${o.green};
  letter-spacing: 4px;
  text-shadow: 0 0 18px rgba(77,255,155,0.55), 0 0 46px rgba(77,255,155,0.25);
`,h=e.p`
  margin: 28px auto 0;
  max-width: 720px;
  font-size: clamp(15px, 2vw, 20px);
  line-height: 1.7;
  color: ${o.greenSoft};

  b { color: ${o.green}; font-weight: 400; }
`,g=e(i)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 34px;
  font-family: 'Orbitron', monospace;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${o.green};
  text-decoration: none;
  border: 0.5px solid ${o.borderStrong};
  padding: 9px 18px;
  transition: background 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;

  span.dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: ${o.prism};
    box-shadow: 0 0 10px ${o.prism};
    animation: ${c} 3s infinite;
  }

  span.arrow { transition: transform 0.2s ease; }

  &:hover {
    background: rgba(77, 255, 155, 0.08);
    box-shadow: 0 0 20px rgba(77, 255, 155, 0.25);
    span.arrow { transform: translateX(3px); }
  }
  &:focus-visible { outline: 2px solid ${o.green}; outline-offset: 3px; }
`,_=e.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 34px;
  max-width: 1000px;
  margin: 12px auto 0;
  padding: 16px 24px;
  border-top: 0.5px solid ${o.border};
  border-bottom: 0.5px solid ${o.border};
  font-size: 11px;
  letter-spacing: 2px;
  color: ${o.greenDim};

  b { color: ${o.green}; }
`,v=e.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 66px 24px;
`,y=e.h2`
  font-family: 'Orbitron', monospace;
  font-size: 13px;
  letter-spacing: 5px;
  color: ${o.greenDim};
  text-transform: uppercase;
  margin: 0 0 6px;

  &:before { content: '// '; color: ${o.crimson}; }
`,b=e.p`
  font-size: clamp(22px, 3vw, 32px);
  color: ${o.greenSoft};
  margin: 0 0 40px;
  max-width: 760px;
  line-height: 1.4;
`,x=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`,S=e.article`
  position: relative;
  background: linear-gradient(180deg, ${o.bgElev}, rgba(5,8,6,0.6));
  border: 0.5px solid ${o.border};
  padding: 22px 22px 24px;
  overflow: hidden;
  animation: ${l} 0.5s ease both;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${o.borderStrong};
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 0 0.5px ${o.borderStrong};
  }

  /* corner tick */
  &:after {
    content: '';
    position: absolute;
    top: 10px; right: 10px;
    width: 8px; height: 8px;
    border-top: 1px solid ${o.greenDim};
    border-right: 1px solid ${o.greenDim};
  }

  /* hover sweep */
  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 40%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(77,255,155,0.06), transparent);
    transform: translateX(-120%);
    pointer-events: none;
  }
  &:hover:before { animation: ${u} 0.9s ease; }
`,C=e.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 12px;
`,w=e.span`
  font-size: 11px;
  color: ${o.crimson};
  letter-spacing: 1px;
`,T=e.h3`
  font-family: 'Orbitron', monospace;
  font-size: 17px;
  letter-spacing: 2px;
  color: ${o.green};
  margin: 0;
  text-shadow: 0 0 10px rgba(77,255,155,0.35);
`,E=e.p`
  font-size: 13px;
  line-height: 1.65;
  color: ${o.greenSoft};
  margin: 0 0 14px;
  opacity: 0.9;
`,D=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,O=e.span`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${o.greenDim};
  border: 0.5px solid ${o.border};
  padding: 3px 8px;
  text-transform: uppercase;
`,k=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`,A=e.div`
  border-left: 2px solid ${o.greenDim};
  padding: 4px 0 4px 18px;

  h4 {
    font-family: 'Orbitron', monospace;
    font-size: 13px;
    letter-spacing: 2px;
    color: ${o.green};
    margin: 0 0 12px;
  }
  ul { list-style: none; margin: 0; padding: 0; }
  li {
    font-size: 13px;
    line-height: 1.9;
    color: ${o.greenSoft};
  }
  li:before { content: '▸ '; color: ${o.greenDim}; }
`,j=e.div`
  margin-top: 40px;
  border: 0.5px solid ${o.border};
  background: rgba(255,45,85,0.04);
  padding: 22px 24px;
  font-size: 13.5px;
  line-height: 1.7;
  color: ${o.greenSoft};

  b { color: ${o.amber}; font-weight: 400; }
`,M=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  padding: 20px 24px 96px;
`,N=e.a`
  font-family: 'Orbitron', monospace;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${o.green};
  text-decoration: none;
  border: 0.5px solid ${o.borderStrong};
  padding: 13px 26px;
  transition: background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: rgba(77,255,155,0.08);
    box-shadow: 0 0 20px rgba(77,255,155,0.25);
  }
`,P=r(),F=[{id:`01`,name:`BRIDGE`,body:`The command center. Live system vitals — CPU cores, memory, temps, running processes — beside the Computer Core: a streaming Claude chat wearing a ship's-computer persona, driven by the local Claude subscription (no API billing). An embedded PTY terminal, Home Assistant tiles, and open crypto trades round out the console.`,tags:[`Claude Agent SDK`,`node-pty`,`systeminformation`,`WebSocket`]},{id:`02`,name:`SURVEIL`,body:`An OSINT watch floor built around a 3D globe (globe.gl + three.js). Plots live seismic events (USGS), military aircraft (ADS-B), aurora & geomagnetic storms (NOAA), vessel AIS traffic, and cyber C2 infrastructure (CISA KEV + Feodo). Includes the Pentagon Pizza Index DEFCON read, service-outage monitors, and armable geofences that fire proactive alerts.`,tags:[`globe.gl`,`three.js`,`6 live feeds`,`geofencing`]},{id:`03`,name:`HOME`,body:`Home Assistant command surface — radial and range thermostat controls, appliance tiles, and live entity states streamed over WebSocket, all rendered in the phosphor skin.`,tags:[`Home Assistant`,`realtime`]},{id:`04`,name:`AUTO`,body:`A full vehicle command center for "Voltaire," a Tesla wired in via Tessie / Home Assistant. Charging controls, climate, seat heaters, trunk & frunk, tire pressures, and live speed/location telemetry in one command grid.`,tags:[`Tesla`,`Tessie`,`telemetry`]},{id:`05`,name:`PETS`,body:`A rich console for the R2PEEPOO Litter-Robot 4 — litter and waste gauges, live cycle status, per-pet weighings, sleep windows, and full control (clean cycle, night-light, wait time), paired with colony visits and weight-watch tiles.`,tags:[`Litter-Robot 4`,`IoT`]},{id:`06`,name:`DATA`,body:`The "Worldline" metrics warehouse. Time-series history captured server-side, browsable by source and range, rendered as a phosphor line chart with min / max / avg / now stat tiles and a live tail-poll toggle.`,tags:[`time-series`,`hand-rolled SVG`]},{id:`07`,name:`ARCHIVE`,body:`The ship's log — a persisted, reverse-chronological, color-coded console of every notable event the system emits: proactive alerts, SURVEIL escalations, geofence breaches, system messages. Filter by source, minimum severity, and free text.`,tags:[`event log`,`persistence`]},{id:`08`,name:`FINANCE`,body:`A local-only personal budget, built security-first: the financial data never leaves the home PC — no external API calls, no account linking. Seeded from a Google-Sheets CSV export and rendered entirely client-side.`,tags:[`local-only`,`privacy-first`]},{id:`09`,name:`CRYPTO`,body:`A Gemini exchange integration — live market data, portfolio, signals, and an intel report — powering a fleet of confirm-first algorithmic strategies (Sniper, Firecracker, Fast-Cash, Oversold, Reaper, and the BTC accumulation Ladder), each authored as a Claude skill with its own scoring ledger.`,tags:[`Gemini API`,`algo-trading`,`Claude skills`]},{id:`10`,name:`ASSETS`,body:`A normalized %-change overlay charting Gold (XAU), Silver (XAG), and BTC for physical-metal investing — one point per UTC day with a 12-month backfill, hand-rolled in SVG with 1M / 3M / 6M / 1Y / ALL windows.`,tags:[`spot prices`,`read-only`]}],I=()=>(0,P.jsxs)(d,{children:[(0,P.jsx)(s,{}),(0,P.jsxs)(f,{children:[(0,P.jsx)(p,{children:`Personal Command Interface`}),(0,P.jsx)(m,{children:`HOMUNCULUS`}),(0,P.jsxs)(h,{children:[`A `,(0,P.jsx)(`b`,{children:`starship-bridge`}),` console for the home — one interface over my computers, my house, my vehicle, my money, and the wider internet. Part Star Trek bridge, part Jarvis, part Matrix phosphor terminal, with `,(0,P.jsx)(`b`,{children:`Claude`}),` as the brain and everything kept local.`]}),(0,P.jsxs)(g,{to:`/homunculus/crypto`,children:[(0,P.jsx)(`span`,{className:`dot`}),`Walk the CRYPTO tab`,(0,P.jsx)(`span`,{className:`arrow`,children:`▸`})]})]}),(0,P.jsxs)(_,{children:[(0,P.jsxs)(`span`,{children:[`CORE LINK `,(0,P.jsx)(`b`,{children:`WIRED`})]}),(0,P.jsxs)(`span`,{children:[`MESH `,(0,P.jsx)(`b`,{children:`3 NODES`})]}),(0,P.jsxs)(`span`,{children:[`MODULES `,(0,P.jsx)(`b`,{children:`10 ONLINE`})]}),(0,P.jsxs)(`span`,{children:[`CHANNEL `,(0,P.jsx)(`b`,{children:`AES-256`})]}),(0,P.jsxs)(`span`,{children:[`THREATS `,(0,P.jsx)(`b`,{children:`0`})]}),(0,P.jsxs)(`span`,{children:[`AI CORE `,(0,P.jsx)(`b`,{children:`CLAUDE`})]})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(y,{children:`Modules`}),(0,P.jsx)(b,{children:`Ten tabs, each a live dashboard wired to real hardware, real feeds, and real money.`}),(0,P.jsx)(x,{children:F.map(e=>(0,P.jsxs)(S,{children:[(0,P.jsxs)(C,{children:[(0,P.jsx)(w,{children:e.id}),(0,P.jsx)(T,{children:e.name})]}),(0,P.jsx)(E,{children:e.body}),(0,P.jsx)(D,{children:e.tags.map(e=>(0,P.jsx)(O,{children:e},e))})]},e.id))})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(y,{children:`Architecture`}),(0,P.jsx)(b,{children:`A hybrid client–server system — a thin UI over one Node backend, reachable from the desktop, a phone, or a watch.`}),(0,P.jsxs)(k,{children:[(0,P.jsxs)(A,{children:[(0,P.jsx)(`h4`,{children:`FRONTEND`}),(0,P.jsxs)(`ul`,{children:[(0,P.jsx)(`li`,{children:`React + TypeScript`}),(0,P.jsx)(`li`,{children:`Transport-agnostic UI`}),(0,P.jsx)(`li`,{children:`Electron thin shell`}),(0,P.jsx)(`li`,{children:`Hand-rolled SVG charts`}),(0,P.jsx)(`li`,{children:`CRT phosphor skin`})]})]}),(0,P.jsxs)(A,{children:[(0,P.jsx)(`h4`,{children:`BACKEND`}),(0,P.jsxs)(`ul`,{children:[(0,P.jsx)(`li`,{children:`Node HTTP + WebSocket`}),(0,P.jsx)(`li`,{children:`Live telemetry multiplex`}),(0,P.jsx)(`li`,{children:`Cron watchers + disk persistence`}),(0,P.jsx)(`li`,{children:`Token-gated remote access`}),(0,P.jsx)(`li`,{children:`Dockerized`})]})]}),(0,P.jsxs)(A,{children:[(0,P.jsx)(`h4`,{children:`INTELLIGENCE`}),(0,P.jsxs)(`ul`,{children:[(0,P.jsx)(`li`,{children:`Claude Agent SDK`}),(0,P.jsx)(`li`,{children:`Local subscription auth`}),(0,P.jsx)(`li`,{children:`Streaming persona chat`}),(0,P.jsx)(`li`,{children:`Proactive voice alerts`}),(0,P.jsx)(`li`,{children:`Skill-authored trade agents`})]})]}),(0,P.jsxs)(A,{children:[(0,P.jsx)(`h4`,{children:`REACH`}),(0,P.jsxs)(`ul`,{children:[(0,P.jsx)(`li`,{children:`Docker Desktop / WSL2`}),(0,P.jsx)(`li`,{children:`Tailscale private mesh`}),(0,P.jsx)(`li`,{children:`Phone · watch · browser`}),(0,P.jsx)(`li`,{children:`No port-forwarding`}),(0,P.jsx)(`li`,{children:`Data stays home`})]})]})]}),(0,P.jsxs)(j,{children:[(0,P.jsx)(`b`,{children:`Local by design.`}),` The Computer Core drives my logged-in Claude subscription instead of the billed API, and the finance data never touches an external service. The whole system runs on a home PC and is reached over a private Tailscale mesh — the bridge lives in the house, not the cloud.`]})]}),(0,P.jsxs)(M,{children:[(0,P.jsx)(N,{href:`/`,children:`◂ BACK TO PORTFOLIO`}),(0,P.jsx)(N,{href:`mailto:rmccauleycode@gmail.com`,children:`CONTACT ▸`})]})]}),L=()=>(0,P.jsx)(I,{});export{L as default};