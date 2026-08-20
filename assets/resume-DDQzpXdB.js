import{l as e,n as t,o as n,u as r}from"./index-BTlxuHtH.js";import{n as i,r as a,t as o}from"./Chrome-zmYAljNU.js";var s=r(e(),1),c={name:`Ryan McCauley`,title:`Full Stack Engineer — SaaS, Distributed Systems & AI Integration`,blurb:`Full stack engineer with 7 years owning production systems end-to-end — multi-tenant SaaS, ETL migration of regulated data, and LLM-powered automation.`,experience:[{role:`Full Stack Engineer II`,company:`APS Payroll Inc.`,location:`Remote`,dates:`2026`},{role:`Software Developer`,company:`iCampPro`,location:`Longview, TX`,dates:`2024 – 2025`},{role:`Software Developer II`,company:`Sparq`,location:`Remote`,dates:`2021 – 2023`},{role:`Independent Consultant`,company:`Skyquake Software`,location:`Remote`,dates:`2019 – 2023`}],skills:[{label:`Languages`,items:`TypeScript, JavaScript, Ruby, Python, SQL, Swift, PHP`},{label:`Frameworks & Infrastructure`,items:`React, Ruby on Rails, Node.js, PostgreSQL, Docker, CI/CD, REST & WebSocket APIs, Laravel, SwiftUI`},{label:`AI & Security`,items:`Claude Agent SDK, LLM integration & cost optimization, automated vulnerability remediation, anomaly detection`}],projects:[{name:`Homunculus — Self-Hosted AI & Trading Platform`,href:`/homunculus`,dates:`2024 – Present`},{name:`Half-Life — Caffeine Tracker, iOS & Apple Watch`,dates:`2025 – Present`}],education:[{program:`Software Engineering`,school:`Flatiron School`,year:`2021`}]},l=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0)),u=e=>e.normalize(`NFKC`).trim().toLowerCase(),d=class extends Error{},f=()=>{let e=globalThis.crypto&&globalThis.crypto.subtle;if(!e)throw Error(`This browser blocked Web Crypto — try an https:// address.`);return e},p=async e=>{let t=await fetch(e,{cache:`no-cache`});if(!t.ok)throw Error(`${e} — HTTP ${t.status}`);return t.json()},m=null,h=()=>(m||=p(`/resume.enc.json`).catch(e=>{throw m=null,e}),m),g=async(e,t,{iv:n,ct:r})=>e.decrypt({name:`AES-GCM`,iv:l(n)},t,l(r)),_=async e=>{let t=f(),n=await h(),r=await t.importKey(`raw`,new TextEncoder().encode(u(e)),`PBKDF2`,!1,[`deriveKey`]),i=await t.deriveKey({name:`PBKDF2`,salt:l(n.kdf.salt),iterations:n.kdf.iterations,hash:n.kdf.hash},r,{name:`AES-GCM`,length:256},!1,[`decrypt`]),a;try{a=await g(t,i,n)}catch{throw new d(`That passphrase does not match.`)}return{data:JSON.parse(new TextDecoder().decode(a)),key:i}},v=async(e,t)=>{let n=await g(f(),e,await p(`/resume-files/${t.id}.enc.json`)).catch(()=>{throw Error(`That file could not be decrypted.`)});return new Blob([n],{type:t.type})},y=`'Didot', 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif`,b=`'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace`,x=`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,S=`#f0e6d8`,C=`#cabca9`,w=`#9d8b78`,T=`#c9a86a`,E=`#8f7645`,D=`#7ff0be`,O=`#150710`,k=`#1e0a16`,A=`rgba(201, 168, 106, 0.18)`,j=`rgba(201, 168, 106, 0.32)`,M=n.div`
  min-height: 100vh;
  background: ${O};
  color: ${S};
