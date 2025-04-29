import{x as o}from"./lit-element-BTykW0Pr.js";import{i as d}from"./icon-KjcOVNcY.js";const p=({label:n="",open:t=!1,content:l="",customIcon:q=!1,onToggle:r})=>{const z=m=>{const g=m.currentTarget;r==null||r(g.open);const Q=new CustomEvent("accordion-toggle",{bubbles:!0,composed:!0,detail:{open:g.open}});m.target.dispatchEvent(Q)},O=["accordion"].join(" ");return o`
    <div class="${O}">
      <details ?open=${t} @toggle=${z}>
        <summary class="accordion__summary">
          ${q?o`<span class="accordion__icon">${d({type:"tipo_posizione",size:"medium"})}</span>`:null}
          <span class="accordion__label">${n}</span>
          <span class="accordion__icon">
            <span class="tipo_freccia_basso">
              ${d({type:"tipo_freccia_basso",size:"medium"})}
            </span>
            <span class="tipo_freccia_alto">
              ${d({type:"tipo_freccia_alto",size:"medium"})}
            </span>
          </span>
        </summary>
        <div class="accordion__content">
          ${l}
        </div>
      </details>
    </div>
  `},N={title:"Accordion",tags:["autodocs"],argTypes:{label:{control:"text",description:"Testo del pulsante di apertura dell'accordion"},open:{control:"boolean",description:"Stato dell'accordion"},customIcon:{control:"boolean",description:"Se presente, icona a sinistra"},onToggle:{action:"accordion-toggle"}},parameters:{docs:{description:{component:"Il componente Accordion consente di mostrare o nascondere sezioni di contenuto. Basato su details e summary nativi HTML5 per garantire accessibilità e semantica corretta. Supporta icone custom e apertura controllata."}}}},u=n=>{const t=o`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  `;return o`
    <div style="max-width: 500px; margin: 0 auto;">
      ${p({...n,content:t,onToggle:l=>console.log("Accordion toggled:",l)})}
    </div>
  `},e=u.bind({});e.args={label:"Accordion Title",open:!1,customIcon:!1};const s=u.bind({});s.args={...e.args,open:!0};const c=u.bind({});c.args={...e.args,customIcon:!0};const w=o`
  <p>Questo è un paragrafo di testo più lungo per mostrare come l'accordion si comporta con contenuti estesi.</p>
  <p>Puoi inserire qualsiasi contenuto HTML qui, inclusi altri componenti personalizzati.</p>
  <ul>
    <li>Elemento lista 1</li>
    <li>Elemento lista 2</li>
    <li>Elemento lista 3</li>
  </ul>
`,E=n=>o`
  <div style="max-width: 500px; margin: 0 auto;">
    ${p({...n,content:w,onToggle:t=>console.log("Accordion toggled:",t)})}
  </div>
`,i=E.bind({});i.storyName="Con Contenuto Lungo";i.args={...e.args};const M=[{label:"Primo Accordion",content:o`<p>Contenuto del primo accordion nella lista.</p>`,open:!1,customIcon:!0},{label:"Secondo Accordion",content:o`
      <p>Contenuto del secondo accordion nella lista.</p>
      <ul>
        <li>Sottoelemento 1</li>
        <li>Sottoelemento 2</li>
      </ul>
    `,open:!1,customIcon:!0},{label:"Terzo Accordion",content:o`
      <p>Contenuto del terzo accordion nella lista con più elementi.</p>
      <p>Questo accordion ha più contenuti per mostrare la flessibilità.</p>
    `,open:!1,customIcon:!0},{label:"Quarto Accordion",content:o`<p>Contenuto del quarto accordion nella lista.</p>`,open:!1,customIcon:!0},{label:"Quinto Accordion",content:o`
      <p>Contenuto del quinto accordion nella lista.</p>
      <ul>
        <li>Sottoelemento 1</li>
        <li>Sottoelemento 2</li>
      </ul>
    `,open:!1,customIcon:!0},{label:"Sesto Accordion",content:o`
      <p>Contenuto del sesto accordion nella lista con più elementi.</p>
      <p>Questo accordion ha più contenuti per mostrare la flessibilità.</p>
    `,open:!1,customIcon:!0}],P=()=>o`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="accordion-list" style="list-style: none; padding: 0;">
      ${M.map(n=>o`
        <li>
          ${p({...n,onToggle:t=>console.log(`${n.label} toggled:`,t)})}
        </li>
      `)}
    </ul>
  </div>
`,a=P.bind({});a.storyName="Lista di Accordion";a.parameters={docs:{description:{story:"Questo esempio mostra come utilizzare più accordion all'interno di una lista per creare un menu a più livelli o una FAQ."}}};var b,v,y;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const contentHtml = html\`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  \`;
  return html\`
    <div style="max-width: 500px; margin: 0 auto;">
      \${accordion({
    ...args,
    content: contentHtml,
    onToggle: isOpen => console.log('Accordion toggled:', isOpen)
  })}
    </div>
  \`;
}`,...(y=(v=e.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,h,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const contentHtml = html\`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  \`;
  return html\`
    <div style="max-width: 500px; margin: 0 auto;">
      \${accordion({
    ...args,
    content: contentHtml,
    onToggle: isOpen => console.log('Accordion toggled:', isOpen)
  })}
    </div>
  \`;
}`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var T,_,$;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const contentHtml = html\`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  \`;
  return html\`
    <div style="max-width: 500px; margin: 0 auto;">
      \${accordion({
    ...args,
    content: contentHtml,
    onToggle: isOpen => console.log('Accordion toggled:', isOpen)
  })}
    </div>
  \`;
}`,...($=(_=c.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var x,C,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
  <div style="max-width: 500px; margin: 0 auto;">
    \${accordion({
  ...args,
  content: longContentTemplate,
  onToggle: isOpen => console.log('Accordion toggled:', isOpen)
})}
  </div>
\``,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,S,H;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`() => html\`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="accordion-list" style="list-style: none; padding: 0;">
      \${accordionListItems.map(item => html\`
        <li>
          \${accordion({
  ...item,
  onToggle: isOpen => console.log(\`\${item.label} toggled:\`, isOpen)
})}
        </li>
      \`)}
    </ul>
  </div>
\``,...(H=(S=a.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const W=["Default","ApertoByDefault","ConIcona","WithLongContent","AccordionList"];export{a as AccordionList,s as ApertoByDefault,c as ConIcona,e as Default,i as WithLongContent,W as __namedExportsOrder,N as default};
