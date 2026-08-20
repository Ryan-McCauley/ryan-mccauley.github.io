import{l as e,n as t,o as n,u as r}from"./index-cT0kdZmI.js";import{n as i,r as a,t as o}from"./Chrome-BJ6dhNKj.js";var s=r(e(),1),c={name:`Ryan McCauley`,title:`Full Stack Engineer — SaaS, Distributed Systems & AI Integration`,blurb:`Full stack engineer with 7 years owning production systems end-to-end — multi-tenant SaaS, ETL migration of regulated data, and LLM-powered automation.`,experience:[{role:`Full Stack Engineer II`,company:`APS Payroll Inc.`,location:`Remote`,dates:`2026`},{role:`Software Developer`,company:`iCampPro`,location:`Longview, TX`,dates:`2024 – 2025`},{role:`Software Developer II`,company:`Sparq`,location:`Remote`,dates:`2021 – 2023`},{role:`Independent Consultant`,company:`Skyquake Software`,location:`Remote`,dates:`2019 – 2023`}],skills:[{label:`Languages`,items:`TypeScript, JavaScript, Ruby, Python, SQL, Swift, PHP`},{label:`Frameworks & Infrastructure`,items:`React, Ruby on Rails, Node.js, PostgreSQL, Docker, CI/CD, REST & WebSocket APIs, Laravel, SwiftUI`},{label:`AI & Security`,items:`Claude Agent SDK, LLM integration & cost optimization, automated vulnerability remediation, anomaly detection`}],projects:[{name:`Homunculus — Self-Hosted AI & Trading Platform`,href:`/homunculus`,dates:`2024 – Present`},{name:`Half-Life — Caffeine Tracker, iOS & Apple Watch`,dates:`2025 – Present`}],education:[{program:`Software Engineering`,school:`Flatiron School`,year:`2021`}]},l=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0)),u=e=>e.normalize(`NFKC`).trim().toLowerCase(),d=class extends Error{},f=null,p=()=>(f||=fetch(`/resume.enc.json`,{cache:`no-cache`}).then(e=>{if(!e.ok)throw Error(`resume.enc.json — HTTP ${e.status}`);return e.json()}).catch(e=>{throw f=null,e}),f),m=async e=>{let t=globalThis.crypto&&globalThis.crypto.subtle;if(!t)throw Error(`This browser blocked Web Crypto — try an https:// address.`);let{kdf:n,iv:r,ct:i}=await p(),a=await t.importKey(`raw`,new TextEncoder().encode(u(e)),`PBKDF2`,!1,[`deriveKey`]),o=await t.deriveKey({name:`PBKDF2`,salt:l(n.salt),iterations:n.iterations,hash:n.hash},a,{name:`AES-GCM`,length:256},!1,[`decrypt`]),s;try{s=await t.decrypt({name:`AES-GCM`,iv:l(r)},o,l(i))}catch{throw new d(`That passphrase does not match.`)}return JSON.parse(new TextDecoder().decode(s))},h=`'Didot', 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif`,g=`'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace`,_=n.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 54px 26px 90px;
  color: #f0e6d8;
  font-family: ${`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`};

  @media screen and (max-width: 600px) {
    padding: 34px 20px 64px;
  }
`,v=n.header`
  border-bottom: 1px solid rgba(201, 168, 106, 0.32);
  padding-bottom: 18px;
  margin-bottom: 26px;

  h1 {
    font-family: ${h};
    font-size: clamp(2rem, 6vw, 2.9rem);
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.05;
    color: #f0e6d8;
  }

  p {
    margin-top: 8px;
    font-family: ${g};
    font-size: 0.95rem;
    color: #c9a86a;
  }
`,y=n.p`
  color: #b9a892;
  line-height: 1.62;
  font-size: 1.02rem;
  margin-bottom: 30px;
`,b=n.section`
  margin-bottom: 30px;

  h2 {
    font-family: ${g};
    font-size: 0.76rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #8f7645;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(201, 168, 106, 0.18);
    margin-bottom: 14px;
  }
