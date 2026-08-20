import{a as e,c as t,l as n,n as r,o as i,r as a}from"./index-XQ38b92w.js";var o=n(t(),1),s={ground:`#05030a`,panel:`#08050f`,elev:`#0b0716`,cyan:`#38e8ff`,holo:`#46f0ff`,violet:`#a878ff`,violetSoft:`#c9b8ff`,dim:`#6a4a8f`,dimmer:`#4a3568`,magenta:`#ff3d9a`,amber:`#ffcc44`,line:`rgba(56, 232, 255, 0.12)`,lineStrong:`rgba(168, 120, 255, 0.25)`,grad:`linear-gradient(100deg, #46f0ff, #a878ff, #ff3d9a, #ffcc44, #46f0ff)`},c=`156px`,l=a`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`,u=a`
  0%   { opacity: 0; transform: scale(1.06); filter: brightness(2.2) saturate(0); }
  45%  { opacity: 0.5; filter: brightness(1.3) saturate(0.6); }
  100% { opacity: 1; transform: scale(1); filter: none; }
`,d=a`
  0%   { opacity: 0; transform: translateY(-24%); }
  12%  { opacity: 1; }
  88%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(460%); }
`,f=e.div`
  background:
    radial-gradient(60vw 50vh at 12% 0%, rgba(70, 240, 255, 0.06), transparent 70%),
    radial-gradient(50vw 40vh at 88% 60%, rgba(168, 120, 255, 0.07), transparent 70%),
    ${s.ground};
  color: ${s.violetSoft};
  font-family: 'Share Tech Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 16px;
  line-height: 1.65;
  min-height: 100vh;
  overflow-x: hidden;
`,p=e.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  transform-origin: 0 50%;
  transform: scaleX(0);
  background: ${s.grad};
  background-size: 200% auto;
  z-index: 60;
`,ee=e.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: ${c};
  height: 100vh;
  padding: 22px 6px;
  background: ${s.panel};
  border-right: 1px solid ${s.line};
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 50;

  @media (max-width: 1020px) {
    position: sticky;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    overflow-x: auto;
    border-right: 0;
    border-bottom: 1px solid ${s.line};
  }
`,te=e.div`
  padding: 0 10px 10px;
  margin-bottom: 6px;
  border-bottom: 1px solid ${s.line};
  color: ${s.cyan};
  font-size: 15px;
  letter-spacing: 2px;

  @media (max-width: 1020px) { display: none; }
`,m=e.a`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  color: ${e=>e.$active?s.violetSoft:s.dim};
  background: ${e=>e.$active?s.elev:`transparent`};
  border-left: 2px solid ${e=>e.$active?s.cyan:`transparent`};
  font-size: 14px;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease;

  &:hover { color: ${s.violetSoft}; }
  &:focus-visible { outline: 2px solid ${s.holo}; outline-offset: 2px; }

  span {
    margin-left: auto;
    font-size: 12px;
    color: ${s.dimmer};
  }

  @media (max-width: 1020px) {
    border-left: 0;
    border-bottom: 2px solid ${e=>e.$active?s.cyan:`transparent`};
    background: transparent;
    white-space: nowrap;
    padding: 12px;

    span { display: none; }
  }
`,h=e.div`
  margin-top: auto;
  padding: 0 10px;
  color: ${s.dimmer};
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media (max-width: 1020px) { display: none; }
`,g=e.div`
  margin-left: ${c};

  @media (max-width: 1020px) { margin-left: 0; }
`,_=e.div`
  max-width: 1680px;
  /* explicit: Wrap is also a flex child in the hero, where an auto horizontal
     margin would otherwise cancel the stretch and shrink it to its content */
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 72px);
  box-sizing: border-box;
`,v=e.header`
  position: relative;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 120px;
  overflow: hidden;

  @media (max-width: 1020px) {
    min-height: 76vh;
    padding-top: 60px;
  }
`,y=e.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0;
  transform: scale(1.06);
  animation: ${u} 1.6s cubic-bezier(0.2, 0.7, 0.3, 1) 0.15s forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 22%;
    /* enough defocus that the headline holds, little enough that it still
       reads as the actual instrument behind the glass */
    filter: blur(2px) saturate(1.15);
    transform: scale(1.02);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: none;
  }
