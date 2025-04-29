import{b as eo}from"./button-CDLNqrZK.js";import{g}from"./icon-KjcOVNcY.js";import{x as ro}from"./lit-element-BTykW0Pr.js";const to={title:"Button",tags:["autodocs"],render:Z=>{const{...oo}=Z;return ro`${eo({...oo})}`},argTypes:{iconleft:{control:{type:"select"},options:[null,...g()],description:"Icona da visualizzare a sinistra"},iconright:{control:{type:"select"},options:[null,...g()],description:"Icona da visualizzare a destra"},iconsize:{control:{type:"select"},options:["small","medium","large"],description:"Dimensione dell’icona"},width:{control:{type:"select"},options:["fitcontent","fixed"],description:"Larghezza"},height:{control:{type:"select"},options:["fitcontent","fixed"],description:"Altezza"},variant:{control:{type:"select"},options:["primario","secondario","terziario","dolcecasa","dolcecasanero","findomestic","carrello"],description:"Stile di base"},type:{control:{type:"select"},options:["pieno","contorno"],description:"Stile dello sfondo"},label:{control:"text",description:"Testo interno al pulsante"},disabled:{control:"boolean",description:"Se disabilitato"}},parameters:{docs:{description:{component:"Il componente Button fornisce pulsanti versatili con supporto per icone a sinistra o destra, varianti di stile (pieno, contorno) e gestione dello stato disabilitato. Accessibile via tastiera e screen reader, con aria-label automatico."}}}},o={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"primario",type:"pieno",label:"Testo"}},a={args:{...o.args,type:"contorno"}},e={args:{...o.args,variant:"secondario"}},i={args:{...e.args,type:"contorno"}},n={args:{...o.args,variant:"terziario"}},t={args:{...o.args,variant:"dolcecasa"}},s={args:{...o.args,variant:"dolcecasanero"}},c={args:{...o.args,disabled:!0}},r={args:{iconleft:"tipo_carrello",iconright:null,iconsize:"medium",width:"fitcontent",height:"fitcontent",variant:"primario",type:"pieno",label:""}},l={args:{...r.args,iconsize:"small"}},d={args:{iconleft:null,iconright:null,iconsize:"small",width:"fixed",height:"fitcontent",variant:"secondario",type:"pieno",disabled:!1,label:"Testo"}},p={args:{iconleft:null,iconright:null,iconsize:"small",width:"fitcontent",height:"fitcontent",variant:"findomestic",type:"pieno",disabled:!1,label:"Paga a rate"}},m={args:{iconleft:null,iconright:"tipo_riproduci",iconsize:"medium",width:"fixed",height:"fixed",variant:"carrello",type:"pieno",disabled:!1,label:"Procedi con l'acquisto"}};var u,f,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,b,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...PrimarioSolido.args,
    type: 'contorno'
  }
}`,...(z=(b=a.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var v,y,x;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...PrimarioSolido.args,
    variant: 'secondario'
  }
}`,...(x=(y=e.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var P,_,w;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...SecondarioSolido.args,
    type: 'contorno'
  }
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var D,C,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...PrimarioSolido.args,
    variant: 'terziario'
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var A,q,I;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...PrimarioSolido.args,
    variant: 'dolcecasa'
  }
}`,...(I=(q=t.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var M,k,B;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...PrimarioSolido.args,
    variant: 'dolcecasanero'
  }
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var F,E,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...PrimarioSolido.args,
    disabled: true
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,$,j;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'medium',
    width: 'fitcontent',
    height: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: ''
  }
}`,...(j=($=r.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var G,H,J;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...CarrelloDesktop.args,
    iconsize: 'small'
  }
}`,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,N,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fixed',
    height: 'fitcontent',
    variant: 'secondario',
    type: 'pieno',
    disabled: false,
    label: 'Testo'
  }
}`,...(Q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var R,U,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fitcontent',
    height: 'fitcontent',
    variant: 'findomestic',
    type: 'pieno',
    disabled: false,
    label: 'Paga a rate'
  }
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    iconleft: null,
    iconright: 'tipo_riproduci',
    iconsize: 'medium',
    width: 'fixed',
    height: 'fixed',
    variant: 'carrello',
    type: 'pieno',
    disabled: false,
    label: 'Procedi con l\\'acquisto'
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const so=["PrimarioSolido","PrimarioContorno","SecondarioSolido","SecondarioContorno","TerziarioSolido","DolcecasaSolido","DolcecasaneroSolido","PrimarioSolidoDisabilitato","CarrelloDesktop","CarrelloMobile","SecondarioSolidoMenu","Findomestic","ProcediAcquisto"];export{r as CarrelloDesktop,l as CarrelloMobile,t as DolcecasaSolido,s as DolcecasaneroSolido,p as Findomestic,a as PrimarioContorno,o as PrimarioSolido,c as PrimarioSolidoDisabilitato,m as ProcediAcquisto,i as SecondarioContorno,e as SecondarioSolido,d as SecondarioSolidoMenu,n as TerziarioSolido,so as __namedExportsOrder,to as default};