`,N=n.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 54px 26px 90px;
  color: ${S};
  font-family: ${x};
  line-height: 1.6;

  @media screen and (max-width: 600px) {
    padding: 34px 20px 64px;
  }
`,P=n.header`
  border-bottom: 1px solid ${j};
  padding-bottom: 18px;
  margin-bottom: 26px;

  h1 {
    font-family: ${y};
    font-size: clamp(2rem, 6vw, 2.9rem);
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.05;
    color: ${S};
  }

  p {
    margin-top: 8px;
    font-family: ${b};
    font-size: 0.95rem;
    line-height: 1.45;
    color: ${T};
  }
`,F=n.p`
  font-family: ${x};

  b,
  strong {
    font-family: inherit;
  }
  color: ${S};
  line-height: 1.68;
  font-size: 1.02rem;
  margin-bottom: 30px;
`,I=n.section`
  margin-bottom: 30px;

  h2 {
    font-family: ${b};
    font-size: 0.76rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${T};
    padding-bottom: 6px;
    border-bottom: 1px solid ${A};
    margin-bottom: 16px;
  }
`,L=n.article`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,R=n.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 14px;

  .who {
    font-family: ${x};
    font-size: 1.04rem;
    line-height: 1.45;
    color: ${S};
  }
  .who b,
  .who span {
    font-family: inherit;
  }
  .who b {
    font-weight: 600;
  }
  .who span {
    color: ${w};
  }
  .when {
    font-family: ${b};
    font-size: 0.8rem;
    color: ${w};
    white-space: nowrap;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    gap: 2px;

    .when {
      white-space: normal;
    }
  }
`,z=n.ul`
  list-style: none;
  margin-top: 10px;

  li {
    font-family: ${x};
    position: relative;
    padding-left: 17px;
    margin-bottom: 8px;
    color: ${C};
    line-height: 1.62;
  }
  li::before {
    content: '▪';
    position: absolute;
    left: 0;
    color: ${E};
    font-size: 0.7rem;
    line-height: 1.9;
  }
  li b {
    font-family: inherit;
    color: ${D};
    font-weight: 600;
  }
`,B=n.p`
  font-family: ${x};
  margin-bottom: 9px;
  color: ${C};
  line-height: 1.62;

  b {
    font-family: inherit;
    color: ${T};
    font-weight: 600;
  }
`,V=n.p`
  font-family: ${b};
  font-size: 0.9rem;
  color: ${C};
  line-height: 1.9;
  word-break: break-word;

  a,
  span {
    font-family: inherit;
  }
  a {
    color: ${D};
    text-decoration: none;
  }
  a:hover {
    color: ${S};
    text-decoration: underline;
  }
  .sep {
    color: ${E};
    padding: 0 8px;
  }

  @media screen and (max-width: 560px) {
    .sep {
      display: none;
    }
    a,
    span.piece {
      display: block;
    }
  }
`,H=n.section`
  margin: 34px 0 8px;
  padding: 22px;
  border: 1px solid ${j};
  border-radius: 10px;
  background: ${k};

  h2 {
    font-family: ${y};
    font-size: 1.4rem;
    font-weight: 400;
    color: ${S};
    margin-bottom: 8px;
  }

  .hint {
    font-family: ${x};
    color: ${C};
    font-size: 0.95rem;
    line-height: 1.62;
    margin-bottom: 16px;
  }
`,U=n.form`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`,W=n.input`
  flex: 1;
  min-width: 0;
  font-family: ${b};
  font-size: 0.95rem;
  padding: 11px 13px;
  color: ${S};
  background: ${O};
  border: 1px solid ${j};
  border-radius: 7px;
  outline: none;
  transition: border-color 0.18s;

  &::placeholder {
    color: ${w};
  }
  &:focus {
    border-color: ${D};
    box-shadow: 0 0 0 3px rgba(127, 240, 190, 0.14);
  }
`,G=n.button`
  font-family: ${b};
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  padding: 11px 20px;
  color: ${O};
  background: ${D};
  border: 1px solid ${D};
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;

  &:hover:not(:disabled) {
    background: transparent;
    color: ${D};
  }
  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`,K=n.p`
  margin-top: 11px;
  font-family: ${b};
  font-size: 0.85rem;
  color: #f0a0a0;
`,q=n.p`
  font-family: ${x};
  margin-top: 16px;
  font-size: 0.95rem;
  color: ${C};
  line-height: 1.62;

  a {
    font-family: inherit;
    color: ${T};
    text-decoration: none;
    border-bottom: 1px solid ${j};
  }
  a:hover {
    color: ${D};
  }
`,J=n.p`
  font-family: ${b};
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${D};
  margin-bottom: 22px;

  &:focus {
    outline: none;
  }
`,Y=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 4px 0 30px;
`,X=n.button`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: ${b};
  font-size: 0.86rem;
  padding: 10px 16px;
  color: ${D};
  background: transparent;
  border: 1px solid ${j};
  border-radius: 7px;
  cursor: pointer;
  transition: border-color 0.18s, color 0.18s, background 0.18s;

  &:hover:not(:disabled) {
    border-color: ${D};
    background: ${k};
    color: ${S};
  }
  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
  span {
    font-family: inherit;
    color: ${T};
  }
