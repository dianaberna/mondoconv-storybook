import { html, nothing } from 'lit';
import './carousel.css';

let Swiper: any;
let SwiperModules: any;

export interface CarouselTexts {
  imageGallery: string;
  previousSlide: string;
  nextSlide: string;
  currentSlide: string;
  slide: string;
  startCarousel: string;
  pauseCarousel: string;
  navigationInstructions: string;
  goToSlide: string;
  firstSlide: string;
  lastSlide: string;
}

export const defaultTexts: CarouselTexts = {
  imageGallery: 'Galleria di immagini',
  previousSlide: 'Slide precedente',
  nextSlide: 'Slide successiva',
  currentSlide: 'Slide corrente',
  slide: 'Slide',
  startCarousel: 'Avvia il carosello',
  pauseCarousel: 'Metti in pausa il carosello',
  navigationInstructions: 'Usa le frecce sinistra e destra per navigare tra le slide',
  goToSlide: 'Vai alla slide',
  firstSlide: 'Questa è la prima slide',
  lastSlide: 'Questa è l\'ultima slide'
};

export enum NavigationButtonPosition {
  OVERLAY = 'overlay',
  OUTSIDE = 'outside'
}

export interface CarouselProps {
  slides?: Array<{
    image: string;
    caption?: string;
    href?: string;
  }>;
  autoplay?: boolean;
  loop?: boolean;
  delay?: number;
  multiSlide?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  centeredSlides?: boolean;
  showPagination?: boolean;
  showCaptions?: boolean;
  navigationButtonPosition?: NavigationButtonPosition;
  breakpoints?: Record<number, { slidesPerView?: number; spaceBetween?: number }>;
  onSlideChange?: (index: number) => void;
  texts?: Partial<CarouselTexts>;
  width?: string;
}

const DEFAULT_IMAGES = [
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 1',
    href: '#'
  },
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 2',
    href: '#'
  },
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 3',
    href: '#'
  },
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 4',
    href: '#'
  },
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 5',
    href: '#'
  },
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 6',
    href: '#'
  },
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 7',
    href: '#'
  },
  {
    image: 'https://placehold.co/800x400',
    caption: 'Titolo Slide 8',
    href: '#'
  },
];

const swiperInstances = new Map<string, any>();
let keyboardListenerAttached = false;

export const carousel = (props: CarouselProps) => {
  const carouselId = `carousel-${Math.floor(Math.random() * 10000)}`;
  const texts = { ...defaultTexts, ...(props.texts || {}) };

  const mergedProps = {
    slides: props.slides ?? DEFAULT_IMAGES.map((img, i) => ({
      image: img.image,
      caption: `${texts.slide} ${i + 1}`,
      href: img.href ?? '#',
    })),
    autoplay: props.autoplay ?? false,
    loop: props.loop ?? true,
    delay: props.delay ?? 5000,
    multiSlide: props.multiSlide ?? false,
    slidesPerView: props.slidesPerView ?? (props.multiSlide ? 3 : 1),
    spaceBetween: props.spaceBetween ?? 20,
    centeredSlides: props.centeredSlides ?? false,
    showPagination: props.showPagination ?? true,
    showCaptions: props.showCaptions ?? true,
    navigationButtonPosition: props.navigationButtonPosition ?? NavigationButtonPosition.OVERLAY,
    width: props.width ?? '100%',
    texts,
  };

  if (typeof window !== 'undefined') {
    setTimeout(() => initCarousel(carouselId, mergedProps), 0);

    const cleanup = () => destroySwiper(carouselId);
    window.addEventListener('beforeunload', cleanup, { once: true });
  }

  return html`
    <div id="${carouselId}" class="carousel-container ${mergedProps.multiSlide ? 'carousel-multi-slide' : ''} nav-${mergedProps.navigationButtonPosition}">
      <h2 id="carousel-title-${carouselId}" class="visually-hidden">${texts.imageGallery}</h2>

      <button 
        class="carousel-play-pause" 
        type="button"
        aria-label="${mergedProps.autoplay ? texts.pauseCarousel : texts.startCarousel}"
        aria-pressed="${mergedProps.autoplay ? 'true' : 'false'}"
      >
        <span class="${mergedProps.autoplay ? 'pause-icon' : 'play-icon'}"></span>
      </button>

      <div class="swiper-mask">
        <div class="swiper" role="region" aria-roledescription="carousel" aria-labelledby="carousel-title-${carouselId}">
          ${!mergedProps.multiSlide ? html`<div class="visually-hidden" aria-live="polite">${texts.navigationInstructions}</div>` : nothing}
          <div class="swiper-wrapper">
            ${mergedProps.slides.map((slide, index) => html`
              <div 
                class="swiper-slide"
                role="group"
                aria-roledescription="slide"
                aria-label="${slide.caption || ''}"
                tabindex="${index === 0 ? '0' : '-1'}"
                aria-hidden="${index === 0 ? 'false' : 'true'}"
                ${index === 0 ? html`aria-current="true"` : nothing}
              >
                <a href="${slide.href}" class="slide-link" target="_blank">
                  <img src="${slide.image}" alt="" loading="lazy" />
                  ${slide.caption && mergedProps.showCaptions ? html`<div class="slide-caption">${slide.caption}</div>` : nothing}
                </a>
              </div>
            `)}
          </div>
        </div>
      </div>

      <div class="swiper-button-prev" role="button" aria-label="${texts.previousSlide}"></div>
      <div class="swiper-button-next" role="button" aria-label="${texts.nextSlide}"></div>
      ${mergedProps.showPagination ? html`<div class="swiper-pagination"></div>` : nothing}
    </div>
    <div class="carousel-live-region visually-hidden" role="alert"></div>
  `;
};

