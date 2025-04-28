import { Meta, StoryObj } from '@storybook/web-components';
import { carousel, CarouselProps, NavigationButtonPosition } from '@/components/carousel/carousel';
import '@/components/carousel/carousel.css';

export default {
  title: 'Carosello',
  tags: ['autodocs'],
  render: (args) => {
    if (!document.getElementById('swiper-styles')) {
      const link = document.createElement('link');
      link.id = 'swiper-styles';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(link);
    }
    return carousel(args);
  },
  argTypes: {
    autoplay: { control: 'boolean', description: 'Avvia autoplay automatico' },
    loop: { control: 'boolean', description: 'Permette il loop infinito' },
    delay: { control: { type: 'number', min: 1000, max: 10000, step: 500 }, description: 'Ritardo autoplay' },
    multiSlide: { control: 'boolean', description: 'Mostra più slide assieme' },
    slidesPerView: { control: { type: 'number', min: 1, max: 10 }, description: 'Slide visibili' },
    spaceBetween: { control: { type: 'number', min: 0, max: 50 }, description: 'Spaziatura tra slide (px)' },
    centeredSlides: { control: 'boolean', description: 'Centra la slide attiva' },
    showPagination: { control: 'boolean', description: 'Mostra i pallini di paginazione' },
    showCaptions: { control: 'boolean', description: 'Mostra le didascalie' },
    navigationButtonPosition: {
      control: { type: 'radio' },
      options: [NavigationButtonPosition.OVERLAY, NavigationButtonPosition.OUTSIDE],
      description: 'Posizione dei pulsanti di navigazione'
    },
    width: { control: 'text', description: 'Larghezza carosello (es. 100%, 1200px)' },
    onSlideChange: { action: 'slideChanged' },
  },
  parameters:{
    docs:{
      description:{
        component: 'Il componente Carousel consente di scorrere tra una serie di slide, con supporto per autoplay, multi-slide, navigazione da tastiera, pulsanti personalizzabili e accessibilità tramite aria-live e annunci dinamici.'
      }
    }
  }
} as Meta<CarouselProps>;

type Story = StoryObj<CarouselProps>;

// Slides di esempio
const sampleSlides = [
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

export const Default: Story = {
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
    width: '100%',
  },
};

export const FiveSlides: Story = {
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
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 20 },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con 5 slide visibili contemporaneamente. Responsive su mobile e tablet.',
      },
    },
  },
};

export const WithAutoplay: Story = {
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
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con autoplay attivo che scorre automaticamente ogni 3 secondi.',
      },
    },
  },
};