`,b=e.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(5,3,10,0.8) 0%, rgba(5,3,10,0.33) 32%, rgba(5,3,10,0.9) 78%, ${s.ground} 100%),
    linear-gradient(90deg, rgba(5,3,10,0.95) 0%, rgba(5,3,10,0.6) 46%, rgba(5,3,10,0.3) 100%);
`,x=e(_)`
  position: relative;
  z-index: 2;
  padding-bottom: 64px;
`,S=e(_)`
  position: relative;
  z-index: 2;
`,C=e.p`
  font-size: 13px;
  letter-spacing: 3px;
  color: ${s.dim};
  text-transform: uppercase;
  margin: 0 0 20px;

  b { color: ${s.cyan}; font-weight: 400; }
`,w=e.h1`
  font-family: 'Orbitron', 'Share Tech Mono', sans-serif;
  font-weight: 700;
  font-size: clamp(38px, 6.4vw, 92px);
  line-height: 1.02;
  letter-spacing: -0.5px;
  text-wrap: balance;
  margin: 0 0 28px;
  max-width: 15ch;
  color: #fff;

  em {
    font-style: normal;
    background: ${s.grad};
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${l} 9s linear infinite;

    @media (prefers-reduced-motion: reduce) { animation: none; }
  }
`,T=e.p`
  font-size: clamp(16px, 1.5vw, 20px);
  color: ${s.violetSoft};
  max-width: 60ch;
  margin: 0 0 36px;
`,E=e.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid ${s.line};
  border-bottom: 1px solid ${s.line};
  background: rgba(8, 5, 15, 0.6);

  div {
    padding: 13px 24px 13px 0;
    margin-right: 24px;
    border-right: 1px solid ${s.line};
    font-size: 13px;
    letter-spacing: 1.5px;
    color: ${s.dim};
    text-transform: uppercase;
    font-variant-numeric: tabular-nums;
  }
  div:last-child { border-right: 0; }
  b { color: ${s.cyan}; font-weight: 400; }
`,D=e.section`
  padding-top: clamp(88px, 12vh, 150px);
`,O=e.p`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  letter-spacing: 3px;
  color: ${s.cyan};
  text-transform: uppercase;
  margin: 0 0 16px;

  &:after {
    content: '';
    flex: 1;
    height: 1px;
    max-width: 220px;
    background: linear-gradient(90deg, ${s.lineStrong}, transparent);
  }
`,k=e.h2`
  font-family: 'Orbitron', 'Share Tech Mono', sans-serif;
  font-weight: 700;
  font-size: clamp(27px, 3.5vw, 50px);
  line-height: 1.1;
  letter-spacing: -0.3px;
  text-wrap: balance;
  margin: 0 0 18px;
  color: #fff;
  max-width: 20ch;
`,A=e.p`
  font-size: clamp(15px, 1.35vw, 19px);
  color: ${s.violetSoft};
  margin: 0;
  max-width: 62ch;
`,j=e.div`
  margin-bottom: 44px;
  max-width: 66ch;
`,M=e.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${s.lineStrong};
  background: ${s.panel};
  box-shadow:
    0 0 0 1px ${s.ground},
    0 30px 90px -40px rgba(70, 240, 255, 0.25),
    0 20px 60px -30px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transform: translateY(26px) scale(0.985);
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.2, 0.7, 0.3, 1);

  img { display: block; width: 100%; height: auto; }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 22%;
    pointer-events: none;
    opacity: 0;
    background:
      linear-gradient(180deg, transparent, rgba(70,240,255,0.12) 62%, rgba(70,240,255,0) 63%, transparent),
      linear-gradient(180deg, transparent 61%, ${s.holo} 62%, transparent 63%);
    mix-blend-mode: screen;
  }

  .in & { opacity: 1; transform: none; }
  .in &:after { animation: ${d} 1.25s cubic-bezier(0.3, 0.1, 0.2, 1) 0.18s 1; }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.2s linear;
    transform: none;
    .in &:after { animation: none; }
  }
`,N=e.figure`
  margin: 0;
`,ne=e.figcaption`
  margin-top: 14px;
  font-size: 13px;
  letter-spacing: 1.5px;
  color: ${s.dimmer};
  text-transform: uppercase;
`,P=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
  margin-top: 52px;
  border-top: 1px solid ${s.line};
  border-left: 1px solid ${s.line};
