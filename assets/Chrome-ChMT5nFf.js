import{l as e,n as t,o as n,s as r,u as i}from"./index-OJXHSIcb.js";var a=i(e(),1),o=`'Megrim', 'Didot', 'Bodoni MT', Garamond, serif`,s=`'Didot', 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif`,c=`'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace`,l=`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,u=n.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, #150710 82%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(201, 168, 106, 0.18);
`,d=n.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 26px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=n(r)`
  font-family: ${o};
  font-size: 1.6rem;
  letter-spacing: 0.04em;
  color: #f0e6d8;
  text-decoration: none;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  gap: 7px;

  span {
    color: #8f7645;
  }
  b {
    font-weight: 400;
    color: #7ff0be;
  }
  &:hover b {
    color: #f0e6d8;
  }
`,p=n.svg`
  width: 40px;
  height: 25px;
  flex: none;
  overflow: visible;

  .glow {
    fill: none;
    stroke: #3fae82;
    stroke-width: 5;
    filter: drop-shadow(0 0 4px rgba(127, 240, 190, 0.5));
  }
  .dome2 {
    fill: none;
    stroke: #8f7645;
    stroke-width: 4.5;
  }
  /* matches the hover the "RM" had: the green goes cream on hover */
  ${f}:hover & .glow {
    stroke: #f0e6d8;
  }
`,m=n.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: ${c};
  font-size: 14px;

  @media screen and (max-width: 600px) {
    gap: 16px;
    font-size: 13px;
  }
`,h=n.a`
  color: #b9a892;
  text-decoration: none;
  transition: color 0.18s;

  &:hover {
    color: #7ff0be;
  }

  @media screen and (max-width: 440px) {
    &.hidem {
      display: none;
    }
  }
`,g=n.article`
  min-height: 100vh;
  background: #150710;
  color: #f0e6d8;
  font-family: ${l};
  line-height: 1.6;
  padding: 70px 20px 90px;
  display: flex;
  justify-content: center;
`,_=n.div`
  max-width: 760px;
  width: 100%;
`,v=n.a`
  display: inline-block;
  font-family: ${c};
  font-size: 0.9rem;
  color: #c9a86a;
  text-decoration: none;
  margin-bottom: 34px;
  transition: color 0.18s;

  &:hover {
    color: #7ff0be;
  }
`,y=n.img`
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(201, 168, 106, 0.18);
  margin-bottom: 34px;
  box-shadow: 0 20px 44px -26px #000;
`,b=n.h1`
  font-family: ${o};
  font-weight: 400;
  font-size: clamp(38px, 6vw, 64px);
  line-height: 1.02;
  letter-spacing: 0.005em;
  color: #f0e6d8;
  margin: 0 0 18px;
`,x=n.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #b9a892;
  margin: 0 0 24px;

  @media screen and (max-width: 480px) {
    font-size: 1.08rem;
  }
`,S=n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-family: ${c};
  font-size: 0.85rem;
  color: #8a7867;
  padding-bottom: 26px;
  margin-bottom: 42px;
  border-bottom: 1px solid rgba(201, 168, 106, 0.18);
`,C=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,w=n.span`
  font-family: ${c};
  font-size: 0.72rem;
  color: #b9a892;
  background: #1e0a16;
  border: 1px solid rgba(201, 168, 106, 0.32);
  border-radius: 5px;
  padding: 4px 10px;
`,T=n.p`
  font-size: 1.12rem;
  line-height: 1.78;
  color: #ddd0bd;
  margin: 0 0 24px;

  code {
    font-family: ${c};
    font-size: 0.9em;
    color: #7ff0be;
    background: #22101d;
    border: 1px solid rgba(201, 168, 106, 0.18);
    padding: 1px 6px;
    border-radius: 5px;
  }
`,E=n.h2`
  font-family: ${s};
  font-weight: 400;
  font-size: 1.7rem;
  letter-spacing: 0.01em;
  color: #f0e6d8;
  margin: 44px 0 16px;
`,D=n.blockquote`
  margin: 34px 0;
  padding: 6px 0 6px 24px;
  border-left: 2px solid #7ff0be;
  font-family: ${s};
  font-size: 1.4rem;
  line-height: 1.5;
  font-style: italic;
  color: #f0e6d8;
