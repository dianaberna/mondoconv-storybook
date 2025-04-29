import{E as m,x as p}from"./lit-element-BTykW0Pr.js";import{i as E,g as I}from"./icon-KjcOVNcY.js";let y=!1;const R=({label:l,content:u,variant:s="iconLabelCart",dropdownWidth:b="auto",dropdownClass:A="",labelOnTopRight:g="2",iconName:f=null})=>{const c=`dropdown-${Math.random().toString(36).substring(2,11)}`,d=a=>{const e=a.currentTarget.closest(".dropdown"),t=e==null?void 0:e.querySelector(".dropdown__content"),n=e==null?void 0:e.querySelector(".dropdown__button");if(t&&n){const o=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!o).toString()),t.style.display=o?"none":"block",n.setAttribute("aria-expanded",(!o).toString())}a.stopPropagation()},z=a=>{const e=a.currentTarget.closest(".dropdown"),t=e==null?void 0:e.querySelector(".dropdown__content"),n=e==null?void 0:e.querySelector(".dropdown__button"),o=(t==null?void 0:t.getAttribute("aria-expanded"))==="true";switch(a.key){case"Escape":o&&d(a);break;case"Tab":if(o&&t){const h=t.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'),k=h[h.length-1];(document.activeElement===k&&!a.shiftKey||document.activeElement===n&&a.shiftKey)&&d(a)}break}};y||(document.addEventListener("click",a=>{document.querySelectorAll(".dropdown").forEach(t=>{if(!t.contains(a.target)){const n=t.querySelector(".dropdown__content"),o=t.querySelector(".dropdown__button");n&&n.getAttribute("aria-expanded")==="true"&&(n.setAttribute("aria-expanded","false"),n.style.display="none",o==null||o.setAttribute("aria-expanded","false"))}})}),y=!0);const M=["dropdown",`dropdown--${s}`].filter(Boolean).join(" "),q=["dropdown__button",`button--${s}`].filter(Boolean).join(" "),B=["dropdown__content",A].filter(Boolean).join(" "),T=b?`width: ${b};`:"";return p`
    <div id=${c} class="${M}" @keydown=${z}>
      <button
        class="${q}"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${c}-dropdown"
        @click=${d}
      >
        ${s==="iconLabelCart"&&f?E({type:f,size:"large"}):m}
        <span class="dropdown__label">${l}</span>
        ${parseInt(g)>0&&s==="iconLabelCart"?p`<span class="labelOnTopRight">${g}</span>`:m}
      </button>

      <div
        id="${c}-dropdown"
        class="${B}"
        style="${T}"
        aria-labelledby="${c}"
        aria-expanded="false"
      >
        ${u}
      </div>
    </div>
  `},j={title:"Dropdown",tags:["autodocs"],argTypes:{label:{control:"text",description:"Etichetta del pulsante"},variant:{control:{type:"select"},options:["iconLabelCart","onlyLabel"],description:"Variante del dropdown"},iconName:{control:{type:"select"},options:[null,...I()],description:"Icona da visualizzare"},dropdownWidth:{control:"text",description:"Larghezza del dropdown"},dropdownClass:{control:"text",description:"Classe CSS aggiuntiva"},labelOnTopRight:{control:"text",description:"Badge numerico sulla destra"}},parameters:{docs:{description:{component:"Il componente Dropdown visualizza contenuti o menu contestuali a discesa. Supporta varianti con sola etichetta o con icona + badge numerico (es. carrello). Completamente accessibile e controllabile da tastiera."}}}},L=l=>{const u=p`
    <h3>Bagni</h3>
    <ul style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 0;">
      <li><a href="#">Mobili bagno a terra</a></li>
      <li><a href="#">Mobili bagno sospesi</a></li>
      <li><a href="#">Mobiletti multiuso</a></li>
      <li><a href="#">Scarpiere</a></li>
      <li><a href="#">Specchi bagno</a></li>
      <li><a href="#">Rubinetteria bagno</a></li>
    </ul>
    <a href="#">Collezione bagni</a>
  `;return p`
    ${R({...l,content:l.content||u})}
  `},r=L.bind({});r.args={label:"Carrello",variant:"iconLabelCart",iconName:"tipo_carrello",dropdownWidth:"470px",labelOnTopRight:"2"};const i=L.bind({});i.args={label:"Bagni",variant:"onlyLabel",iconName:null,dropdownWidth:"470px"};var w,C,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const defaultContent = html\`
    <h3>Bagni</h3>
    <ul style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 0;">
      <li><a href="#">Mobili bagno a terra</a></li>
      <li><a href="#">Mobili bagno sospesi</a></li>
      <li><a href="#">Mobiletti multiuso</a></li>
      <li><a href="#">Scarpiere</a></li>
      <li><a href="#">Specchi bagno</a></li>
      <li><a href="#">Rubinetteria bagno</a></li>
    </ul>
    <a href="#">Collezione bagni</a>
  \`;
  return html\`
    \${dropdown({
    ...args,
    content: args.content || defaultContent
  })}
  \`;
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var x,_,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const defaultContent = html\`
    <h3>Bagni</h3>
    <ul style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 0;">
      <li><a href="#">Mobili bagno a terra</a></li>
      <li><a href="#">Mobili bagno sospesi</a></li>
      <li><a href="#">Mobiletti multiuso</a></li>
      <li><a href="#">Scarpiere</a></li>
      <li><a href="#">Specchi bagno</a></li>
      <li><a href="#">Rubinetteria bagno</a></li>
    </ul>
    <a href="#">Collezione bagni</a>
  \`;
  return html\`
    \${dropdown({
    ...args,
    content: args.content || defaultContent
  })}
  \`;
}`,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const K=["iconLabelCart","onlyLabel"];export{K as __namedExportsOrder,j as default,r as iconLabelCart,i as onlyLabel};
