const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./swiper-bTNwr3SU.js","./utils-DH6Lzeoh.js","./index-BI9D0mIr.js"])))=>i.map(i=>d[i]);
import{_ as B}from"./iframe-C0xJ_AaH.js";import{E as w,x as r}from"./lit-element-BTykW0Pr.js";let h,V;const m={imageGallery:"Galleria di immagini",previousSlide:"Slide precedente",nextSlide:"Slide successiva",currentSlide:"Slide corrente",slide:"Slide",startCarousel:"Avvia il carosello",pauseCarousel:"Metti in pausa il carosello",navigationInstructions:"Usa le frecce sinistra e destra per navigare tra le slide",goToSlide:"Vai alla slide",firstSlide:"Questa è la prima slide",lastSlide:"Questa è l'ultima slide"};var d=(e=>(e.OVERLAY="overlay",e.OUTSIDE="outside",e))(d||{});const G=[{image:"https://placehold.co/800x400",caption:"Titolo Slide 1",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 2",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 3",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 4",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 5",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 6",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 7",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 8",href:"#"}],c=new Map;let E=!1;const I=e=>{const t=`carousel-${Math.floor(Math.random()*1e4)}`,i={...m,...e.texts||{}},a={slides:e.slides??G.map((s,n)=>({image:s.image,caption:`${i.slide} ${n+1}`,href:s.href??"#"})),autoplay:e.autoplay??!1,loop:e.loop??!0,delay:e.delay??5e3,multiSlide:e.multiSlide??!1,slidesPerView:e.slidesPerView??(e.multiSlide?3:1),spaceBetween:e.spaceBetween??20,centeredSlides:e.centeredSlides??!1,showPagination:e.showPagination??!0,showCaptions:e.showCaptions??!0,navigationButtonPosition:e.navigationButtonPosition??"overlay",width:e.width??"100%",texts:i};if(typeof window<"u"){setTimeout(()=>U(t,a),0);const s=()=>D(t);window.addEventListener("beforeunload",s,{once:!0})}return r`
    <div id="${t}" class="carousel-container ${a.multiSlide?"carousel-multi-slide":""} nav-${a.navigationButtonPosition}">
      <h2 id="carousel-title-${t}" class="visually-hidden">${i.imageGallery}</h2>

      <button 
        class="carousel-play-pause" 
        type="button"
        aria-label="${a.autoplay?i.pauseCarousel:i.startCarousel}"
        aria-pressed="${a.autoplay?"true":"false"}"
      >
        <span class="${a.autoplay?"pause-icon":"play-icon"}"></span>
      </button>

      <div class="swiper-mask">
        <div class="swiper" role="region" aria-roledescription="carousel" aria-labelledby="carousel-title-${t}">
          ${a.multiSlide?w:r`<div class="visually-hidden" aria-live="polite">${i.navigationInstructions}</div>`}
          <div class="swiper-wrapper">
            ${a.slides.map((s,n)=>r`
              <div 
                class="swiper-slide"
                role="group"
                aria-roledescription="slide"
                aria-label="${s.caption||""}"
                tabindex="${n===0?"0":"-1"}"
                aria-hidden="${n===0?"false":"true"}"
                ${n===0?r`aria-current="true"`:w}
              >
                <a href="${s.href}" class="slide-link" target="_blank">
                  <img src="${s.image}" alt="" loading="lazy" />
                  ${s.caption&&a.showCaptions?r`<div class="slide-caption">${s.caption}</div>`:w}
                </a>
              </div>
            `)}
          </div>
        </div>
      </div>

      <div class="swiper-button-prev" role="button" aria-label="${i.previousSlide}"></div>
      <div class="swiper-button-next" role="button" aria-label="${i.nextSlide}"></div>
      ${a.showPagination?r`<div class="swiper-pagination"></div>`:w}
    </div>
    <div class="carousel-live-region visually-hidden" role="alert"></div>
  `};async function U(e,t){var b,P,x;const i=document.getElementById(e),a=i==null?void 0:i.querySelector(".swiper");if(!i||!a)return;if(i.carouselTexts=t.texts||m,await D(e),!h){const[o,u]=await Promise.all([B(()=>import("./swiper-bTNwr3SU.js"),__vite__mapDeps([0,1]),import.meta.url),B(()=>import("./index-BI9D0mIr.js"),__vite__mapDeps([2,1]),import.meta.url)]);if(h=o.Swiper,V=u,!document.getElementById("swiper-core-styles")){const l=document.createElement("link");l.id="swiper-core-styles",l.rel="stylesheet",l.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(l)}}const{Navigation:s,Pagination:n,A11y:S,Autoplay:p}=V;h.use([s,n,S,p]);const z=new h(a,{slidesPerView:t.slidesPerView,slidesPerGroup:1,spaceBetween:t.spaceBetween,centeredSlides:t.centeredSlides,loop:t.loop,loopedSlides:((b=t.slides)==null?void 0:b.length)||0,loopFillGroupWithBlank:!0,autoplay:t.autoplay?{delay:t.delay,disableOnInteraction:!1}:!1,breakpoints:t.multiSlide?t.breakpoints:!1,navigation:{nextEl:`#${e} .swiper-button-next`,prevEl:`#${e} .swiper-button-prev`},pagination:t.showPagination?{el:`#${e} .swiper-pagination`,clickable:!0,renderBullet:(o,u)=>{const l=t.texts||m;return`<button class="${u}" aria-label="${l.goToSlide} ${o+1}"></button>`}}:!1,a11y:{enabled:!0,prevSlideMessage:((P=t.texts)==null?void 0:P.previousSlide)||m.previousSlide,nextSlideMessage:((x=t.texts)==null?void 0:x.nextSlide)||m.nextSlide},on:{init(){$(e,0,t.slidesPerView||1),q(e),E||(Y(e),E=!0)},slideChange(){const o=c.get(e),u=(o==null?void 0:o.realIndex)??(o==null?void 0:o.activeIndex)??0;$(e,u,t.slidesPerView||1)}}});c.set(e,z)}async function D(e){const t=c.get(e);t&&(t.destroy(!0,!0),c.delete(e))}function $(e,t,i){const a=document.getElementById(e);if(!a)return;a.querySelectorAll(".swiper-slide").forEach((n,S)=>{const p=S===t;i>1?(n.setAttribute("tabindex","0"),n.setAttribute("aria-hidden","false")):(n.setAttribute("tabindex",p?"0":"-1"),n.setAttribute("aria-hidden",p?"false":"true"),p?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current"))})}function Y(e,t){document.addEventListener("keydown",i=>{const a=document.getElementById(e),s=c.get(e);!a||!s||a.contains(document.activeElement)&&(i.key==="ArrowLeft"?(i.preventDefault(),s.slidePrev()):i.key==="ArrowRight"&&(i.preventDefault(),s.slideNext()))})}function q(e){const t=document.getElementById(e),i=t==null?void 0:t.querySelector(".carousel-play-pause");i&&i.addEventListener("click",()=>{const a=c.get(e);if(!a||!a.autoplay)return;const s=i.querySelector("span");a.autoplay.running?(a.autoplay.stop(),s==null||s.classList.replace("pause-icon","play-icon"),i.setAttribute("aria-pressed","false")):(a.autoplay.start(),s==null||s.classList.replace("play-icon","pause-icon"),i.setAttribute("aria-pressed","true"))})}const W={title:"Carosello",tags:["autodocs"],render:e=>{if(!document.getElementById("swiper-styles")){const t=document.createElement("link");t.id="swiper-styles",t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(t)}return I(e)},argTypes:{autoplay:{control:"boolean",description:"Avvia autoplay automatico"},loop:{control:"boolean",description:"Permette il loop infinito"},delay:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Ritardo autoplay"},multiSlide:{control:"boolean",description:"Mostra più slide assieme"},slidesPerView:{control:{type:"number",min:1,max:10},description:"Slide visibili"},spaceBetween:{control:{type:"number",min:0,max:50},description:"Spaziatura tra slide (px)"},centeredSlides:{control:"boolean",description:"Centra la slide attiva"},showPagination:{control:"boolean",description:"Mostra i pallini di paginazione"},showCaptions:{control:"boolean",description:"Mostra le didascalie"},navigationButtonPosition:{control:{type:"radio"},options:[d.OVERLAY,d.OUTSIDE],description:"Posizione dei pulsanti di navigazione"},width:{control:"text",description:"Larghezza carosello (es. 100%, 1200px)"},onSlideChange:{action:"slideChanged"}},parameters:{docs:{description:{component:"Il componente Carousel consente di scorrere tra una serie di slide, con supporto per autoplay, multi-slide, navigazione da tastiera, pulsanti personalizzabili e accessibilità tramite aria-live e annunci dinamici."}}}},v=[{image:"https://placehold.co/800x400",caption:"Titolo Slide 1",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 2",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 3",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 4",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 5",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 6",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 7",href:"#"},{image:"https://placehold.co/800x400",caption:"Titolo Slide 8",href:"#"}],g={args:{slides:v,autoplay:!1,loop:!0,delay:5e3,multiSlide:!1,slidesPerView:1,spaceBetween:20,centeredSlides:!1,showPagination:!0,showCaptions:!1,navigationButtonPosition:d.OVERLAY,width:"100%"}},f={args:{slides:v,autoplay:!1,loop:!0,delay:5e3,multiSlide:!0,slidesPerView:5,spaceBetween:20,centeredSlides:!1,showPagination:!1,showCaptions:!0,navigationButtonPosition:d.OUTSIDE,width:"1200px",breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:5,spaceBetween:20}}},parameters:{docs:{description:{story:"Carosello con 5 slide visibili contemporaneamente. Responsive su mobile e tablet."}}}},y={args:{slides:v,autoplay:!0,loop:!0,delay:3e3,multiSlide:!1,slidesPerView:1,spaceBetween:20,centeredSlides:!1,showPagination:!0,showCaptions:!1,navigationButtonPosition:d.OVERLAY,width:"100%",breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20}}},parameters:{docs:{description:{story:"Carosello con autoplay attivo che scorre automaticamente ogni 3 secondi."}}}};var A,C,T;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    multiSlide: false,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    showPagination: true,
    showCaptions: false,
    navigationButtonPosition: NavigationButtonPosition.OVERLAY,
    width: '100%'
  }
}`,...(T=(C=g.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,L,_;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    multiSlide: true,
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: false,
    showPagination: false,
    showCaptions: true,
    navigationButtonPosition: NavigationButtonPosition.OUTSIDE,
    width: '1200px',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con 5 slide visibili contemporaneamente. Responsive su mobile e tablet.'
      }
    }
  }
}`,...(_=(L=f.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,M,R;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    slides: sampleSlides,
    autoplay: true,
    loop: true,
    delay: 3000,
    multiSlide: false,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    showPagination: true,
    showCaptions: false,
    navigationButtonPosition: NavigationButtonPosition.OVERLAY,
    width: '100%',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con autoplay attivo che scorre automaticamente ogni 3 secondi.'
      }
    }
  }
}`,...(R=(M=y.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const j=["Default","FiveSlides","WithAutoplay"];export{g as Default,f as FiveSlides,y as WithAutoplay,j as __namedExportsOrder,W as default};
