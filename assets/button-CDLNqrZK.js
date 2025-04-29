import{x as u}from"./lit-element-BTykW0Pr.js";import{i as a}from"./icon-KjcOVNcY.js";const w=({label:t,onClick:e,iconsize:o="small",shape:$="normal",width:b="fitcontent",height:c="fitcontent",iconleft:s,iconright:n,variant:i="primario",type:m="pieno",disabled:r=!1,ariaLabel:l})=>{const p=d=>{if(r)return;e==null||e();const h=new CustomEvent("button-click",{bubbles:!0,composed:!0,detail:{label:t}});d.target.dispatchEvent(h)},f=["button",`button--${i}-${m}`,`button-${$}`,`button-width-${b}`,`button-height-${c}`].filter(Boolean).join(" ");return u`
    <button class="${f}" ?disabled=${r} @click=${p} aria-label=${l||t} >
      ${i==="findomestic"?u`<img src='./assets/findomestic.svg'>`:null}
      ${s?a({type:s,size:o}):""}
      ${t}
      ${n?a({type:n,size:o}):""}
    </button>
  `};export{w as b};