`,F=e.div`
  border-right: 1px solid ${s.line};
  border-bottom: 1px solid ${s.line};
  padding: 26px 26px 30px;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${e=>(.06*(e.$i||0)+.1).toFixed(2)}s;

  .in & { opacity: 1; transform: none; }

  h3 {
    font-family: 'Orbitron', 'Share Tech Mono', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 0 0 10px;
    color: ${e=>e.$tone===`warn`?s.amber:e.$tone===`hot`?s.magenta:s.cyan};
  }
  p {
    margin: 0;
    font-size: 15px;
    color: ${s.dim};
    line-height: 1.6;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.2s linear;
    transform: none;
  }
`,I=e.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: clamp(24px, 3vw, 56px);
  align-items: center;

  h3 {
    font-family: 'Orbitron', 'Share Tech Mono', sans-serif;
    font-weight: 500;
    font-size: clamp(17px, 1.6vw, 23px);
    letter-spacing: 0.4px;
    margin: 0 0 14px;
    color: #fff;
  }
  p {
    margin: 0 0 14px;
    color: ${s.dim};
    font-size: 15px;
  }
  p:last-child { margin-bottom: 0; }

  @media (max-width: 1020px) { grid-template-columns: 1fr; }
`,L=e.div`
  margin-top: clamp(88px, 12vh, 150px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1px;
  background: ${s.line};
  border-top: 1px solid ${s.lineStrong};
  border-bottom: 1px solid ${s.lineStrong};

  div { background: ${s.panel}; padding: 30px 26px; }

  b {
    display: block;
    font-family: 'Orbitron', 'Share Tech Mono', sans-serif;
    font-weight: 700;
    font-size: clamp(26px, 3vw, 40px);
    line-height: 1;
    color: ${s.cyan};
    font-variant-numeric: tabular-nums;
    margin-bottom: 10px;
  }
  span {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${s.dim};
  }
`,R=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: clamp(88px, 12vh, 150px);
`,z=`
  font-family: 'Orbitron', 'Share Tech Mono', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 26px;
  transition: background 0.2s ease, box-shadow 0.2s ease;
`,B=e(i)`
  ${z}
  color: ${s.cyan};
  border: 1px solid ${s.lineStrong};

  &:hover {
    background: rgba(56, 232, 255, 0.08);
    box-shadow: 0 0 20px rgba(56, 232, 255, 0.2);
  }
  &:focus-visible { outline: 2px solid ${s.holo}; outline-offset: 2px; }
`,V=e.a`
  ${z}
  color: ${s.cyan};
  border: 1px solid ${s.lineStrong};

  &:hover {
    background: rgba(56, 232, 255, 0.08);
    box-shadow: 0 0 20px rgba(56, 232, 255, 0.2);
  }
  &:focus-visible { outline: 2px solid ${s.holo}; outline-offset: 2px; }
`,H=e.footer`
  margin-top: 60px;
  padding: 46px 0 80px;
  border-top: 1px solid ${s.line};
  color: ${s.dimmer};
  font-size: 13px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px 34px;

  b { color: ${s.dim}; font-weight: 400; }
`,U=e.p`
  flex: 1 1 100%;
  margin: 10px 0 0;
  max-width: 78ch;
  font-size: 13px;
  line-height: 1.7;
  letter-spacing: 0;
  text-transform: none;
  color: ${s.dim};
