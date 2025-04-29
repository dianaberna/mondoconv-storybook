import{l as P}from"./link-3WVy4I6L.js";import{g as H}from"./icon-KjcOVNcY.js";import{x as d}from"./lit-element-BTykW0Pr.js";const F={title:"Link",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["header","tag","inlineWithIcon","inline"],description:"Stile visuale del link"},href:{control:"text",description:"URL del link"},target:{control:{type:"select"},options:["_self","_blank","_parent","_top"],description:"Target del link"},label:{control:"text",description:"Testo del link"},withIcon:{control:{type:"select"},options:[null,...H()],description:"Icona opzionale"},border:{control:"boolean",description:"Bordo visibile"},borderRadius:{control:"boolean",description:"Bordo arrotondato"},dataActive:{control:"boolean",description:"Stato attivo"}},parameters:{docs:{description:{component:"Il componente Link crea collegamenti ipertestuali personalizzati, con supporto per icone opzionali, bordi decorativi e varianti visive come header, tag e link inline. Completamente accessibile con target configurabile."}}}},s=c=>P(c),a=s.bind({});a.args={variant:"header",href:"#",target:"_self",label:"Punti Vendita",withIcon:"tipo_posizione"};const e=s.bind({});e.args={variant:"inlineWithIcon",href:"#",target:"_self",label:"Link Primario",withIcon:"tipo_freccia_dx"};const r=s.bind({});r.args={variant:"inline",href:"#",target:"_self",label:"Link Primario"};const n=s.bind({});n.args={variant:"tag",href:"#",label:"Link Tag",border:!0,borderRadius:!1};const t=s.bind({});t.args={variant:"tag",href:"#",label:"Link Tag Arrotondato",border:!0,borderRadius:!0};const D=c=>{const{variant:C,borderRadius:V,tags:B}=c;return d`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: auto; scrollbar-width: none;">
      ${B.map(l=>d`
        <li>
          ${P({variant:C,href:l.href||"#",label:l.label,withIcon:l.withIcon||null,border:!0,borderRadius:V,dataActive:l.active??!1})}
        </li>
      `)}
    </ul>
  `},o=D.bind({});o.args={variant:"tag",borderRadius:!1,tags:[{label:"Matrimoniale",active:!0},{label:"1 piazza e mezza"},{label:"Singolo"}]};const i=D.bind({});i.args={variant:"tag",borderRadius:!0,tags:[{label:"Tutto",active:!0},{label:"Promozioni"},{label:"Piani cottura"},{label:"Forni"},{label:"Lavastoviglie"},{label:"Microonde"},{label:"Induzione"}]};var g,p,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"args => link(args)",...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"args => link(args)",...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,h,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"args => link(args)",...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var I,T,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"args => link(args)",...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var L,y,R;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:"args => link(args)",...(R=(y=t.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var _,z,S;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const {
    variant,
    borderRadius,
    tags
  } = args as {
    variant: LinkVariant;
    borderRadius: boolean;
    tags: TagItem[];
  };
  return html\`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: auto; scrollbar-width: none;">
      \${tags.map(tag => html\`
        <li>
          \${link({
    variant,
    href: tag.href || '#',
    label: tag.label,
    withIcon: tag.withIcon || null,
    border: true,
    borderRadius,
    dataActive: tag.active ?? false
  })}
        </li>
      \`)}
    </ul>
  \`;
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var x,A,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const {
    variant,
    borderRadius,
    tags
  } = args as {
    variant: LinkVariant;
    borderRadius: boolean;
    tags: TagItem[];
  };
  return html\`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: auto; scrollbar-width: none;">
      \${tags.map(tag => html\`
        <li>
          \${link({
    variant,
    href: tag.href || '#',
    label: tag.label,
    withIcon: tag.withIcon || null,
    border: true,
    borderRadius,
    dataActive: tag.active ?? false
  })}
        </li>
      \`)}
    </ul>
  \`;
}`,...($=(A=i.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const O=["Header","ConIcona","Inline","Tag1","Tag2","ListaDiTag1","ListaDiTag2"];export{e as ConIcona,a as Header,r as Inline,o as ListaDiTag1,i as ListaDiTag2,n as Tag1,t as Tag2,O as __namedExportsOrder,F as default};
