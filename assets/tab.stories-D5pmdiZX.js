import{x as d,B as w}from"./lit-element-BTykW0Pr.js";const z=({tabs:c,activeTab:b=0,variant:n="default",container:p})=>{let a=b;const h=t=>{const o=p.querySelector(`#tab-${t}`);o==null||o.focus()},l=t=>{a=t,u(),h(t);const o=new CustomEvent("tab-change",{bubbles:!0,composed:!0,detail:{activeTab:a}});p.dispatchEvent(o)},E=t=>{l(t)},k=t=>{t.key==="ArrowLeft"?l(Math.max(a-1,0)):t.key==="ArrowRight"&&l(Math.min(a+1,c.length-1))},u=()=>{const t=["tabs",`tabs--${n}`].join(" "),o=d`
            <div class="${t}">
                <div
                    role="tablist"
                    aria-labelledby="tablist-1"
                    @keydown=${k}
                >
                    ${c.map((s,e)=>d`
                            <span>
                                <button
                                    id="tab-${e}"
                                    type="button"
                                    role="tab"
                                    aria-selected="${e===a}"
                                    aria-controls="tabpanel-${e}"
                                    tabindex="${e===a?"0":"-1"}"
                                    @click=${()=>E(e)}
                                    class="tab-button tab-button--${n} ${e===a?"tab-button--active":""}"
                                >
                                    ${s.label}
                                </button>
                            </span>
                        `)}
                </div>

                ${c.map((s,e)=>d`
                        <div
                            id="tabpanel-${e}"
                            role="tabpanel"
                            aria-labelledby="tab-${e}"
                            class="tabpanel ${e!==a?"is-hidden":""}"
                            ?hidden=${e!==a}
                        >
                            ${typeof s.content=="function"?s.content():s.content}
                        </div>
                    `)}
            </div>
        `;w(o,p)};return u(),{update:l,getActiveTab:()=>a}},C={title:"Tab",tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Lista di tab"},variant:{control:"inline-radio",options:["default","pieno"],description:"Stile del tab"},activeTab:{control:"number",description:"Indice del tab attivo"}},parameters:{docs:{description:{component:"Il componente Tabs permette la navigazione a schede, mostrando contenuti separati senza cambiare pagina. Implementa gestione corretta di aria-selected e tabindex, garantendo la navigazione e il focus da tastiera."}}}},y=c=>{const b=document.createElement("div");return z({...c,container:b,tabs:c.tabs.map(n=>({...n,content:typeof n.content=="function"?n.content():n.content}))}),b},r=y.bind({});r.args={tabs:[{label:"Prima",content:"Contenuto della prima tab. Lorem ipsum dolor sit amet."},{label:"Seconda",content:"Contenuto della seconda tab. Vivamus luctus urna sed urna."},{label:"Terza",content:()=>d`<p>Contenuto della terza tab dinamica.</p>`}],variant:"default",activeTab:0};const i=y.bind({});i.args={...r.args,variant:"pieno"};var m,v,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  createTabs({
    ...args,
    container,
    tabs: args.tabs.map(tab => ({
      ...tab,
      content: typeof tab.content === 'function' ? tab.content() : tab.content
    }))
  });
  return container;
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,T,$;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  createTabs({
    ...args,
    container,
    tabs: args.tabs.map(tab => ({
      ...tab,
      content: typeof tab.content === 'function' ? tab.content() : tab.content
    }))
  });
  return container;
}`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const S=["TabDefault","TabPieno"];export{r as TabDefault,i as TabPieno,S as __namedExportsOrder,C as default};
