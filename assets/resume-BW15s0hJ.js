import{l as e,n as t,o as n,u as r}from"./index-DbksqKCv.js";import{n as i,r as a,t as o}from"./Chrome-BTTetBFZ.js";var s=r(e(),1),c={name:`Ryan McCauley`,title:`Full Stack Engineer — SaaS, Distributed Systems & AI Integration`,blurb:`Full stack engineer with 7 years owning production systems end-to-end — multi-tenant SaaS, ETL migration of regulated data, and LLM-powered automation.`,experience:[{role:`Full Stack Engineer II`,company:`APS Payroll Inc.`,location:`Remote`,dates:`2026`},{role:`Software Developer`,company:`iCampPro`,location:`Longview, TX`,dates:`2024 – 2025`},{role:`Software Developer II`,company:`Sparq`,location:`Remote`,dates:`2021 – 2023`},{role:`Independent Consultant`,company:`Skyquake Software`,location:`Remote`,dates:`2019 – 2023`}],skills:[{label:`Languages`,items:`TypeScript, JavaScript, Ruby, Python, SQL, Swift, PHP`},{label:`Frameworks & Infrastructure`,items:`React, Ruby on Rails, Node.js, PostgreSQL, Docker, CI/CD, REST & WebSocket APIs, Laravel, SwiftUI`},{label:`AI & Security`,items:`Claude Agent SDK, LLM integration & cost optimization, automated vulnerability remediation, anomaly detection`}],projects:[{name:`Homunculus — Self-Hosted AI & Trading Platform`,href:`/homunculus`,dates:`2024 – Present`},{name:`Half-Life — Caffeine Tracker, iOS & Apple Watch`,dates:`2025 – Present`}],education:[{program:`Software Engineering`,school:`Flatiron School`,year:`2021`}]},l=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0)),u=e=>e.normalize(`NFKC`).trim().toLowerCase(),d=class extends Error{},f=()=>{let e=globalThis.crypto&&globalThis.crypto.subtle;if(!e)throw Error(`This browser blocked Web Crypto — try an https:// address.`);return e},p=async e=>{let t=await fetch(e,{cache:`no-cache`});if(!t.ok)throw Error(`${e} — HTTP ${t.status}`);return t.json()},m=null,h=()=>(m||=p(`/resume.enc.json`).catch(e=>{throw m=null,e}),m),g=async(e,t,{iv:n,ct:r})=>e.decrypt({name:`AES-GCM`,iv:l(n)},t,l(r)),_=async e=>{let t=f(),n=await h(),r=await t.importKey(`raw`,new TextEncoder().encode(u(e)),`PBKDF2`,!1,[`deriveKey`]),i=await t.deriveKey({name:`PBKDF2`,salt:l(n.kdf.salt),iterations:n.kdf.iterations,hash:n.kdf.hash},r,{name:`AES-GCM`,length:256},!1,[`decrypt`]),a;try{a=await g(t,i,n)}catch{throw new d(`That passphrase does not match.`)}return{data:JSON.parse(new TextDecoder().decode(a)),key:i}},v=async(e,t)=>{let n=await g(f(),e,await p(`/resume-files/${t.id}.enc.json`)).catch(()=>{throw Error(`That file could not be decrypted.`)});return new Blob([n],{type:t.type})},y=`'Didot', 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif`,b=`'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace`,x=n.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 54px 26px 90px;
  color: #f0e6d8;
  font-family: ${`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`};

  @media screen and (max-width: 600px) {
    padding: 34px 20px 64px;
  }
`,S=n.header`
  border-bottom: 1px solid rgba(201, 168, 106, 0.32);
  padding-bottom: 18px;
  margin-bottom: 26px;

  h1 {
    font-family: ${y};
    font-size: clamp(2rem, 6vw, 2.9rem);
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.05;
    color: #f0e6d8;
  }

  p {
    margin-top: 8px;
    font-family: ${b};
    font-size: 0.95rem;
    color: #c9a86a;
  }
`,C=n.p`
  color: #b9a892;
  line-height: 1.62;
  font-size: 1.02rem;
  margin-bottom: 30px;
`,w=n.section`
  margin-bottom: 30px;

  h2 {
    font-family: ${b};
    font-size: 0.76rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #8f7645;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(201, 168, 106, 0.18);
    margin-bottom: 14px;
  }
