import{E as r,x as i}from"./lit-element-BTykW0Pr.js";import{l as h}from"./link-3WVy4I6L.js";import"./icon-KjcOVNcY.js";const f=({variant:t="default",imageSrc:c,title:o,description:n,linkHref:g,linkLabel:b})=>{const L=["card",`card--${t}`].join(" ");return i`
    <article class="${L}">
      ${c?i`<img src="${c}" alt="${o||"Card image"}" />`:r}
      ${o?i`<h3>${o}</h3>`:r}
      ${n?i`<p>${n}</p>`:r}
      ${h({variant:"inline",href:g||"#",target:"_self",label:b,border:!1,borderRadius:!1})}
    </article>
  `},y={title:"Card",tags:["autodocs"],render:t=>f(t),argTypes:{variant:{control:{type:"select"},options:["default","nuovo"],description:"Stile della card"},imageSrc:{control:"text",description:"URL immagine card"},title:{control:"text",description:"Titolo della card"},description:{control:"text",description:"Descrizione della card"},linkHref:{control:"text",description:"Link associato alla card"},linkLabel:{control:"text",description:"Testo del link"}},parameters:{docs:{description:{component:"Il componente Card presenta contenuti visivi come immagini, titoli, descrizioni e link di approfondimento. Ottimizzato per responsive design, perfetto per gallerie prodotto, vetrine promozionali o contenuti editoriali."}}}},a={args:{imageSrc:"https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",title:"Stella",description:"Cucina componibile",linkHref:"#",linkLabel:"Scopri di più"}},S=[{imageSrc:"https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",title:"Stella",description:"Cucina componibile",linkHref:"#",linkLabel:"Scopri di più"},{imageSrc:"https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",title:"Luna",description:"Cucina moderna",linkHref:"#",linkLabel:"Scopri di più"},{imageSrc:"https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",title:"Sole",description:"Cucina classica",linkHref:"#",linkLabel:"Scopri di più"}],k=()=>i`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="card-list" style="list-style: none; padding: 0;">
      ${S.map(t=>i`
        <li style="padding-bottom: 3rem;">${f(t)}</li>
      `)}
    </ul>
  </div>
`,e=k.bind({});e.storyName="Lista di Card";e.parameters={docs:{description:{story:"Esempio di utilizzo di più card in lista"}}};var d,l,s;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    imageSrc: "https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",
    title: "Stella",
    description: "Cucina componibile",
    linkHref: "#",
    linkLabel: "Scopri di più"
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var p,m,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="card-list" style="list-style: none; padding: 0;">
      \${cardListItems.map(item => html\`
        <li style="padding-bottom: 3rem;">\${card(item)}</li>
      \`)}
    </ul>
  </div>
\``,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const C=["Default","CardList"];export{e as CardList,a as Default,C as __namedExportsOrder,y as default};
