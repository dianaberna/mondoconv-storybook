import{x as o}from"./lit-element-BTykW0Pr.js";import{b as k}from"./button-CDLNqrZK.js";import"./icon-KjcOVNcY.js";const A=({title:e,content:m="",headerContent:p="",width:l="",height:n="",variant:a="default"})=>{const u=()=>{const t=document.getElementById("modal");t==null||t.classList.remove("is-open")},z=t=>{t.target.id==="modal"&&u()},E=t=>{t.key==="Escape"&&u()};document.body.hasAttribute("modal-key-listener-attached")||(document.addEventListener("keydown",E),document.body.setAttribute("modal-key-listener-attached","true"));const S=["modal-container",`modal--${a}`,l?`modal-width-${l}`:"",n?`modal-height-${n}`:""].filter(Boolean).join(" ");return o`
    <div 
      id="modal"
      class="modal"
      role="presentation"
      tabindex="-1"
      @click=${z}
    >
      <div
        id="modal-container"
        role="dialog"
        class="${S}"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        aria-modal="true"
      >
        <header class="modal-header">
          <div class="modal-header-standard">
            <h2 id="modal-title" class="modal-title">${e}</h2>
            ${k({iconleft:"tipo_chiudi",iconsize:"small",label:"",variant:"primario",type:"contorno",onClick:u,width:"fitcontent",height:"fitcontent"})}
          </div>
          ${a==="overlay"?o`
            <div class="modal-header-content">
              ${p}
            </div>
          `:null}
        </header>
        <div id="modal-desc" class="modal-content">
          ${m}
        </div>
      </div>
    </div>
  `},_={title:"Modal",tags:["autodocs"],argTypes:{title:{control:"text",description:"Titolo del modale"},content:{control:"text",description:"Contenuto principale del modale"},headerContent:{control:"text",description:"Contenuto opzionale dell'header"},width:{control:"text",description:"Larghezza del modale (es: 400px, 50vw)"},height:{control:"text",description:"Altezza del modale (es: 300px, 50vh)"},variant:{control:{type:"select"},options:["default","overlay"],description:"Tipo di modale"}},parameters:{docs:{description:{component:"Il componente Modal crea finestre di dialogo modali, bloccando l’interazione con il resto della pagina. Permette la chiusura tramite ESC, click esterno o pulsante. Gestisce focus automatico e attributi aria-modal per la piena accessibilità."}}}},c=e=>{const m=()=>{const n=document.querySelector("#modal");n&&n.classList.add("is-open");const a=document.getElementById("modal-container");a==null||a.focus()},p=e.content?o([e.content]):o`
              <p>
                  Contenuto della modale. Può essere chiusa con ESC, click
                  esterno o pulsante.
              </p>
              <footer class="modal-footer">
                  ${k({label:"Azione",variant:"primario",type:"pieno",onClick:()=>console.log("Esegui azione")})}
              </footer>
          `,l=e.headerContent?o([e.headerContent]):o` <p>Testo extra nell'header del modale.</p> `;return o`
        <button type="button" @click=${m}>Apri Modale</button>
        ${A({...e,content:p,headerContent:l})}
    `},r={render:c,args:{title:"Titolo Modale",width:"400px",variant:"default"}},d={render:c,args:{title:"Titolo Modale",width:"25vw",variant:"default"}},i={render:c,args:{title:"Titolo Modale",width:"80vw",variant:"default"}},s={render:c,args:{title:"Titolo Modale",variant:"overlay"}};var h,v,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Titolo Modale",
    width: "400px",
    variant: "default"
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,g,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Titolo Modale",
    width: "25vw",
    variant: "default"
  }
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var T,w,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Titolo Modale",
    width: "80vw",
    variant: "default"
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,$,C;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Titolo Modale",
    variant: "overlay"
  }
}`,...(C=($=s.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const B=["Default","Width25","Width80","Overlay"];export{r as Default,s as Overlay,d as Width25,i as Width80,B as __namedExportsOrder,_ as default};