`,Z=n.p`
  margin: -22px 0 26px;
  font-family: ${b};
  font-size: 0.85rem;
  color: #f0a0a0;
`,Q=t(),ee=[`rmccauleycode`,`gmail.com`].join(`@`),$=e=>e.split(`**`).map((e,t)=>t%2==1?(0,Q.jsx)(`b`,{children:e},t):(0,Q.jsx)(s.Fragment,{children:e},t)),te=()=>{a();let[e,t]=(0,s.useState)(null),[n,r]=(0,s.useState)(null),[l,u]=(0,s.useState)(``),[f,p]=(0,s.useState)(``),[m,h]=(0,s.useState)(``),[g,y]=(0,s.useState)(``),[b,x]=(0,s.useState)(!1),S=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=document.title;return document.title=`Résumé — Ryan McCauley`,()=>{document.title=e}},[]),(0,s.useEffect)(()=>{e&&S.current&&S.current.focus()},[e]);let C=async e=>{if(e.preventDefault(),!(!m.trim()||b)){x(!0),y(``);try{let{data:e,key:n}=await _(m);t(e),r(n)}catch(e){y(e instanceof d?`That word doesn't match — check the message I sent you.`:`Couldn't unlock the résumé: ${e.message}`)}finally{x(!1)}}},w=async e=>{if(l)return;u(e.id),p(``);let t;try{let r=await v(n,e);t=URL.createObjectURL(r);let i=document.createElement(`a`);i.href=t,i.download=e.filename,document.body.appendChild(i),i.click(),i.remove()}catch(e){p(e.message)}finally{t&&setTimeout(()=>URL.revokeObjectURL(t),0),u(``)}},T=e??c;return(0,Q.jsxs)(M,{children:[(0,Q.jsx)(i,{}),(0,Q.jsxs)(N,{children:[(0,Q.jsxs)(P,{children:[(0,Q.jsx)(`h1`,{children:T.name}),(0,Q.jsx)(`p`,{children:T.title})]}),e?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(J,{tabIndex:-1,ref:S,children:`✓ Full résumé unlocked`}),(0,Q.jsxs)(V,{children:[(0,Q.jsx)(`a`,{href:`mailto:${e.contact.email}`,children:e.contact.email}),(0,Q.jsx)(`span`,{className:`sep`,children:`|`}),(0,Q.jsx)(`span`,{className:`piece`,children:e.contact.location}),(0,Q.jsx)(`span`,{className:`sep`,children:`|`}),(0,Q.jsx)(`a`,{href:e.contact.siteHref,children:e.contact.site}),(0,Q.jsx)(`span`,{className:`sep`,children:`|`}),(0,Q.jsx)(`a`,{href:e.contact.githubHref,target:`_blank`,rel:`noreferrer`,children:e.contact.github})]}),(0,Q.jsx)(F,{style:{marginTop:18},children:e.summary}),e.attachments&&e.attachments.length>0&&(0,Q.jsx)(Y,{children:e.attachments.map(e=>(0,Q.jsxs)(X,{type:`button`,onClick:()=>w(e),disabled:!!l,children:[(0,Q.jsx)(`span`,{"aria-hidden":`true`,children:`⤓`}),l===e.id?`Decrypting…`:`${e.label} · ${Math.round(e.bytes/1024)} kB`]},e.id))}),f&&(0,Q.jsx)(Z,{role:`alert`,children:f})]}):(0,Q.jsx)(F,{children:c.blurb}),(0,Q.jsxs)(I,{children:[(0,Q.jsx)(`h2`,{children:`Professional Experience`}),T.experience.map(e=>(0,Q.jsxs)(L,{children:[(0,Q.jsxs)(R,{children:[(0,Q.jsxs)(`div`,{className:`who`,children:[(0,Q.jsx)(`b`,{children:e.role}),` `,(0,Q.jsxs)(`span`,{children:[`— `,e.company,` | `,e.location]})]}),(0,Q.jsx)(`div`,{className:`when`,children:e.dates})]}),e.bullets&&(0,Q.jsx)(z,{children:e.bullets.map(e=>(0,Q.jsx)(`li`,{children:$(e)},e.slice(0,48)))})]},`${e.company}-${e.dates}`))]}),(0,Q.jsxs)(I,{children:[(0,Q.jsx)(`h2`,{children:`Languages & Technologies`}),T.skills.map(e=>(0,Q.jsxs)(B,{children:[(0,Q.jsxs)(`b`,{children:[e.label,`:`]}),` `,e.items]},e.label))]}),(0,Q.jsxs)(I,{children:[(0,Q.jsx)(`h2`,{children:`Selected Projects`}),T.projects.map(e=>(0,Q.jsxs)(L,{children:[(0,Q.jsxs)(R,{children:[(0,Q.jsxs)(`div`,{className:`who`,children:[(0,Q.jsx)(`b`,{children:e.name}),e.note&&(0,Q.jsxs)(`span`,{children:[` — `,e.note]})]}),(0,Q.jsx)(`div`,{className:`when`,children:e.dates})]}),e.bullets&&(0,Q.jsx)(z,{children:e.bullets.map(e=>(0,Q.jsx)(`li`,{children:$(e)},e.slice(0,48)))})]},e.name))]}),(0,Q.jsxs)(I,{children:[(0,Q.jsx)(`h2`,{children:`Education`}),T.education.map(e=>(0,Q.jsxs)(R,{children:[(0,Q.jsxs)(`div`,{className:`who`,children:[(0,Q.jsx)(`b`,{children:e.program}),` `,(0,Q.jsxs)(`span`,{children:[`— `,e.school]})]}),(0,Q.jsx)(`div`,{className:`when`,children:e.year})]},e.school))]}),!e&&(0,Q.jsxs)(H,{children:[(0,Q.jsx)(`h2`,{children:`There’s a fuller version.`}),(0,Q.jsx)(`p`,{className:`hint`,children:`The complete résumé — what each role actually shipped, the numbers behind it, and how to reach me — is encrypted on this page. If I sent you here, I sent you the word that opens it.`}),(0,Q.jsxs)(U,{onSubmit:C,children:[(0,Q.jsx)(W,{type:`text`,value:m,onChange:e=>h(e.target.value),placeholder:`passphrase`,"aria-label":`Résumé passphrase`,autoComplete:`off`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:`false`,disabled:b}),(0,Q.jsx)(G,{type:`submit`,disabled:b||!m.trim(),children:b?`Unlocking…`:`Unlock`})]}),g&&(0,Q.jsx)(K,{role:`alert`,children:g}),(0,Q.jsxs)(q,{children:[`Don’t have one?`,` `,(0,Q.jsx)(`a`,{href:`mailto:${ee}?subject=R%C3%A9sum%C3%A9%20passphrase`,children:`Ask me for it`}),` `,`— happy to send the word, or the PDF straight to your inbox.`]})]})]}),(0,Q.jsx)(o,{})]})},ne=()=>(0,Q.jsx)(te,{});export{ne as default};