// --- Init Carousel Swiper ---
async function initCarousel(carouselId: string, props: CarouselProps) {
  const container = document.getElementById(carouselId);
  const swiperContainer = container?.querySelector('.swiper');

  if (!container || !swiperContainer) return;

  (container as any).carouselTexts = props.texts || defaultTexts;

  await destroySwiper(carouselId);

  if (!Swiper) {
    const [SwiperCore, SwiperModulesLib] = await Promise.all([
      import('swiper'),
      import('swiper/modules')
    ]);
    Swiper = SwiperCore.Swiper;
    SwiperModules = SwiperModulesLib;
    if (!document.getElementById('swiper-core-styles')) {
      const link = document.createElement('link');
      link.id = 'swiper-core-styles';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(link);
    }
  }

  const { Navigation, Pagination, A11y, Autoplay } = SwiperModules;
  Swiper.use([Navigation, Pagination, A11y, Autoplay]);

  const swiper = new Swiper(swiperContainer, {
    slidesPerView: props.slidesPerView,
  slidesPerGroup: 1, // FAI SCORRERE 1 slide ALLA VOLTA
  spaceBetween: props.spaceBetween,
  centeredSlides: props.centeredSlides,
  loop: props.loop,
  loopedSlides: props.slides?.length || 0,
  loopFillGroupWithBlank: true,
  autoplay: props.autoplay ? { delay: props.delay, disableOnInteraction: false } : false,
  breakpoints: props.multiSlide ? props.breakpoints : false,
  navigation: {
    nextEl: `#${carouselId} .swiper-button-next`,
    prevEl: `#${carouselId} .swiper-button-prev`,
  },
  pagination: props.showPagination ? {
    el: `#${carouselId} .swiper-pagination`,
    clickable: true,
    renderBullet: (index: number, className: string) => {
      const texts = props.texts || defaultTexts;
      return `<button class="${className}" aria-label="${texts.goToSlide} ${index + 1}"></button>`;
    }
  } : false,
    a11y: {
      enabled: true,
      prevSlideMessage: props.texts?.previousSlide || defaultTexts.previousSlide,
      nextSlideMessage: props.texts?.nextSlide || defaultTexts.nextSlide,
    },
    on: {
      init() {
        updateAriaAttributes(carouselId, 0, props.slidesPerView || 1);
        setupPlayPauseButton(carouselId);
        if (!keyboardListenerAttached) {
          setupKeyboardControls(carouselId, props);
          keyboardListenerAttached = true;
        }
      },
      slideChange() {
        const swiperInstance = swiperInstances.get(carouselId);
        const realIndex = swiperInstance?.realIndex ?? swiperInstance?.activeIndex ?? 0;
        updateAriaAttributes(carouselId, realIndex, props.slidesPerView || 1);
      }
    }
  });

  swiperInstances.set(carouselId, swiper);
}

// --- Destroy Swiper instance ---
async function destroySwiper(carouselId: string) {
  const swiper = swiperInstances.get(carouselId);
  if (swiper) {
    swiper.destroy(true, true);
    swiperInstances.delete(carouselId);
  }
}

// --- Update ARIA Attributes ---
function updateAriaAttributes(carouselId: string, activeIndex: number, slidesPerView: number) {
  const container = document.getElementById(carouselId);
  if (!container) return;

  const slides = container.querySelectorAll('.swiper-slide');

  slides.forEach((slide, index) => {
    const isActive = index === activeIndex;
    if (slidesPerView > 1) {
      slide.setAttribute('tabindex', '0');
      slide.setAttribute('aria-hidden', 'false');
    } else {
      slide.setAttribute('tabindex', isActive ? '0' : '-1');
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      if (isActive) {
        slide.setAttribute('aria-current', 'true');
      } else {
        slide.removeAttribute('aria-current');
      }
    }
  });
}

// --- Setup Keyboard Navigation ---
function setupKeyboardControls(carouselId: string, props: CarouselProps) {
  document.addEventListener('keydown', (event) => {
    const container = document.getElementById(carouselId);
    const swiper = swiperInstances.get(carouselId);
    if (!container || !swiper) return;
    if (!container.contains(document.activeElement)) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      swiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      swiper.slideNext();
    }
  });
}

// --- Setup Play/Pause Button ---
function setupPlayPauseButton(carouselId: string) {
  const container = document.getElementById(carouselId);
  const button = container?.querySelector('.carousel-play-pause');
  if (!button) return;

  button.addEventListener('click', () => {
    const swiper = swiperInstances.get(carouselId);
    if (!swiper || !swiper.autoplay) return;
    const icon = button.querySelector('span');

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      icon?.classList.replace('pause-icon', 'play-icon');
      button.setAttribute('aria-pressed', 'false');
    } else {
      swiper.autoplay.start();
      icon?.classList.replace('play-icon', 'pause-icon');
      button.setAttribute('aria-pressed', 'true');
    }
  });
}