`,T=n.article`
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`,E=n.div`
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
    font-family: ${b};
    font-size: 0.8rem;
    color: #8a7867;
    white-space: nowrap;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    gap: 2px;
  }
`,D=n.ul`
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
`,O=n.p`
  margin-bottom: 7px;
  color: #b9a892;
  line-height: 1.55;

  b {
    color: #c9a86a;
    font-weight: 600;
  }
`,k=n.p`
  font-family: ${b};
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
`,A=n.section`
  margin: 34px 0 8px;
  padding: 22px;
  border: 1px solid rgba(201, 168, 106, 0.32);
  border-radius: 10px;
  background: #1e0a16;

  h2 {
    font-family: ${y};
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
`,j=n.form`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`,M=n.input`
  flex: 1;
  min-width: 0;
  font-family: ${b};
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
`,N=n.button`
  font-family: ${b};
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
`,P=n.p`
  margin-top: 11px;
  font-family: ${b};
  font-size: 0.85rem;
  color: #e58d8d;
`,F=n.p`
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
`,I=n.p`
  font-family: ${b};
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3fae82;
  margin-bottom: 22px;
`,L=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 4px 0 26px;
`,R=n.button`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: ${b};
  font-size: 0.86rem;
  padding: 10px 16px;
  color: #7ff0be;
  background: transparent;
  border: 1px solid rgba(201, 168, 106, 0.32);
  border-radius: 7px;
  cursor: pointer;
  transition: border-color 0.18s, color 0.18s, background 0.18s;

  &:hover:not(:disabled) {
    border-color: #3fae82;
    background: #1e0a16;
    color: #f0e6d8;
  }
  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
  span {
    color: #c9a86a;
  }
`,z=n.p`
  margin: -18px 0 24px;
  font-family: ${b};
  font-size: 0.85rem;
  color: #e58d8d;
`,B=t(),V=[`rmccauleycode`,`gmail.com`].join(`@`),H=e=>e.split(`**`).map((e,t)=>t%2==1?(0,B.jsx)(`b`,{children:e},t):(0,B.jsx)(s.Fragment,{children:e},t)),U=()=>{a();let[e,t]=(0,s.useState)(null),[n,r]=(0,s.useState)(null),[l,u]=(0,s.useState)(``),[f,p]=(0,s.useState)(``),[m,h]=(0,s.useState)(``),[g,y]=(0,s.useState)(``),[b,U]=(0,s.useState)(!1),W=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=document.title;return document.title=`Résumé — Ryan McCauley`,()=>{document.title=e}},[]),(0,s.useEffect)(()=>{e&&W.current&&W.current.focus()},[e]);let G=async e=>{if(e.preventDefault(),!(!m.trim()||b)){U(!0),y(``);try{let{data:e,key:n}=await _(m);t(e),r(n)}catch(e){y(e instanceof d?`That word doesn't match — check the message I sent you.`:`Couldn't unlock the résumé: ${e.message}`)}finally{U(!1)}}},K=async e=>{if(l)return;u(e.id),p(``);let t;try{let r=await v(n,e);t=URL.createObjectURL(r);let i=document.createElement(`a`);i.href=t,i.download=e.filename,document.body.appendChild(i),i.click(),i.remove()}catch(e){p(e.message)}finally{t&&setTimeout(()=>URL.revokeObjectURL(t),0),u(``)}},q=e??c;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(i,{}),(0,B.jsxs)(x,{children:[(0,B.jsxs)(S,{children:[(0,B.jsx)(`h1`,{children:q.name}),(0,B.jsx)(`p`,{children:q.title})]}),e?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(I,{tabIndex:-1,ref:W,children:`✓ Full résumé unlocked`}),(0,B.jsxs)(k,{children:[(0,B.jsx)(`a`,{href:`mailto:${e.contact.email}`,children:e.contact.email}),(0,B.jsx)(`span`,{className:`sep`,children:`|`}),(0,B.jsx)(`span`,{className:`piece`,children:e.contact.location}),(0,B.jsx)(`span`,{className:`sep`,children:`|`}),(0,B.jsx)(`a`,{href:e.contact.siteHref,children:e.contact.site}),(0,B.jsx)(`span`,{className:`sep`,children:`|`}),(0,B.jsx)(`a`,{href:e.contact.githubHref,target:`_blank`,rel:`noreferrer`,children:e.contact.github})]}),(0,B.jsx)(C,{style:{marginTop:18},children:e.summary}),e.attachments&&e.attachments.length>0&&(0,B.jsx)(L,{children:e.attachments.map(e=>(0,B.jsxs)(R,{type:`button`,onClick:()=>K(e),disabled:!!l,children:[(0,B.jsx)(`span`,{"aria-hidden":`true`,children:`⤓`}),l===e.id?`Decrypting…`:`${e.label} · ${Math.round(e.bytes/1024)} kB`]},e.id))}),f&&(0,B.jsx)(z,{role:`alert`,children:f})]}):(0,B.jsx)(C,{children:c.blurb}),(0,B.jsxs)(w,{children:[(0,B.jsx)(`h2`,{children:`Professional Experience`}),q.experience.map(e=>(0,B.jsxs)(T,{children:[(0,B.jsxs)(E,{children:[(0,B.jsxs)(`div`,{className:`who`,children:[(0,B.jsx)(`b`,{children:e.role}),` `,(0,B.jsxs)(`span`,{children:[`— `,e.company,` | `,e.location]})]}),(0,B.jsx)(`div`,{className:`when`,children:e.dates})]}),e.bullets&&(0,B.jsx)(D,{children:e.bullets.map(e=>(0,B.jsx)(`li`,{children:H(e)},e.slice(0,48)))})]},`${e.company}-${e.dates}`))]}),(0,B.jsxs)(w,{children:[(0,B.jsx)(`h2`,{children:`Languages & Technologies`}),q.skills.map(e=>(0,B.jsxs)(O,{children:[(0,B.jsxs)(`b`,{children:[e.label,`:`]}),` `,e.items]},e.label))]}),(0,B.jsxs)(w,{children:[(0,B.jsx)(`h2`,{children:`Selected Projects`}),q.projects.map(e=>(0,B.jsxs)(T,{children:[(0,B.jsxs)(E,{children:[(0,B.jsxs)(`div`,{className:`who`,children:[(0,B.jsx)(`b`,{children:e.name}),e.note&&(0,B.jsxs)(`span`,{children:[` — `,e.note]})]}),(0,B.jsx)(`div`,{className:`when`,children:e.dates})]}),e.bullets&&(0,B.jsx)(D,{children:e.bullets.map(e=>(0,B.jsx)(`li`,{children:H(e)},e.slice(0,48)))})]},e.name))]}),(0,B.jsxs)(w,{children:[(0,B.jsx)(`h2`,{children:`Education`}),q.education.map(e=>(0,B.jsxs)(E,{children:[(0,B.jsxs)(`div`,{className:`who`,children:[(0,B.jsx)(`b`,{children:e.program}),` `,(0,B.jsxs)(`span`,{children:[`— `,e.school]})]}),(0,B.jsx)(`div`,{className:`when`,children:e.year})]},e.school))]}),!e&&(0,B.jsxs)(A,{children:[(0,B.jsx)(`h2`,{children:`There’s a fuller version.`}),(0,B.jsx)(`p`,{className:`hint`,children:`The complete résumé — what each role actually shipped, the numbers behind it, and how to reach me — is encrypted on this page. If I sent you here, I sent you the word that opens it.`}),(0,B.jsxs)(j,{onSubmit:G,children:[(0,B.jsx)(M,{type:`text`,value:m,onChange:e=>h(e.target.value),placeholder:`passphrase`,"aria-label":`Résumé passphrase`,autoComplete:`off`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:`false`,disabled:b}),(0,B.jsx)(N,{type:`submit`,disabled:b||!m.trim(),children:b?`Unlocking…`:`Unlock`})]}),g&&(0,B.jsx)(P,{role:`alert`,children:g}),(0,B.jsxs)(F,{children:[`Don’t have one?`,` `,(0,B.jsx)(`a`,{href:`mailto:${V}?subject=R%C3%A9sum%C3%A9%20passphrase`,children:`Ask me for it`}),` `,`— happy to send the word, or the PDF straight to your inbox.`]})]})]}),(0,B.jsx)(o,{})]})},W=()=>(0,B.jsx)(U,{});export{W as default};