`,x=n.article`
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`,S=n.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 14px;

  .who {
    font-size: 1.04rem;
    color: #f0e6d8;
  }
  .who b {
    font-weight: 600;
  }
  .who span {
    color: #8a7867;
  }
  .when {
    font-family: ${g};
    font-size: 0.8rem;
    color: #8a7867;
    white-space: nowrap;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    gap: 2px;
  }
`,C=n.ul`
  list-style: none;
  margin-top: 8px;

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 6px;
    color: #b9a892;
    line-height: 1.58;
  }
  li::before {
    content: '▪';
    position: absolute;
    left: 0;
    color: #3fae82;
    font-size: 0.7rem;
    line-height: 1.9;
  }
  li b {
    color: #7ff0be;
    font-weight: 600;
  }
`,w=n.p`
  margin-bottom: 7px;
  color: #b9a892;
  line-height: 1.55;

  b {
    color: #c9a86a;
    font-weight: 600;
  }
`,T=n.p`
  font-family: ${g};
  font-size: 0.9rem;
  color: #b9a892;
  line-height: 1.9;
  word-break: break-word;

  a {
    color: #7ff0be;
    text-decoration: none;
  }
  a:hover {
    color: #f0e6d8;
  }
  .sep {
    color: #8f7645;
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
`,E=n.section`
  margin: 34px 0 8px;
  padding: 22px;
  border: 1px solid rgba(201, 168, 106, 0.32);
  border-radius: 10px;
  background: #1e0a16;

  h2 {
    font-family: ${h};
    font-size: 1.34rem;
    font-weight: 400;
    color: #f0e6d8;
    margin-bottom: 6px;
  }

  .hint {
    color: #8a7867;
    font-size: 0.93rem;
    line-height: 1.55;
    margin-bottom: 14px;
  }
`,D=n.form`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`,O=n.input`
  flex: 1;
  min-width: 0;
  font-family: ${g};
  font-size: 0.95rem;
  padding: 11px 13px;
  color: #f0e6d8;
  background: #150710;
  border: 1px solid rgba(201, 168, 106, 0.32);
  border-radius: 7px;
  outline: none;
  transition: border-color 0.18s;

  &::placeholder {
    color: #8a7867;
  }
  &:focus {
    border-color: #3fae82;
  }
`,k=n.button`
  font-family: ${g};
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  padding: 11px 20px;
  color: #150710;
  background: #7ff0be;
  border: 1px solid #7ff0be;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;

  &:hover:not(:disabled) {
    background: transparent;
    color: #7ff0be;
  }
  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`,A=n.p`
  margin-top: 11px;
  font-family: ${g};
  font-size: 0.85rem;
  color: #e58d8d;
`,j=n.p`
  margin-top: 14px;
  font-size: 0.92rem;
  color: #8a7867;
  line-height: 1.6;

  a {
    color: #c9a86a;
    text-decoration: none;
    border-bottom: 1px solid rgba(201, 168, 106, 0.32);
  }
  a:hover {
    color: #7ff0be;
  }
`,M=n.p`
  font-family: ${g};
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3fae82;
  margin-bottom: 22px;
`,N=t(),P=[`rmccauleycode`,`gmail.com`].join(`@`),F=e=>e.split(`**`).map((e,t)=>t%2==1?(0,N.jsx)(`b`,{children:e},t):(0,N.jsx)(s.Fragment,{children:e},t)),I=()=>{a();let[e,t]=(0,s.useState)(null),[n,r]=(0,s.useState)(``),[l,u]=(0,s.useState)(``),[f,p]=(0,s.useState)(!1),h=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=document.title;return document.title=`Résumé — Ryan McCauley`,()=>{document.title=e}},[]),(0,s.useEffect)(()=>{e&&h.current&&h.current.focus()},[e]);let g=async e=>{if(e.preventDefault(),!(!n.trim()||f)){p(!0),u(``);try{t(await m(n))}catch(e){u(e instanceof d?`That word doesn't match — check the message I sent you.`:`Couldn't unlock the résumé: ${e.message}`)}finally{p(!1)}}},I=e??c;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{}),(0,N.jsxs)(_,{children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(`h1`,{children:I.name}),(0,N.jsx)(`p`,{children:I.title})]}),e?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M,{tabIndex:-1,ref:h,children:`✓ Full résumé unlocked`}),(0,N.jsxs)(T,{children:[(0,N.jsx)(`a`,{href:`mailto:${e.contact.email}`,children:e.contact.email}),(0,N.jsx)(`span`,{className:`sep`,children:`|`}),(0,N.jsx)(`span`,{className:`piece`,children:e.contact.location}),(0,N.jsx)(`span`,{className:`sep`,children:`|`}),(0,N.jsx)(`a`,{href:e.contact.siteHref,children:e.contact.site}),(0,N.jsx)(`span`,{className:`sep`,children:`|`}),(0,N.jsx)(`a`,{href:e.contact.githubHref,target:`_blank`,rel:`noreferrer`,children:e.contact.github})]}),(0,N.jsx)(y,{style:{marginTop:18},children:e.summary})]}):(0,N.jsx)(y,{children:c.blurb}),(0,N.jsxs)(b,{children:[(0,N.jsx)(`h2`,{children:`Professional Experience`}),I.experience.map(e=>(0,N.jsxs)(x,{children:[(0,N.jsxs)(S,{children:[(0,N.jsxs)(`div`,{className:`who`,children:[(0,N.jsx)(`b`,{children:e.role}),` `,(0,N.jsxs)(`span`,{children:[`— `,e.company,` | `,e.location]})]}),(0,N.jsx)(`div`,{className:`when`,children:e.dates})]}),e.bullets&&(0,N.jsx)(C,{children:e.bullets.map(e=>(0,N.jsx)(`li`,{children:F(e)},e.slice(0,48)))})]},`${e.company}-${e.dates}`))]}),(0,N.jsxs)(b,{children:[(0,N.jsx)(`h2`,{children:`Languages & Technologies`}),I.skills.map(e=>(0,N.jsxs)(w,{children:[(0,N.jsxs)(`b`,{children:[e.label,`:`]}),` `,e.items]},e.label))]}),(0,N.jsxs)(b,{children:[(0,N.jsx)(`h2`,{children:`Selected Projects`}),I.projects.map(e=>(0,N.jsxs)(x,{children:[(0,N.jsxs)(S,{children:[(0,N.jsxs)(`div`,{className:`who`,children:[(0,N.jsx)(`b`,{children:e.name}),e.note&&(0,N.jsxs)(`span`,{children:[` — `,e.note]})]}),(0,N.jsx)(`div`,{className:`when`,children:e.dates})]}),e.bullets&&(0,N.jsx)(C,{children:e.bullets.map(e=>(0,N.jsx)(`li`,{children:F(e)},e.slice(0,48)))})]},e.name))]}),(0,N.jsxs)(b,{children:[(0,N.jsx)(`h2`,{children:`Education`}),I.education.map(e=>(0,N.jsxs)(S,{children:[(0,N.jsxs)(`div`,{className:`who`,children:[(0,N.jsx)(`b`,{children:e.program}),` `,(0,N.jsxs)(`span`,{children:[`— `,e.school]})]}),(0,N.jsx)(`div`,{className:`when`,children:e.year})]},e.school))]}),!e&&(0,N.jsxs)(E,{children:[(0,N.jsx)(`h2`,{children:`There’s a fuller version.`}),(0,N.jsx)(`p`,{className:`hint`,children:`The complete résumé — what each role actually shipped, the numbers behind it, and how to reach me — is encrypted on this page. If I sent you here, I sent you the word that opens it.`}),(0,N.jsxs)(D,{onSubmit:g,children:[(0,N.jsx)(O,{type:`text`,value:n,onChange:e=>r(e.target.value),placeholder:`passphrase`,"aria-label":`Résumé passphrase`,autoComplete:`off`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:`false`,disabled:f}),(0,N.jsx)(k,{type:`submit`,disabled:f||!n.trim(),children:f?`Unlocking…`:`Unlock`})]}),l&&(0,N.jsx)(A,{role:`alert`,children:l}),(0,N.jsxs)(j,{children:[`Don’t have one?`,` `,(0,N.jsx)(`a`,{href:`mailto:${P}?subject=R%C3%A9sum%C3%A9%20passphrase`,children:`Ask me for it`}),` `,`— happy to send the word, or the PDF straight to your inbox.`]})]})]}),(0,N.jsx)(o,{})]})},L=()=>(0,N.jsx)(I,{});export{L as default};