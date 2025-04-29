import{E as p,x as f}from"./lit-element-BTykW0Pr.js";import{i as t}from"./icon-KjcOVNcY.js";const E=({href:s="#",target:n="_self",variant:l="header",label:i,withIcon:e=null,border:o=!1,borderRadius:u=!1,dataActive:a=!1,onClick:r})=>{const c=d=>{r==null||r();const m=new CustomEvent("link-click",{bubbles:!0,composed:!0,detail:{href:s}});d.currentTarget.dispatchEvent(m)},$=["link",`link--${l}`,o?"link-border":"",u?"link-borderradius":"",a?"active":""].filter(Boolean).join(" ");return f`
    <a
      class="${$}"
      href="${s}"
      target="${n}"
      rel="${n==="_blank"?"noopener noreferrer":""}"
      aria-current=${a?"page":p}
      @click=${c}
    >
      ${e&&l==="header"?t({type:e,size:"medium"}):null}
      ${i}
      ${e&&l==="inlineWithIcon"?t({type:e,size:"small"}):null}
    </a>
  `};export{E as l};
