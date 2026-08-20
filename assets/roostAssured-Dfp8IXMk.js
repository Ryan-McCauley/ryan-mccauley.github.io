import{i as e,l as t,n,o as r,s as i,u as a}from"./index-DyW3ARmG.js";var o=a(t(),1),s={ground:`#17130f`,panel:`#1d1913`,elev:`#241f19`,amber:`#d9a441`,amberHot:`#f59e0b`,amberDeep:`#d97706`,cream:`#f3ede1`,creamSoft:`#b7ab98`,dim:`#8a7c68`,dimmer:`#6b6154`,emerald:`#6ee7b7`,rust:`#f3a5a5`,line:`rgba(217, 164, 65, 0.14)`,lineStrong:`rgba(217, 164, 65, 0.3)`,grad:`linear-gradient(100deg, #d9a441, #f59e0b, #b45309, #d9a441)`},c=`156px`,ee=e`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`,te=e`
  0%   { opacity: 0; transform: scale(1.06); filter: brightness(2.2) saturate(0); }
  45%  { opacity: 0.5; filter: brightness(1.3) saturate(0.6); }
  100% { opacity: 1; transform: scale(1); filter: none; }
`,l=e`
  0%   { opacity: 0; transform: translateY(-24%); }
  12%  { opacity: 1; }
  88%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(460%); }
`,u=r.div`
  background:
    radial-gradient(60vw 50vh at 12% 0%, rgba(217, 164, 65, 0.07), transparent 70%),
    radial-gradient(50vw 40vh at 88% 60%, rgba(245, 158, 11, 0.05), transparent 70%),
    ${s.ground};
  color: ${s.cream};
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 16px;

  /* App.css carries a global \`* { font-family: 'fira code', monospace }\`, which
     beats inheritance on every element that doesn't declare its own face. The
     Homunculus pages are happy with that -- they're terminals. This one is a
     consumer marketplace, so it re-asserts its face for descendants. The code
     figures opt back out with a doubled class (see Code below). */
  & * {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
  }
  line-height: 1.65;
  min-height: 100vh;
  overflow-x: hidden;
`,d=r.div`
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
`,f=r.nav`
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
`,p=r.div`
  padding: 0 10px 10px;
  margin-bottom: 6px;
  border-bottom: 1px solid ${s.line};
  color: ${s.amber};
  font-size: 15px;
  letter-spacing: 2px;

  @media (max-width: 1020px) { display: none; }
`,ne=r.a`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  color: ${e=>e.$active?s.cream:s.dim};
  background: ${e=>e.$active?s.elev:`transparent`};
  border-left: 2px solid ${e=>e.$active?s.amber:`transparent`};
  font-size: 14px;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease;

  &:hover { color: ${s.cream}; }
  &:focus-visible { outline: 2px solid ${s.amberHot}; outline-offset: 2px; }

  span {
    margin-left: auto;
    font-size: 12px;
    color: ${s.dimmer};
  }

  @media (max-width: 1020px) {
    border-left: 0;
    border-bottom: 2px solid ${e=>e.$active?s.amber:`transparent`};
    background: transparent;
    white-space: nowrap;
    padding: 12px;

    span { display: none; }
  }
`,m=r.a`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding: 9px 10px;
  border-top: 1px solid ${s.line};
  color: ${s.amber};
  font-size: 13px;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.18s ease, background 0.18s ease;

  &:hover { color: ${s.amberHot}; background: ${s.elev}; }
  &:focus-visible { outline: 2px solid ${s.amberHot}; outline-offset: 2px; }

  @media (max-width: 1020px) {
    margin-top: 0;
    padding: 12px;
    border-top: 0;
    border-left: 1px solid ${s.line};
    white-space: nowrap;
  }
`,h=r.div`
  margin-top: auto;
  padding: 0 10px;
  color: ${s.dimmer};
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media (max-width: 1020px) { display: none; }
`,re=r.div`
  margin-left: ${c};

  @media (max-width: 1020px) { margin-left: 0; }
`,g=r.div`
  max-width: 1680px;
  /* explicit: Wrap is also a flex child in the hero, where an auto horizontal
     margin would otherwise cancel the stretch and shrink it to its content */
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 72px);
  box-sizing: border-box;
`,_=r.header`
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
`,v=r.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0;
  transform: scale(1.06);
  animation: ${te} 1.6s cubic-bezier(0.2, 0.7, 0.3, 1) 0.15s forwards;

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
`,y=r.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(5,3,10,0.8) 0%, rgba(5,3,10,0.33) 32%, rgba(5,3,10,0.9) 78%, ${s.ground} 100%),
    linear-gradient(90deg, rgba(5,3,10,0.95) 0%, rgba(5,3,10,0.6) 46%, rgba(5,3,10,0.3) 100%);
`,b=r(g)`
  position: relative;
  z-index: 2;
  padding-bottom: 64px;
`,x=r(g)`
  position: relative;
  z-index: 2;
`,S=r.p`
  font-size: 13px;
  letter-spacing: 3px;
  color: ${s.dim};
  text-transform: uppercase;
  margin: 0 0 20px;

  b { color: ${s.amber}; font-weight: 400; }
`,C=r.h1`
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
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
    animation: ${ee} 9s linear infinite;

    @media (prefers-reduced-motion: reduce) { animation: none; }
  }
`,w=r.p`
  font-size: clamp(16px, 1.5vw, 20px);
  color: ${s.cream};
  max-width: 60ch;
  margin: 0 0 36px;
`,T=r.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid ${s.line};
  border-bottom: 1px solid ${s.line};
  background: rgba(23, 19, 15, 0.62);

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
  b { color: ${s.amber}; font-weight: 400; }

  /* Five cells wrapping in a flex row left right-hand rules dangling mid-row.
     A single column reads cleanly and stays correct for any cell count — a
     two-up grid would leave the odd last cell as a phantom half-row. */
  @media (max-width: 700px) {
    display: block;

    div {
      padding: 11px 0;
      margin-right: 0;
      border-right: 0;
      border-bottom: 1px solid ${s.line};
      font-size: 12px;
    }
    div:last-child { border-bottom: 0; }
  }
`,E=r.section`
  padding-top: clamp(88px, 12vh, 150px);
`,D=r.p`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  letter-spacing: 3px;
  color: ${s.amber};
  text-transform: uppercase;
  margin: 0 0 16px;

  &:after {
    content: '';
    flex: 1;
    height: 1px;
    max-width: 220px;
    background: linear-gradient(90deg, ${s.lineStrong}, transparent);
  }
`,O=r.h2`
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: clamp(27px, 3.5vw, 50px);
  line-height: 1.1;
  letter-spacing: -0.3px;
  text-wrap: balance;
  margin: 0 0 18px;
  color: #fff;
  max-width: 20ch;