`,W=`/assets/hero-C6le-D9Z.png`,G=`/assets/overview-top-BihaT_U8.png`,K=`/assets/overview-bottom-DxtOuecX.png`,q=`/assets/market-DdKns9Gl.png`,J=`/assets/screeners-B3Txh-le.png`,Y=`/assets/trades-BH4PmlWb.png`,X=`/assets/intelligence-DzWsMzFN.png`,Z=`/assets/settings-D2qfPqEg.png`,re=`/assets/audit-3hKfQLwH.png`,Q=r(),$=[{id:`overview`,kicker:`Overview`,title:`The whole book, one screen.`,thesis:`Portfolio value, deployment, unrealized P&L and the ladder's banked sats across the top. Below that, the allocation donut, the positions table, and everything resting on the exchange. If a strategy wants to trade, the request is already sitting in the amber queue on the right.`,shot:G,alt:`The CRYPTO overview: portfolio value, deployed ring, unrealized P&L, allocation donut, open positions table and resting orders.`,caption:`Overview · live book, captured 10 Aug 2026`,notes:[[`How much is working`,`The ring reads 81% — deployed capital against cash. Idle money shows up in the allocation like anything else, so you notice when there's too much of it. Or none.`],[`The donut counts cash`,`Cash gets a slice alongside BTC and the alts, and holdings under 1.5% fold into OTHER. Ten dust positions can't crowd out the three that matter.`],[`Positions carry their author`,`BTC LADDER, SNIPER, FIRECRACKER, MANUAL — every row says which strategy opened it, and the exit-plan column says what’s protecting it now.`],[`Distance to fill`,`Each resting order plots against the current mark. One glance says the BTC rebuy is close and the WIF sell is nowhere near.`],[`The amber queue`,`Strategies propose; you dispose. Staged trades wait here until approved, and an empty queue means exactly that.`,`warn`],[`The fleet, one click away`,`Recent runs stack in the right rail with their outcome on the label. Under them, every strategy has its own run button and loop interval.`]],aside:{shot:K,alt:`Growth through trading panel: total value, 24H/7D/30D/YTD deltas, BTC and USD legs, and ladder banked.`,title:`Growth, measured against the lot you started with`,body:[`The growth panel scores the book against its opening lot — 24 hours out to year-to-date, in dollars and in bitcoin.`,`The bitcoin column is the honest one for a ladder that sells strength to rebuy weakness. That strategy can look flat in dollars for weeks while the stack quietly grows, which is why banked sats get their own line instead of being buried in the dollar figure.`]},readout:[[`$2,541`,`Total book`],[`81%`,`Deployed`],[`5`,`Open positions`],[`4`,`Resting orders`]]},{id:`market`,kicker:`Market`,title:`The chart already knows your position.`,thesis:`Watchlists on the left, candles in the middle, your own orders drawn on the price axis. Everything you'd normally flip to a second app for is on the one pane.`,shot:q,alt:`Market section: watchlists, BTC 1-hour candles with Bollinger bands, two EMAs, volume and RSI-14, and a resting buy order drawn on the price axis.`,caption:`Market · BTC 1HR with Bollinger, dual EMA, volume and RSI-14`,notes:[[`Lists that keep themselves`,`CORE is hand-picked. MOVERS and HOLDINGS rebuild on their own, so whatever you own is always one click from its chart.`],[`Orders on the axis`,`The resting buy at $63,861 is drawn where it rests, with fills and cost basis on the same pane. No second window, nothing to reconcile.`],[`Four readings, one pane`,`Bollinger bands, fast and slow EMAs, volume, RSI-14 — stacked under the candles rather than fighting them for pixels.`],[`One chart or four`,`Six timeframes from 1M to 1DAY, and layouts that run from a single chart to a stacked pair, a quad, COMPARE, or the full MATRIX.`],[`Confluence, spelled out`,`The footer scores every timeframe at once. When the 1DAY says hold and the 5M says sell, you see the argument instead of picking a side blind.`],[`Click to set entry`,`Click a price on the chart and it becomes the entry or exit on a staged trade.`]],readout:[[`6`,`Timeframes`],[`5`,`Indicators`],[`4`,`Price alerts`],[`5`,`Chart layouts`]]},{id:`screeners`,kicker:`Screeners`,title:`It tells you why it said no.`,thesis:`A screen that only returns winners teaches you nothing about your gates. This one returns the whole field, ranked, and names the exact number that killed each symbol that didn't make it.`,shot:J,alt:`Screeners section: preset tabs, filter panel for market cap, volume, 24h change and RSI, and a results table with per-row gate chips and written block reasons.`,caption:`Screeners · DIP HUNTER across 75 pairs, one passing all gates`,notes:[[`Five presets`,`DIP HUNTER, OVERSOLD BLUE-CHIPS, BREAKOUT WATCH, COILED, TRAP HUNTER. Each is a saved set of gates you can edit in place or fork into something new.`],[`Gates as chips`,`Cap, volume, change and RSI light up on every row, so a symbol that missed one gate by a hair looks different from one that failed three.`],[`Rejections in plain English`,`“RSI 41.8 is above the 35 ceiling.” “24h volume 14M is below the 25M floor.” Every rejection names its gate and its number.`,`hot`],[`The funnel view`,`FUNNEL shows where the field fell out, gate by gate. It's the view you want when a screen returns nothing and you're deciding which knob to loosen.`],[`Honest about missing data`,`When a source comes back empty, the run says which gate it had to skip instead of waving everything through.`],[`Ranked by fit`,`One score orders the whole field, and the footer carries the selected row's timeframe, RSI, pattern and market cap.`]],readout:[[`75`,`Pairs screened`],[`5`,`Presets`],[`4`,`Gates per row`],[`5`,`Timeframes`]]},{id:`trades`,kicker:`Trades`,title:`Four orders, four dials.`,thesis:`Everything currently live on the exchange, drawn big enough to read from across the room: side, distance to fill, and which strategy put it there.`,shot:Y,alt:`Trades section: strategy runner, four circular order dials for HYPE, XRP, BTC and WIF showing distance to fill, execution logs and a reports feed.`,caption:`Trades · four orders open on the exchange, BTC 0.7% from filling`,notes:[[`One dial per order`,`Ring colour is the side, the number is distance to fill, the badge is the strategy that placed it. Click through for controls.`],[`Run now, or on a loop`,`Any strategy runs by hand from here, or wakes itself on an interval. The header flags a live run wherever you are in the tab.`],[`Execution in the open`,`Approved trades stream their steps as they happen, with live order status underneath. Nothing interesting happens off-screen.`],[`Manual trades, same door`,`A trade you stage by hand joins the same queue and waits on the same approval as a strategy's.`],[`Reports on file`,`Every run writes down what it looked at, what it staged, and what it passed on. The last ten stack here, newest first.`],[`Within 1%`,`Orders inside a percent of the mark light up amber — the BTC rebuy at 0.7% is the one that matters in the next hour.`]],readout:[[`4`,`Live orders`],[`0.7%`,`Nearest to fill`],[`10`,`Reports retained`],[`9`,`Runnable strategies`]]},{id:`intelligence`,kicker:`Intelligence`,title:`The agents get desks.`,thesis:`Eight agents run this tab's back office, and instead of a process list they get an actual office floor: desks grouped by department, each with a status lamp, a nameplate, and whatever it's working on right now.`,shot:X,alt:`Intelligence section: an office floor with desks grouped by department, showing a manager desk in error and a trapper desk proposing work.`,caption:`Intelligence · the office floor, 8 employees, 8 enabled`,notes:[[`Desks by department`,`EXECUTIVE, TRADING FLOOR, RESEARCH and RISK each seat their own. Screen glow and the lamp tell you what a desk is doing before you read a word.`],[`Trouble is visible`,`An agent in error shows it right at the desk. So does one mid-proposal, along with the window it's aiming for.`,`hot`],[`The message board`,`Agents post to a shared board rather than a log nobody reads, and calls awaiting resolution are counted at the top.`],[`The manager's file`,`Standing instructions live in one file every agent reads, so a policy change lands on the whole floor at once.`],[`Blockers and directory`,`What's stuck, and who's on staff — role, token budget, and an enable switch for each of the eight.`],[`The library`,`Strategy registers, research notes and revisions pile up here as the floor writes them. Twenty-eight artifacts so far.`]],readout:[[`8`,`Agents on staff`],[`8`,`Enabled`],[`28`,`Library artifacts`],[`7`,`Floor views`]]},{id:`settings`,kicker:`Settings`,title:`The master switch ships off.`,thesis:`Auto-execute is one toggle, and until you flip it, every plan any strategy produces waits for your approval. Below it, each strategy exposes the actual numbers it reads at the start of a run.`,shot:Z,alt:`Settings section: auto-execute toggle set to OFF with per-strategy bid caps, and a collapsible list of nine strategies each with its own settings count.`,caption:`Settings · auto-execute off, nine strategies, per-run tunables`,notes:[[`Auto-execute: OFF`,`The default posture. Even switched on, the dollar caps beside the toggle bound what any single run can propose.`,`warn`],[`Tuned live`,`Bid size, take-profit, RSI floors, spread and exposure caps are read fresh at the start of each run. Change one and the next run picks it up — nothing restarts.`],[`Shared assumptions`,`Fee and slippage assumptions live in the GLOBAL block, so nine strategies can't quietly drift apart on the basics.`],[`Nine strategies deep`,`From the BTC ladder's 50 settings down to a 13-setting draft, each collapses to a single row with its interval, mode and knob count.`],[`Drafts can't trade`,`A strategy marked DRAFT is visible and tunable but out of the rotation until it’s promoted. Work in progress stays work in progress.`],[`Roll your own`,`+ NEW STRATEGY takes a name, fields and ranges, and the result shows up in the fleet with a run button of its own.`]],readout:[[`9`,`Strategies`],[`223`,`Tunable settings`],[`OFF`,`Auto-execute`],[`2`,`Bid caps`]]},{id:`audit`,kicker:`Audit`,title:`A ledger that proves itself.`,thesis:`Operator clicks, system events, agent actions, strategy runs — every change lands in an append-only, hash-chained record, and VERIFY CHAIN re-walks the whole file whenever you ask it to.`,shot:re,alt:`Audit section: chain intact banner reporting 648 verified entries, actor filter chips, and a numbered append-only log of API calls and strategy run events.`,caption:`Audit · chain intact, 648 entries verified against Postgres`,notes:[[`Verified on demand`,`648 entries, chain intact, row count reconciled against Postgres. That banner is the output of a real pass over the file, run moments before this capture.`],[`No edit path`,`There's no affordance anywhere in this view for changing an entry. Append is the only verb the log understands.`],[`Who did it`,`Filter by operator, by system, by an individual agent, or by the strategy skill that acted. The actor rides in the record itself, so the filters are exact.`],[`What, exactly`,`Each line carries the timestamp, the actor, the precise call and its status — a screener run, a heartbeat, a board post getting resolved.`]],readout:[[`648`,`Entries verified`],[`100%`,`Rows reconciled`],[`12`,`Actor filters`],[`0`,`Edit paths`]]}],ie=()=>{let[e,t]=(0,o.useState)({}),[n,r]=(0,o.useState)($[0].id),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=()=>t(Object.fromEntries($.map(e=>[e.id,!0]))),n=$.map(e=>document.getElementById(e.id)).filter(Boolean);if(!n.length||typeof IntersectionObserver!=`function`){e();return}let i=!1,a=new IntersectionObserver(e=>{i=!0,e.forEach(e=>{e.isIntersecting&&(t(t=>t[e.target.id]?t:{...t,[e.target.id]:!0}),a.unobserve(e.target))})},{rootMargin:`0px 0px -12% 0px`,threshold:.08}),o=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&r(e.target.id)})},{rootMargin:`-20% 0px -70% 0px`});n.forEach(e=>{a.observe(e),o.observe(e)});let s=window.setTimeout(()=>{i||e()},1500);return()=>{a.disconnect(),o.disconnect(),window.clearTimeout(s)}},[]),(0,o.useEffect)(()=>{let e=!1,t=()=>{e||(e=!0,window.requestAnimationFrame(()=>{let t=document.body.scrollHeight-window.innerHeight;i.current&&(i.current.style.transform=`scaleX(${t>0?window.scrollY/t:0})`),e=!1}))};return window.addEventListener(`scroll`,t,{passive:!0}),t(),()=>window.removeEventListener(`scroll`,t)},[]),(0,Q.jsxs)(f,{children:[(0,Q.jsx)(p,{ref:i}),(0,Q.jsxs)(ee,{"aria-label":`Sections`,children:[(0,Q.jsx)(te,{children:`CRYPTO`}),$.map(e=>(0,Q.jsxs)(m,{href:`#${e.id}`,$active:n===e.id,children:[e.kicker.toUpperCase(),e.id===`trades`&&(0,Q.jsx)(`span`,{children:`4`})]},e.id)),(0,Q.jsxs)(h,{children:[`HOMUNCULUS`,(0,Q.jsx)(`br`,{}),`v0.1.0`]})]}),(0,Q.jsxs)(g,{children:[(0,Q.jsxs)(v,{children:[(0,Q.jsx)(y,{children:(0,Q.jsx)(`img`,{src:W,alt:``})}),(0,Q.jsx)(b,{}),(0,Q.jsxs)(x,{children:[(0,Q.jsxs)(C,{children:[(0,Q.jsx)(`b`,{children:`●`}),` Homunculus \xA0//\xA0 Crypto`]}),(0,Q.jsxs)(w,{children:[`A trading desk that `,(0,Q.jsx)(`em`,{children:`reports to you`}),`.`]}),(0,Q.jsx)(T,{children:`The CRYPTO tab runs the whole operation: the book, the charts, a screener, live orders on the exchange, the agents that work them, and the settings that keep them honest. This page walks its seven sections in the order they sit on the rail.`})]}),(0,Q.jsx)(S,{children:(0,Q.jsxs)(E,{children:[(0,Q.jsxs)(`div`,{children:[`Pairs tracked `,(0,Q.jsx)(`b`,{children:`75`})]}),(0,Q.jsxs)(`div`,{children:[`Strategies `,(0,Q.jsx)(`b`,{children:`9`})]}),(0,Q.jsxs)(`div`,{children:[`Auto-execute `,(0,Q.jsx)(`b`,{children:`OFF`})]}),(0,Q.jsxs)(`div`,{children:[`Audit chain `,(0,Q.jsx)(`b`,{children:`INTACT`})]}),(0,Q.jsxs)(`div`,{children:[`Skin `,(0,Q.jsx)(`b`,{children:`PRISM`})]})]})})]}),(0,Q.jsxs)(`main`,{children:[$.map(t=>(0,Q.jsx)(D,{id:t.id,className:e[t.id]?`in`:void 0,children:(0,Q.jsxs)(_,{children:[(0,Q.jsxs)(j,{children:[(0,Q.jsx)(O,{children:t.kicker}),(0,Q.jsx)(k,{children:t.title}),(0,Q.jsx)(A,{children:t.thesis})]}),(0,Q.jsxs)(N,{children:[(0,Q.jsx)(M,{children:(0,Q.jsx)(`img`,{src:t.shot,alt:t.alt,loading:`lazy`})}),(0,Q.jsx)(ne,{children:t.caption})]}),(0,Q.jsx)(P,{children:t.notes.map(([e,t,n],r)=>(0,Q.jsxs)(F,{$i:r,$tone:n,children:[(0,Q.jsx)(`h3`,{children:e}),(0,Q.jsx)(`p`,{children:t})]},e))}),t.aside&&(0,Q.jsxs)(I,{children:[(0,Q.jsx)(N,{children:(0,Q.jsx)(M,{children:(0,Q.jsx)(`img`,{src:t.aside.shot,alt:t.aside.alt,loading:`lazy`})})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h3`,{children:t.aside.title}),t.aside.body.map(e=>(0,Q.jsx)(`p`,{children:e},e.slice(0,24)))]})]}),(0,Q.jsx)(L,{children:t.readout.map(([e,t])=>(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`b`,{children:e}),(0,Q.jsx)(`span`,{children:t})]},t))})]})},t.id)),(0,Q.jsxs)(_,{children:[(0,Q.jsxs)(R,{children:[(0,Q.jsx)(B,{to:`/homunculus`,children:`◂ BACK TO HOMUNCULUS`}),(0,Q.jsx)(V,{href:`mailto:rmccauleycode@gmail.com`,children:`CONTACT ▸`})]}),(0,Q.jsxs)(H,{children:[(0,Q.jsxs)(`span`,{children:[`Homunculus `,(0,Q.jsx)(`b`,{children:`v0.1.0 · 4cfdd3b`})]}),(0,Q.jsxs)(`span`,{children:[`Skin `,(0,Q.jsx)(`b`,{children:`Prism`})]}),(0,Q.jsxs)(`span`,{children:[`Captured live `,(0,Q.jsx)(`b`,{children:`10 Aug 2026`})]}),(0,Q.jsx)(U,{children:`Every screen above is a live capture of the running app, not a mockup. Account balances have been rescaled by a single constant before publication — so every ratio, percentage and chart is exactly what the real screen showed, while the dollar totals are not my own.`})]})]})]})]})]})},ae=()=>(0,Q.jsx)(ie,{});export{ae as default};