`,O=n.ul`
  margin: 0 0 24px;
  padding-left: 22px;
  list-style: none;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #ddd0bd;
    margin-bottom: 12px;
  }
  li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: #c9a86a;
    transform: rotate(45deg);
  }
`,k=n.pre`
  background: #100610;
  border: 1px solid rgba(201, 168, 106, 0.18);
  border-radius: 10px;
  padding: 20px;
  overflow-x: auto;
  margin: 0 0 28px;

  code {
    font-family: ${c};
    font-size: 0.9rem;
    line-height: 1.6;
    color: #d8cbb8;
    white-space: pre;
  }
`,A=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${c};
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c9a86a;
  background: #22101d;
  border: 1px solid rgba(201, 168, 106, 0.32);
  border-radius: 8px;
  padding: 12px 16px;
  margin: 0 0 24px;

  &:before {
    content: '';
    flex: none;
    width: 7px;
    height: 7px;
    border-radius: 1px;
    background: #7ff0be;
    transform: rotate(45deg);
  }
`,j=n.footer`
  border-top: 1px solid rgba(201, 168, 106, 0.18);
  background: #1e0a16;
`,M=n.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 40px 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
`,N=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  font-family: ${c};
  font-size: 13px;

  a {
    color: #8a7867;
    text-decoration: none;
    transition: color 0.18s;
  }
  a:hover {
    color: #7ff0be;
  }
`,P=n.span`
  font-family: ${c};
  font-size: 12px;
  color: #8a7867;
`,F=n.div`
  min-height: 100vh;
  background: #150710;
  color: #f0e6d8;
  font-family: ${l};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  text-align: center;
  padding: 20px;

  h1 {
    font-family: ${o};
    font-weight: 400;
  }
`,I=t(),L=()=>(0,I.jsx)(u,{children:(0,I.jsxs)(d,{children:[(0,I.jsxs)(f,{to:`/`,"aria-label":`Ryan McCauley — home`,children:[(0,I.jsx)(`span`,{children:`::`}),(0,I.jsx)(p,{viewBox:`-6 -14 162 98`,"aria-hidden":`true`,children:(0,I.jsxs)(`g`,{transform:`rotate(-22 75 40)`,children:[(0,I.jsx)(`ellipse`,{className:`glow`,cx:`75`,cy:`40`,rx:`60`,ry:`14`}),(0,I.jsx)(`path`,{className:`glow`,d:`M31 38 q44 -31 88 0`}),(0,I.jsx)(`ellipse`,{className:`dome2`,cx:`75`,cy:`32`,rx:`22`,ry:`7`})]})}),(0,I.jsx)(`span`,{children:`::`})]}),(0,I.jsxs)(m,{children:[(0,I.jsx)(h,{href:`/#work`,children:`Projects`}),(0,I.jsx)(h,{className:`hidem`,href:`/#writing`,children:`Writing`}),(0,I.jsx)(h,{href:`/#contact`,children:`Contact`})]})]})}),R=()=>(0,I.jsx)(j,{children:(0,I.jsxs)(M,{children:[(0,I.jsxs)(N,{children:[(0,I.jsx)(`a`,{href:`/`,children:`Home`}),(0,I.jsx)(`a`,{href:`/#work`,children:`Projects`}),(0,I.jsx)(`a`,{href:`/#writing`,children:`Writing`}),(0,I.jsx)(`a`,{href:`/#contact`,children:`Contact`}),(0,I.jsx)(`a`,{href:`https://github.com/Ryan-McCauley`,target:`_blank`,rel:`noreferrer`,children:`GitHub`})]}),(0,I.jsxs)(P,{children:[`© Ryan McCauley `,new Date().getFullYear()]})]})}),z=()=>{(0,a.useEffect)(()=>{let e=document.head.querySelector(`meta[name="robots"]`);if(!e)return;let t=e.getAttribute(`content`);return e.setAttribute(`content`,`noindex`),()=>e.setAttribute(`content`,t)},[])};export{E as _,O as a,T as c,y as d,_ as f,D as g,b as h,v as i,A as l,x as m,L as n,k as o,S as p,z as r,F as s,R as t,g as u,w as v,C as y};