`,k=r.p`
  font-size: clamp(15px, 1.35vw, 19px);
  color: ${s.cream};
  margin: 0;
  max-width: 62ch;
`,A=r.div`
  margin-bottom: 44px;
  max-width: 66ch;
`,j=r.div`
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
      linear-gradient(180deg, transparent 61%, ${s.amberHot} 62%, transparent 63%);
    mix-blend-mode: screen;
  }

  .in & { opacity: 1; transform: none; }
  .in &:after { animation: ${l} 1.25s cubic-bezier(0.3, 0.1, 0.2, 1) 0.18s 1; }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.2s linear;
    transform: none;
    .in &:after { animation: none; }
  }

  /* Shrink-to-fit renders a 1200px dashboard capture at ~28% on a phone, where
     no panel in it is readable. Keep a legible intrinsic width and pan. */
  @media (max-width: 700px) {
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    img { width: 860px; max-width: none; }
  }
`,M=r.figure`
  margin: 0;
`,N=r.figcaption`
  margin-top: 14px;
  font-size: 13px;
  letter-spacing: 1.5px;
  color: ${s.dimmer};
  text-transform: uppercase;

  /* The capture pans on mobile and the scrollbar is hidden, so say so. */
  @media (max-width: 700px) {
    &::before {
      content: 'Drag to read \\25B8 ';
      color: ${s.amber};
    }
  }
`,P=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
  margin-top: 52px;
  border-top: 1px solid ${s.line};
  border-left: 1px solid ${s.line};
`,F=r.div`
  border-right: 1px solid ${s.line};
  border-bottom: 1px solid ${s.line};
  padding: 26px 26px 30px;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${e=>(.06*(e.$i||0)+.1).toFixed(2)}s;

  .in & { opacity: 1; transform: none; }

  h3 {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 0 0 10px;
    /* Three distinct readings: neutral notes stay cream, a caveat takes the brand
       amber, and an outright problem takes the rust. The PRISM sheet this was
       adapted from used cyan as its neutral, which collapsed into the warn tone
       once the palette went warm. */
    color: ${e=>e.$tone===`warn`?s.amber:e.$tone===`hot`?s.rust:s.cream};
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
`,I=r.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: clamp(24px, 3vw, 56px);
  align-items: center;

  h3 {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
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

  /* minmax(0, …) has to survive the stack, not just the two-column case: a
     grid item defaults to min-width:auto, so without it the captures' 860px
     pan width sizes the track and the column blows past the viewport. */
  @media (max-width: 1020px) { grid-template-columns: minmax(0, 1fr); }
`,L=r.div`
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
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
    font-weight: 700;
    font-size: clamp(26px, 3vw, 40px);
    line-height: 1;
    color: ${s.amber};
    font-variant-numeric: tabular-nums;
    margin-bottom: 10px;
  }
  span {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${s.dim};
  }
`,R=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: clamp(88px, 12vh, 150px);
`,z=r(R)`
  margin-top: 0;
`,B=`
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 26px;
  transition: background 0.2s ease, box-shadow 0.2s ease;
`;r(i)`
  ${B}
  color: ${s.amber};
  border: 1px solid ${s.lineStrong};

  &:hover {
    background: rgba(217, 164, 65, 0.08);
    box-shadow: 0 0 20px rgba(217, 164, 65, 0.2);
  }
  &:focus-visible { outline: 2px solid ${s.amberHot}; outline-offset: 2px; }
`;var V=r.a`
  ${B}
  color: ${s.amber};
  border: 1px solid ${s.lineStrong};

  &:hover {
    background: rgba(217, 164, 65, 0.08);
    box-shadow: 0 0 20px rgba(217, 164, 65, 0.2);
  }
  &:focus-visible { outline: 2px solid ${s.amberHot}; outline-offset: 2px; }
`,H=r.footer`
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
`,U=r.p`
  flex: 1 1 100%;
  margin: 10px 0 0;
  max-width: 78ch;
  font-size: 13px;
  line-height: 1.7;
  letter-spacing: 0;
  text-transform: none;
  color: ${s.dim};
`,W=r.pre`
  /* Doubled deliberately: outranks the descendant font rule on Page, for this
     element and the emphasis spans inside it. */
  &&, && * {
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
  }

  margin: 0;
  padding: 20px 22px;
  overflow-x: auto;
  background: ${s.panel};
  border: 1px solid ${s.line};
  border-left: 2px solid ${s.amber};
  border-radius: 3px;
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
  font-size: 13.5px;
  line-height: 1.72;
  color: ${s.cream};
  tab-size: 2;

  /* Comments carry most of the reasoning in these excerpts, so they get their
     own weight rather than being dimmed into unreadability. */
  i {
    font-style: normal;
    color: ${s.dim};
  }
  b {
    font-weight: 400;
    color: ${s.amber};
  }

  @media (max-width: 700px) {
    font-size: 12px;
    padding: 15px 16px;
  }
`,G=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 11.5px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: ${s.dimmer};

  b {
    font-weight: 400;
    color: ${s.amber};
  }
  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, ${s.line}, transparent);
  }

  /* A full file path plus 1.6px of tracking doesn't fit a phone on one line, and
     nowrap flex just clipped the filename -- the useful half. Wrap instead, and
     drop the trailing rule since it has nothing left to lead into. */
  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 0 8px;
    letter-spacing: 1.1px;
    font-size: 10.5px;
    word-break: break-word;

    &:after { display: none; }
  }
`,K=r.ol`
  list-style: none;
  counter-reset: step;
  margin: 34px 0 0;
  padding: 0;

  li {
    counter-increment: step;
    position: relative;
    padding: 0 0 26px 52px;

    &:before {
      content: counter(step, decimal-leading-zero);
      position: absolute;
      left: 0;
      top: 1px;
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      border: 1px solid ${s.lineStrong};
      border-radius: 50%;
      background: ${s.panel};
      font-size: 11.5px;
      letter-spacing: 0.5px;
      color: ${s.amber};
    }

    /* the spine, drawn between beats but not past the last one */
    &:after {
      content: '';
      position: absolute;
      left: 15px;
      top: 36px;
      bottom: 8px;
      width: 1px;
      background: linear-gradient(180deg, ${s.lineStrong}, ${s.line});
    }
    &:last-child { padding-bottom: 0; }
    &:last-child:after { display: none; }

    h4 {
      margin: 4px 0 5px;
      font-size: 16px;
      font-weight: 600;
      color: ${s.cream};
    }
    p {
      margin: 0;
      font-size: 14.5px;
      color: ${s.creamSoft};
      max-width: 68ch;
    }
    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.92em;
      color: ${s.amber};
    }
  }

  /* The commit beat is the whole point of the sequence — it is what separates a
     charge that can be rolled away from one that cannot. */
  li.pivot:before {
    border-color: ${s.amber};
    background: ${s.amber};
    color: ${s.ground};
  }

  @media (max-width: 700px) {
    li { padding-left: 42px; }
    li:before { width: 26px; height: 26px; font-size: 10.5px; }
    li:after { left: 13px; top: 32px; }
  }
`,q=r.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 22px;
  margin-top: 34px;

  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); }
`,J=r.dl`
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  gap: 0;
  margin: 34px 0 0;
  border-top: 1px solid ${s.line};

  dt {
    padding: 15px 20px 15px 0;
    border-bottom: 1px solid ${s.line};
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 14px;
    color: ${s.amber};
  }
  dd {
    margin: 0;
    padding: 15px 0;
    border-bottom: 1px solid ${s.line};
    font-size: 15px;
    color: ${s.dim};
    line-height: 1.6;
  }

  b {
    font-weight: 400;
    color: ${s.cream};
  }

  /* Two columns become unreadable once the name column is squeezed; stack the
     pair and let the name act as a heading for its own row. */
  @media (max-width: 640px) {
    display: block;

    dt {
      padding: 15px 0 2px;
      border-bottom: 0;
    }
    dd { padding: 0 0 15px; }
  }
`,Y=r.h3`
  margin: 60px 0 14px;
  font-size: clamp(20px, 2.2vw, 28px);
  font-weight: 600;
  color: ${s.cream};
  letter-spacing: -0.2px;
`,X=`/assets/hero-Ba7_jwo9.png`,ie=`/assets/hero-dark-Bo5vY0po.png`,ae=`/assets/become-sitter-D4wczZU5.png`,oe=`/assets/background-check-BcoG5XBO.png`,Z=n(),Q=`https://github.com/Ryan-McCauley/RoostAssured`,$=[{id:`marketplace`,kicker:`The marketplace`},{id:`vetting`,kicker:`Vetting · Checkr`},{id:`money`,kicker:`Money · Stripe`},{id:`reliability`,kicker:`When the wire lies`},{id:`infrastructure`,kicker:`Shipping it`}],se=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)($[0].id),[r,i]=(0,o.useState)({});(0,o.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(n(e.target.id),i(t=>t[e.target.id]?t:{...t,[e.target.id]:!0}))})},{rootMargin:`-45% 0px -45% 0px`});return $.forEach(t=>{let n=document.getElementById(t.id);n&&e.observe(n)}),()=>e.disconnect()},[]),(0,o.useEffect)(()=>{let t=!1,n=()=>{t||(t=!0,window.requestAnimationFrame(()=>{let n=document.body.scrollHeight-window.innerHeight;e.current&&(e.current.style.transform=`scaleX(${n>0?window.scrollY/n:0})`),t=!1}))};return window.addEventListener(`scroll`,n,{passive:!0}),n(),()=>window.removeEventListener(`scroll`,n)},[]);let a=e=>r[e]?`in`:void 0;return(0,Z.jsxs)(u,{children:[(0,Z.jsx)(d,{ref:e}),(0,Z.jsxs)(f,{"aria-label":`Sections`,children:[(0,Z.jsx)(p,{children:`ROOST`}),$.map(e=>(0,Z.jsx)(ne,{href:`#${e.id}`,$active:t===e.id,children:e.kicker.toUpperCase()},e.id)),(0,Z.jsx)(m,{href:Q,target:`_blank`,rel:`noopener noreferrer`,children:`SOURCE ↗`}),(0,Z.jsxs)(h,{children:[`RAILS 8.1`,(0,Z.jsx)(`br`,{}),`REACT 19`,(0,Z.jsx)(`br`,{}),`STRIPE + CHECKR`]})]}),(0,Z.jsxs)(re,{children:[(0,Z.jsxs)(_,{children:[(0,Z.jsx)(v,{children:(0,Z.jsx)(`img`,{src:X,alt:``})}),(0,Z.jsx)(y,{}),(0,Z.jsxs)(b,{children:[(0,Z.jsxs)(S,{children:[(0,Z.jsx)(`b`,{children:`●`}),` Roost Assured \xA0//\xA0 Marketplace`]}),(0,Z.jsxs)(C,{children:[`A marketplace that `,(0,Z.jsx)(`em`,{children:`moves other people’s money`}),`.`]}),(0,Z.jsx)(w,{children:`Owners post a request to have their backyard flock looked after. Background-checked sitters nearby bid on it. When a bid is accepted, the platform charges the owner, pays the sitter, and keeps a cut — which means an ordinary web app suddenly has to be right about money, identity, and what happens when the network lies to it. This walks the two integrations that carry that weight.`}),(0,Z.jsx)(z,{children:(0,Z.jsx)(V,{href:Q,target:`_blank`,rel:`noopener noreferrer`,children:`SOURCE ON GITHUB ↗`})})]}),(0,Z.jsx)(x,{children:(0,Z.jsxs)(T,{children:[(0,Z.jsxs)(`div`,{children:[`Stack `,(0,Z.jsx)(`b`,{children:`Rails 8.1 · React 19`})]}),(0,Z.jsxs)(`div`,{children:[`Payments `,(0,Z.jsx)(`b`,{children:`Stripe Connect`})]}),(0,Z.jsxs)(`div`,{children:[`Screening `,(0,Z.jsx)(`b`,{children:`Checkr`})]}),(0,Z.jsxs)(`div`,{children:[`Take rate `,(0,Z.jsx)(`b`,{children:`15%`})]}),(0,Z.jsxs)(`div`,{children:[`Tests `,(0,Z.jsx)(`b`,{children:`104 passing`})]})]})})]}),(0,Z.jsxs)(`main`,{children:[(0,Z.jsx)(E,{id:`marketplace`,className:a(`marketplace`),children:(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(A,{children:[(0,Z.jsx)(D,{children:`The marketplace`}),(0,Z.jsx)(O,{children:`Two sides, and a cut of what passes between them.`}),(0,Z.jsx)(k,{children:`An owner enters a ZIP and says which days they need covered. Every active sitter whose travel radius reaches them sees the request and can bid on it. The owner accepts one. That single click is where the money moves, and it is the only click in the app that can go wrong expensively.`})]}),(0,Z.jsxs)(M,{children:[(0,Z.jsx)(j,{children:(0,Z.jsx)(`img`,{src:X,alt:`The Roost Assured landing page: a ZIP-code search for chicken sitting or coop care, with a background-check promise and a sitter recruitment banner.`,loading:`lazy`})}),(0,Z.jsx)(N,{children:`Landing · the owner side of the market`})]}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(F,{$i:0,children:[(0,Z.jsx)(`h3`,{children:`Matching runs on distance, not on a city name`}),(0,Z.jsx)(`p`,{children:`Every sitter carries a travel radius. A SQL bounding box narrows candidates, then an exact Haversine check decides — the box is over-inclusive at its corners, so it never gets the final say.`})]}),(0,Z.jsxs)(F,{$i:1,children:[(0,Z.jsx)(`h3`,{children:`The owner’s address stays private until it has to not be`}),(0,Z.jsx)(`p`,{children:`Sitters browsing requests see a ZIP centroid on a map. Phone number and street address are released only once a bid is accepted, in the serializer, not by convention.`})]}),(0,Z.jsxs)(F,{$i:2,children:[(0,Z.jsx)(`h3`,{children:`Bids go stale on purpose`}),(0,Z.jsx)(`p`,{children:`If the owner edits the substance of a request after a sitter has bid, that bid is flagged stale and can’t be accepted until the sitter resubmits. Nobody gets charged for a job that changed under them.`})]}),(0,Z.jsxs)(F,{$i:3,children:[(0,Z.jsx)(`h3`,{children:`Eligibility is enforced on the write`}),(0,Z.jsx)(`p`,{children:`A sitter can only bid on someone their radius actually reaches. That rule lives in one predicate the index query and the create action both consult — not in the query that happens to render the page.`})]}),(0,Z.jsxs)(F,{$i:4,children:[(0,Z.jsx)(`h3`,{children:`Live job tracking`}),(0,Z.jsx)(`p`,{children:`Once a job starts, the sitter’s checklist, ETA and photos stream to the owner over Action Cable. A job can’t be marked complete until every task is ticked and at least one photo is attached.`})]}),(0,Z.jsxs)(F,{$i:5,children:[(0,Z.jsx)(`h3`,{children:`Blocking is mutual`}),(0,Z.jsx)(`p`,{children:`It doesn’t matter who blocked whom — after that, neither side can bid, message, or match with the other again.`})]})]}),(0,Z.jsxs)(I,{children:[(0,Z.jsx)(M,{children:(0,Z.jsx)(j,{children:(0,Z.jsx)(`img`,{src:ie,alt:`The same landing page rendered in dark mode, warm amber on charcoal.`,loading:`lazy`})})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h3`,{children:`The theme resolves before first paint`}),(0,Z.jsxs)(`p`,{children:[`Dark is the default. The choice is read from localStorage by a small inline script in the document head, which sets a `,(0,Z.jsx)(`code`,{children:`data-theme`}),` attribute before React ever mounts — otherwise a light-mode visitor gets a dark flash on every single page load.`]}),(0,Z.jsxs)(`p`,{children:[`That script is the one exception to a Content Security Policy that is otherwise `,(0,Z.jsx)(`code`,{children:`script-src 'self'`}),` with named third-party origins rather than a blanket `,(0,Z.jsx)(`code`,{children:`https:`}),`. It gets a per-response nonce, so it runs without opening the policy to inline script generally.`]})]})]}),(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`15%`}),(0,Z.jsx)(`span`,{children:`Platform take`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`5–50mi`}),(0,Z.jsx)(`span`,{children:`Sitter travel radius`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`104`}),(0,Z.jsx)(`span`,{children:`Tests`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`0`}),(0,Z.jsx)(`span`,{children:`CI gates failing`})]})]})]})}),(0,Z.jsx)(E,{id:`vetting`,className:a(`vetting`),children:(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(A,{children:[(0,Z.jsx)(D,{children:`Vetting · Checkr`}),(0,Z.jsx)(O,{children:`Never hold the data you don’t want to be responsible for.`}),(0,Z.jsx)(k,{children:`This app sends strangers to people’s homes, so sitters are screened before they can take a job. The screening is real — a Checkr criminal background report — and the $50 application fee exists to pay for it. The design constraint that shaped everything else: Roost Assured never sees an SSN or a date of birth.`})]}),(0,Z.jsxs)(M,{children:[(0,Z.jsx)(j,{children:(0,Z.jsx)(`img`,{src:ae,alt:`The Become a Sitter page, showing the five-step application process: create an account, submit the application, pay the $50 fee, complete the Checkr background check on their hosted portal, then get approved and start bidding.`,loading:`lazy`})}),(0,Z.jsx)(N,{children:`Sitter recruitment · the five-step application, fee and screening spelled out up front`})]}),(0,Z.jsxs)(k,{style:{marginTop:38},children:[`The applicant never types identifying information into this app. Roost Assured creates a `,(0,Z.jsx)(`b`,{children:`candidate`}),` and an `,(0,Z.jsx)(`b`,{children:`invitation`}),` on Checkr, and Checkr emails the applicant a link to its own hosted portal, where consent, SSN and date of birth are collected. What comes back here is a status string.`]}),(0,Z.jsxs)(G,{children:[`app/services/checkr/`,(0,Z.jsx)(`b`,{children:`invitation_service.rb`})]}),(0,Z.jsx)(W,{children:`candidate = client.post("candidates", {
  email: sitter_application.email_address,
  first_name: first_name,
  last_name: last_name,
  zipcode: sitter_application.zip_code
})

invitation = client.post("invitations", {
  candidate_id: candidate["id"],
  package: CheckrConfig::PACKAGE
})

sitter_application.update!(
  checkr_candidate_id: candidate["id"],
  checkr_invitation_id: invitation["id"],
  background_check_status: "invited"
)`}),(0,Z.jsxs)(K,{children:[(0,Z.jsxs)(`li`,{children:[(0,Z.jsx)(`h4`,{children:`Application submitted, fee charged`}),(0,Z.jsx)(`p`,{children:`An on-session Stripe charge for $50, restricted to card payment methods so no redirect-based method can demand a return URL mid-flow. A prior paid-but-unsaved attempt is reused rather than billed twice.`})]}),(0,Z.jsxs)(`li`,{children:[(0,Z.jsx)(`h4`,{children:`Candidate and invitation created`}),(0,Z.jsx)(`p`,{children:`Two calls to Checkr. Failure here is caught and logged rather than raising — the application is already saved and paid for, and losing it because a third party had a bad minute would be the worse outcome.`})]}),(0,Z.jsxs)(`li`,{children:[(0,Z.jsx)(`h4`,{children:`The applicant completes the check on Checkr’s portal`}),(0,Z.jsxs)(`p`,{children:[`Out of this system entirely. Roost Assured holds a `,(0,Z.jsx)(`code`,{children:`candidate_id`}),` and an `,(0,Z.jsx)(`code`,{children:`invitation_id`}),` and nothing else.`]})]}),(0,Z.jsxs)(`li`,{children:[(0,Z.jsx)(`h4`,{children:`Checkr calls back, signed`}),(0,Z.jsx)(`p`,{children:`Every webhook is HMAC-verified before it is believed, and every event id is recorded so a redelivery can’t be processed twice.`})]}),(0,Z.jsxs)(`li`,{className:`pivot`,children:[(0,Z.jsx)(`h4`,{children:`Approval is gated on the result`}),(0,Z.jsxs)(`p`,{children:[`An admin cannot approve an applicant whose report came back `,(0,Z.jsx)(`code`,{children:`consider`}),` or `,(0,Z.jsx)(`code`,{children:`suspended`}),` without an explicit override — and the override is written to the record.`]})]})]}),(0,Z.jsxs)(q,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(G,{children:[`Webhook `,(0,Z.jsx)(`b`,{children:`verification`})]}),(0,Z.jsx)(W,{children:`digest = OpenSSL::HMAC.hexdigest(
  "SHA256", CheckrConfig.webhook_key, payload
)
return nil unless ActiveSupport::SecurityUtils
  .secure_compare(digest, signature)`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(G,{children:[`Approval `,(0,Z.jsx)(`b`,{children:`gate`})]}),(0,Z.jsx)(W,{children:`def approvable?(override: false)
  background_check_cleared? || override
end`})]})]}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(F,{$i:0,children:[(0,Z.jsx)(`h3`,{children:`The gate lives in the model`}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`code`,{children:`approvable?`}),` and the reason a decision was blocked are defined on `,(0,Z.jsx)(`code`,{children:`SitterApplication`}),`, not in the admin controller. The rule travels with the record, so no future code path can approve around it.`]})]}),(0,Z.jsxs)(F,{$i:1,$tone:`warn`,children:[(0,Z.jsx)(`h3`,{children:`Overrides leave a trace`}),(0,Z.jsx)(`p`,{children:`Approving despite a flagged report is allowed — a dispute can be legitimate — but it sets a boolean on the application. “Who approved a sitter whose check wasn’t clear” has to be answerable later.`})]}),(0,Z.jsxs)(F,{$i:2,children:[(0,Z.jsx)(`h3`,{children:`Statuses are allow-listed`}),(0,Z.jsxs)(`p`,{children:[`The report handler only accepts `,(0,Z.jsx)(`code`,{children:`clear`}),`, `,(0,Z.jsx)(`code`,{children:`consider`}),`, `,(0,Z.jsx)(`code`,{children:`suspended`}),` and `,(0,Z.jsx)(`code`,{children:`dispute`}),`. An unrecognised status is ignored rather than written through into a field the approval gate reads.`]})]}),(0,Z.jsxs)(F,{$i:3,$tone:`warn`,children:[(0,Z.jsx)(`h3`,{children:`Consent is validated, not implied`}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`code`,{children:`background_check_consent`}),` is an acceptance validation on the application itself — an applicant cannot reach the screening step without it, and the record carries proof that they agreed.`]})]}),(0,Z.jsxs)(F,{$i:4,children:[(0,Z.jsx)(`h3`,{children:`An applicant is never charged twice`}),(0,Z.jsx)(`p`,{children:`A succeeded fee that isn’t yet attached to an application is picked up by the next attempt rather than billing the non-refundable $50 again — and the charge itself carries an idempotency key scoped to the card used.`})]}),(0,Z.jsxs)(F,{$i:5,children:[(0,Z.jsx)(`h3`,{children:`The whole integration is optional`}),(0,Z.jsxs)(`p`,{children:[`Without an API key configured, `,(0,Z.jsx)(`code`,{children:`CheckrConfig.configured?`}),` is false and the invitation step no-ops. Local development and CI never reach out to a real screening provider.`]})]})]}),(0,Z.jsxs)(I,{children:[(0,Z.jsx)(M,{children:(0,Z.jsx)(j,{children:(0,Z.jsx)(`img`,{src:oe,alt:`The Background Check Disclosure legal page, explaining what is screened, who performs it, and the applicant's rights.`,loading:`lazy`})})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h3`,{children:`The disclosure is a page, not a checkbox`}),(0,Z.jsx)(`p`,{children:`Consent to a background check is a legal act with its own requirements, so it gets a real page explaining who performs the screening, what it covers, and what the applicant can do about a result they dispute.`}),(0,Z.jsx)(`p`,{children:`It is linked from the footer of every page and from the application flow itself, so the terms an applicant is agreeing to are reachable before they agree rather than buried in an acceptance checkbox.`})]})]}),(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`$50`}),(0,Z.jsx)(`span`,{children:`Application fee`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`0`}),(0,Z.jsx)(`span`,{children:`SSNs stored`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`HMAC`}),(0,Z.jsx)(`span`,{children:`Webhook auth`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`4`}),(0,Z.jsx)(`span`,{children:`Accepted statuses`})]})]})]})}),(0,Z.jsx)(E,{id:`money`,className:a(`money`),children:(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(A,{children:[(0,Z.jsx)(D,{children:`Money · Stripe Connect`}),(0,Z.jsx)(O,{children:`The charge sits outside the transaction, deliberately.`}),(0,Z.jsx)(k,{children:`Accepting a bid charges the owner’s stored card, routes the money to the sitter’s Connect account, and keeps 15% as an application fee. A charge is an irreversible external side effect, and a database transaction is a thing that can be undone — so the two are never allowed to overlap. The accept path is built in three phases to guarantee it.`})]}),(0,Z.jsxs)(K,{children:[(0,Z.jsxs)(`li`,{children:[(0,Z.jsx)(`h4`,{children:`Reserve, under the lock`}),(0,Z.jsxs)(`p`,{children:[`Re-check the guards and write a `,(0,Z.jsx)(`code`,{children:`pending`}),` payment row carrying a freshly generated idempotency key. Local writes only — nothing external is touched.`]})]}),(0,Z.jsxs)(`li`,{className:`pivot`,children:[(0,Z.jsx)(`h4`,{children:`Commit`}),(0,Z.jsx)(`p`,{children:`The transaction closes here. From this moment the reservation is durable, so the already-paid guard is backed by a committed row before a single cent moves.`})]}),(0,Z.jsxs)(`li`,{children:[(0,Z.jsx)(`h4`,{children:`Charge, outside any transaction`}),(0,Z.jsxs)(`p`,{children:[`One `,(0,Z.jsx)(`code`,{children:`PaymentIntent`}),`, confirmed off-session, with a destination transfer and an application fee. Nothing can roll it away, because there is nothing to roll back into.`]})]}),(0,Z.jsxs)(`li`,{children:[(0,Z.jsx)(`h4`,{children:`Promote the bid`}),(0,Z.jsxs)(`p`,{children:[`Only now does the bid become `,(0,Z.jsx)(`code`,{children:`accepted`}),` and the competing bids get rejected. The bid is never in a state the money doesn’t back.`]})]})]}),(0,Z.jsxs)(k,{style:{marginTop:34},children:[`The ordering is the whole design. A payment provider has no way of knowing that a database transaction rolled back, so the reservation is committed `,(0,Z.jsx)(`i`,{children:`before`}),` any money moves — which means the guard against charging an owner twice is backed by a durable row rather than one that could disappear from underneath it.`]}),(0,Z.jsxs)(G,{children:[`app/controllers/api/`,(0,Z.jsx)(`b`,{children:`received_bids_controller.rb`})]}),(0,Z.jsxs)(W,{children:[`@bid.with_lock do
  rejection = guard_reasons_for(@bid)
  payment = BidPaymentService.new.reserve!(@bid) if rejection.nil?
end
`,(0,Z.jsx)(`i`,{children:`# ── committed ─────────────────────────────────────────────`}),`

BidPaymentService.new.charge!(payment)

@bid.with_lock do
  other_bids.update_all(status: "rejected")
  @bid.update!(status: "accepted")
  @bid.seed_job_tasks!
end`]}),(0,Z.jsxs)(G,{children:[`app/services/stripe_payments/`,(0,Z.jsx)(`b`,{children:`bid_payment_service.rb`})]}),(0,Z.jsxs)(W,{children:[`intent = ::Stripe::PaymentIntent.create(
  {
    amount: (payment.amount * 100).round,
    currency: "usd",
    customer: owner.stripe_customer_id,
    payment_method: owner.default_payment_method_id,
    confirm: true,
    off_session: true,
    application_fee_amount: (payment.application_fee_amount * 100).round,
    transfer_data: { destination: sitter.stripe_account_id },
    `,(0,Z.jsx)(`i`,{children:`# lets the webhook find this row even if the response never lands`}),`
    metadata: { payment_id: payment.id, bid_id: bid.id }
  },
  `,(0,Z.jsx)(`i`,{children:`# collapses a retry into the original charge instead of billing twice`}),`
  idempotency_key: `,(0,Z.jsx)(`b`,{children:`"payment-#{payment.idempotency_key}"`}),`
)`]}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(F,{$i:0,children:[(0,Z.jsx)(`h3`,{children:`Destination charges, not transfers`}),(0,Z.jsxs)(`p`,{children:[`The owner is charged, the sitter’s Express account is the transfer destination, and the platform’s 15% is an `,(0,Z.jsx)(`code`,{children:`application_fee_amount`}),` on the same intent. One object to reason about, one object to refund.`]})]}),(0,Z.jsxs)(F,{$i:1,children:[(0,Z.jsx)(`h3`,{children:`Every Stripe write carries an idempotency key`}),(0,Z.jsx)(`p`,{children:`The bid charge, the $50 application fee, refunds, and Connect account creation. A timeout where the request actually succeeded is the normal case this protects against, not an exotic one.`})]}),(0,Z.jsxs)(F,{$i:2,children:[(0,Z.jsx)(`h3`,{children:`The key is the reservation’s, not the bid’s`}),(0,Z.jsx)(`p`,{children:`Scoping the key to the reservation rather than the bid is what lets a genuine second attempt through after a declined card, while still collapsing an accidental retry of the same attempt into one charge.`})]}),(0,Z.jsxs)(F,{$i:3,children:[(0,Z.jsx)(`h3`,{children:`Money is decimal all the way down`}),(0,Z.jsxs)(`p`,{children:[`Amounts are `,(0,Z.jsx)(`code`,{children:`decimal`}),` columns, never floats, and are converted to integer cents at the boundary with Stripe. A waived commission is a legitimate $0 fee, so the validation admits it rather than treating zero as an error.`]})]}),(0,Z.jsxs)(F,{$i:4,children:[(0,Z.jsx)(`h3`,{children:`Card state is mirrored locally`}),(0,Z.jsxs)(`p`,{children:[`“Can this owner be charged?” is a column read, not a live `,(0,Z.jsx)(`code`,{children:`Customer.retrieve`}),` on the account page and again mid-checkout. The `,(0,Z.jsx)(`code`,{children:`customer.updated`}),` webhook keeps it honest when a card changes on Stripe’s side.`]})]}),(0,Z.jsxs)(F,{$i:5,$tone:`warn`,children:[(0,Z.jsx)(`h3`,{children:`The isolation is tested, not assumed`}),(0,Z.jsx)(`p`,{children:`A test stubs the step after the charge to raise, then asserts the payment row survived the exception. A guarantee this quiet needs a test that would notice the day it stopped holding.`})]})]}),(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`3`}),(0,Z.jsx)(`span`,{children:`Phases per accept`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`4`}),(0,Z.jsx)(`span`,{children:`Idempotent Stripe writes`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`0`}),(0,Z.jsx)(`span`,{children:`Charges inside a transaction`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`15%`}),(0,Z.jsx)(`span`,{children:`Application fee`})]})]})]})}),(0,Z.jsx)(E,{id:`reliability`,className:a(`reliability`),children:(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(A,{children:[(0,Z.jsx)(D,{children:`When the wire lies`}),(0,Z.jsx)(O,{children:`A timeout is not a failure. It’s a question.`}),(0,Z.jsx)(k,{children:`Most error handling collapses everything that isn’t success into one bucket. On a payment path that is exactly wrong: a declined card and a connection reset call for opposite responses, and guessing costs real money in one direction or a stuck customer in the other.`})]}),(0,Z.jsxs)(G,{children:[`Two failures, `,(0,Z.jsx)(`b`,{children:`two answers`})]}),(0,Z.jsxs)(W,{children:[`rescue ::Stripe::CardError => e
  `,(0,Z.jsx)(`i`,{children:`# Definitive: no charge was created. Release the reservation so the`}),`
  `,(0,Z.jsx)(`i`,{children:`# owner can try a different card.`}),`
  payment&.update!(status: "failed")
  render json: { errors: [ e.message ] }, status: :unprocessable_entity

rescue ::Stripe::StripeError => e
  `,(0,Z.jsx)(`i`,{children:`# Ambiguous — a timeout, a reset. The charge may well have landed.`}),`
  `,(0,Z.jsx)(`i`,{children:`# Leave it pending: the guard stays armed so a retry can't bill twice,`}),`
  `,(0,Z.jsx)(`i`,{children:`# and the webhook settles it either way.`}),`
  render json: { errors: [ "We couldn't confirm that payment." ] },
         status: :bad_gateway`]}),(0,Z.jsxs)(k,{style:{marginTop:34},children:[`The webhook is what closes the loop — and it has its own race. Stripe frequently delivers `,(0,Z.jsx)(`code`,{children:`payment_intent.succeeded`}),` before the API response carrying the intent id has been written down. Looking the row up by that id alone loses; and because the event was already recorded as processed, the retry is dropped too, stranding the payment in `,(0,Z.jsx)(`code`,{children:`pending`}),` forever.`]}),(0,Z.jsxs)(G,{children:[`Reconciliation by `,(0,Z.jsx)(`b`,{children:`metadata`})]}),(0,Z.jsx)(W,{children:`def find_payment(intent)
  by_metadata = intent.metadata&.[]("payment_id")
  (by_metadata && Payment.find_by(id: by_metadata)) ||
    Payment.find_by(stripe_payment_intent_id: intent.id)
end`}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(F,{$i:0,children:[(0,Z.jsx)(`h3`,{children:`The payment carries its own id into Stripe`}),(0,Z.jsxs)(`p`,{children:[`Stamping `,(0,Z.jsx)(`code`,{children:`payment_id`}),` into the intent’s metadata gives the webhook something stable to match on that exists `,(0,Z.jsx)(`i`,{children:`before`}),` the charge is made, not after it returns.`]})]}),(0,Z.jsxs)(F,{$i:1,children:[(0,Z.jsx)(`h3`,{children:`Replay protection is a unique index`}),(0,Z.jsx)(`p`,{children:`Every Stripe and Checkr event id is inserted into its own table before handling. A duplicate delivery hits the constraint and returns early — not a cache, not a lock, a row.`})]}),(0,Z.jsxs)(F,{$i:2,children:[(0,Z.jsx)(`h3`,{children:`Signatures verified against the raw body`}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`code`,{children:`request.raw_post`}),`, not `,(0,Z.jsx)(`code`,{children:`request.body.read`}),` — params parsing has already consumed the stream, and the signature covers the original bytes.`]})]}),(0,Z.jsxs)(F,{$i:3,children:[(0,Z.jsx)(`h3`,{children:`A late decline reopens the bid`}),(0,Z.jsx)(`p`,{children:`Off-session charges can fail asynchronously, after the bid was already promoted. When that webhook lands, the bid goes back on the board so the owner can pick another sitter or another card.`})]}),(0,Z.jsxs)(F,{$i:4,$tone:`hot`,children:[(0,Z.jsx)(`h3`,{children:`Rate limits before the expensive work`}),(0,Z.jsx)(`p`,{children:`Rack::Attack throttles by IP at the edge, and the sensitive actions throttle again per user inside the app. Login, signup, password reset, bidding, and messaging each carry their own budget.`})]}),(0,Z.jsxs)(F,{$i:5,children:[(0,Z.jsx)(`h3`,{children:`Third-party calls run in jobs`}),(0,Z.jsx)(`p`,{children:`Geocoding and the sitter-alert fan-out are background jobs, never request-cycle callbacks, so a slow upstream can’t occupy a web thread. Geocode results are cached for 30 days, misses included.`})]})]}),(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`2`}),(0,Z.jsx)(`span`,{children:`Failure classes`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`2`}),(0,Z.jsx)(`span`,{children:`Webhook lookup paths`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`6`}),(0,Z.jsx)(`span`,{children:`Rack::Attack throttles`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`30d`}),(0,Z.jsx)(`span`,{children:`Geocode cache`})]})]})]})}),(0,Z.jsx)(E,{id:`infrastructure`,className:a(`infrastructure`),children:(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(A,{children:[(0,Z.jsx)(D,{children:`Shipping it`}),(0,Z.jsx)(O,{children:`One database, one image, three processes.`}),(0,Z.jsx)(k,{children:`A marketplace this size does not need a queue server, a cache server, a pub/sub server and a mail service to go with its web server. Rails 8 ships database-backed adapters for the first three, so the whole thing runs on one managed Postgres and a single Docker image, described by one file Render reads on its own.`})]}),(0,Z.jsxs)(G,{children:[`The whole deployment, `,(0,Z.jsx)(`b`,{children:`render.yaml`})]}),(0,Z.jsxs)(W,{children:[`databases:
  - name: roost-assured-db
    plan: basic-256mb

services:
  - type: web
    name: roost-assured-web
    runtime: docker
    healthCheckPath: /up
    disk:                          `,(0,Z.jsx)(`i`,{children:`# uploads survive a deploy`}),`
      mountPath: /var/data
      sizeGB: 1

  - type: worker
    name: roost-assured-worker
    runtime: docker                `,(0,Z.jsx)(`i`,{children:`# same image as the web service`}),`
    dockerCommand: bin/rails solid_queue:start`]}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(F,{$i:0,children:[(0,Z.jsx)(`h3`,{children:`Solid Queue, Cache and Cable on the primary database`}),(0,Z.jsx)(`p`,{children:`Rails 8 defaults these onto separate databases. At this scale that meant provisioning three more Postgres instances to hold a job table and a cache table — so they were consolidated back onto the primary in a real migration.`})]}),(0,Z.jsxs)(F,{$i:1,children:[(0,Z.jsx)(`h3`,{children:`The worker is the same image`}),(0,Z.jsxs)(`p`,{children:[`One multi-stage Dockerfile builds gems, runs `,(0,Z.jsx)(`code`,{children:`npm ci`}),`, compiles the Vite bundle, then throws the toolchain away. The web service and the background worker are the same artifact started with different commands.`]})]}),(0,Z.jsxs)(F,{$i:2,children:[(0,Z.jsx)(`h3`,{children:`Assets precompile without secrets`}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`code`,{children:`SECRET_KEY_BASE_DUMMY=1`}),` lets the image build without `,(0,Z.jsx)(`code`,{children:`RAILS_MASTER_KEY`}),`, so the master key never has to be present at build time — only at boot.`]})]}),(0,Z.jsxs)(F,{$i:3,$tone:`warn`,children:[(0,Z.jsx)(`h3`,{children:`Storage is sized to the deployment`}),(0,Z.jsxs)(`p`,{children:[`Uploads go to a persistent Render disk rather than object storage, which suits a single-instance service and keeps a dependency out of the stack. The tradeoff is written down next to the config, and `,(0,Z.jsx)(`code`,{children:`storage.yml`}),` carries the S3 block for the day it changes.`]})]}),(0,Z.jsxs)(F,{$i:4,children:[(0,Z.jsx)(`h3`,{children:`Housekeeping is a recurring job`}),(0,Z.jsx)(`p`,{children:`Solid Queue’s own scheduler clears finished jobs hourly, in batches with a sleep between them, so table maintenance never becomes a thing someone has to remember.`})]}),(0,Z.jsxs)(F,{$i:5,children:[(0,Z.jsx)(`h3`,{children:`The SPA is served same-origin`}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`code`,{children:`vite_rails`}),` builds the React app into the Rails asset pipeline and a catch-all route hands every non-API path to the client router. No second host, no CORS in production, and the session cookie stays first-party.`]})]})]}),(0,Z.jsx)(Y,{children:`Mail that renders anywhere`}),(0,Z.jsx)(k,{children:`Five mailers carry the transactional traffic: the waitlist welcome, password resets, the new-request receipt, the nearby-sitter alert, and the sitter-is-on-the-way notice. Delivery goes through Resend’s SMTP relay rather than an API client, which keeps it ordinary Action Mailer — the provider is four lines of configuration and nothing in the app knows its name.`}),(0,Z.jsxs)(q,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(G,{children:[`Resend, over `,(0,Z.jsx)(`b`,{children:`SMTP`})]}),(0,Z.jsxs)(W,{children:[`config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: "smtp.resend.com",
  port: 587,
  user_name: "resend",
  password: resend_api_key,
  authentication: :plain,
  enable_starttls_auto: true
}
`,(0,Z.jsx)(`i`,{children:`# fail loudly rather than dropping mail silently`}),`
config.action_mailer.raise_delivery_errors = true`]})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(G,{children:[`Every mail ships `,(0,Z.jsx)(`b`,{children:`both parts`})]}),(0,Z.jsxs)(W,{children:[`app/views/sitting_request_mailer/
  receipt.html.erb
  receipt.text.erb
  new_request_alert.html.erb
  new_request_alert.text.erb

app/views/application_mailer/
  _button.html.erb   `,(0,Z.jsx)(`i`,{children:`# table-based CTA`}),``]})]})]}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(F,{$i:0,children:[(0,Z.jsx)(`h3`,{children:`HTML and plain text, every time`}),(0,Z.jsx)(`p`,{children:`Multipart isn’t decoration — a text part is what keeps a transactional message out of spam filters and readable in clients that refuse HTML. Every template exists twice.`})]}),(0,Z.jsxs)(F,{$i:1,children:[(0,Z.jsx)(`h3`,{children:`Buttons are tables`}),(0,Z.jsx)(`p`,{children:`A shared partial renders call-to-action buttons the way mail clients still require: nested tables with inline styles, because Outlook does not have a flexbox.`})]}),(0,Z.jsxs)(F,{$i:2,children:[(0,Z.jsx)(`h3`,{children:`Development never sends`}),(0,Z.jsxs)(`p`,{children:[`Outgoing mail is written to `,(0,Z.jsx)(`code`,{children:`tmp/mails`}),` locally, so the whole notification flow can be exercised without an SMTP account or a risk of mailing a real address.`]})]}),(0,Z.jsxs)(F,{$i:3,children:[(0,Z.jsx)(`h3`,{children:`Sending happens in jobs`}),(0,Z.jsxs)(`p`,{children:[`Every mailer is invoked with `,(0,Z.jsx)(`code`,{children:`deliver_later`}),`, so a slow relay can’t hold a request open — and the alert fan-out to nearby sitters is itself a job rather than an after-save callback.`]})]})]}),(0,Z.jsx)(Y,{children:`Notable dependencies`}),(0,Z.jsx)(k,{children:`Sixteen runtime gems, most of them Rails’ own. The ones worth explaining:`}),(0,Z.jsxs)(J,{children:[(0,Z.jsx)(`dt`,{children:`stripe`}),(0,Z.jsxs)(`dd`,{children:[`The official SDK, pinned to v13. `,(0,Z.jsx)(`b`,{children:`Connect Express accounts`}),` for sitters, destination charges with an application fee, and a pinned API version so a Stripe-side upgrade can never change behaviour without a deliberate bump.`]}),(0,Z.jsx)(`dt`,{children:`faraday`}),(0,Z.jsxs)(`dd`,{children:[`Checkr publishes no official Ruby gem, so its client is `,(0,Z.jsx)(`b`,{children:`about twenty lines`}),` of Faraday with basic auth and JSON middleware. A thin wrapper beats an unmaintained third-party SDK for two endpoints.`]}),(0,Z.jsx)(`dt`,{children:`bcrypt`}),(0,Z.jsxs)(`dd`,{children:[`Authentication is `,(0,Z.jsx)(`b`,{children:`Rails’ own`}),` — `,(0,Z.jsx)(`code`,{children:`has_secure_password`}),`, signed cookies, and a Session model with inactivity and absolute timeouts. Devise would have been more code to configure than to write.`]}),(0,Z.jsxs)(`dt`,{children:[`solid_queue`,(0,Z.jsx)(`br`,{}),`solid_cache`,(0,Z.jsx)(`br`,{}),`solid_cable`]}),(0,Z.jsxs)(`dd`,{children:[`Jobs, cache and websockets on Postgres. `,(0,Z.jsx)(`b`,{children:`No Redis`}),`, which at this size is a service to provision, monitor and pay for in exchange for nothing.`]}),(0,Z.jsx)(`dt`,{children:`rack-attack`}),(0,Z.jsxs)(`dd`,{children:[`Edge throttling by IP for login, signup, password reset, the admin surface and the webhook endpoints — `,(0,Z.jsx)(`b`,{children:`before`}),` a request reaches anything expensive.`]}),(0,Z.jsx)(`dt`,{children:`vite_rails`}),(0,Z.jsxs)(`dd`,{children:[`React 19 built by Vite and served by Rails from one origin. Replaces the Sprockets/Webpacker split with `,(0,Z.jsx)(`b`,{children:`one build`}),` that the Docker image runs at precompile time.`]}),(0,Z.jsx)(`dt`,{children:`image_processing`}),(0,Z.jsx)(`dd`,{children:`Active Storage variants for sitter profile photos and the job-completion photos, backed by libvips in the image rather than the heavier ImageMagick.`}),(0,Z.jsx)(`dt`,{children:`thruster`}),(0,Z.jsx)(`dd`,{children:`Sits in front of Puma for HTTP caching, compression and X-Sendfile, so the app can serve its own static assets without a separate proxy tier.`}),(0,Z.jsxs)(`dt`,{children:[`brakeman`,(0,Z.jsx)(`br`,{}),`bundler-audit`]}),(0,Z.jsxs)(`dd`,{children:[`Static analysis and a dependency CVE check, `,(0,Z.jsx)(`b`,{children:`both gating CI`}),` alongside RuboCop, ESLint and the test suite. Five gates, all green.`]})]}),(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`1`}),(0,Z.jsx)(`span`,{children:`Postgres instance`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`1`}),(0,Z.jsx)(`span`,{children:`Docker image`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`5`}),(0,Z.jsx)(`span`,{children:`Mailers`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`b`,{children:`0`}),(0,Z.jsx)(`span`,{children:`Redis servers`})]})]})]})}),(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(R,{children:[(0,Z.jsx)(V,{href:Q,target:`_blank`,rel:`noopener noreferrer`,children:`SOURCE ON GITHUB ▸`}),(0,Z.jsx)(V,{href:`mailto:rmccauleycode@gmail.com`,children:`CONTACT ▸`})]}),(0,Z.jsxs)(H,{children:[(0,Z.jsxs)(`span`,{children:[`Roost Assured `,(0,Z.jsx)(`b`,{children:`Rails 8.1 · React 19`})]}),(0,Z.jsxs)(`span`,{children:[`Tests `,(0,Z.jsx)(`b`,{children:`104 passing`})]}),(0,Z.jsx)(U,{children:`Every screen above is a capture of the running application, not a mockup. The sitters shown are fictional seed data — the app never carried real users, and no real background check or payment is represented anywhere on this page.`})]})]})]})]})]})},ce=()=>(0,Z.jsx)(se,{});export{ce as default};