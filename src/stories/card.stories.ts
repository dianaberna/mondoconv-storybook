import type { Meta, StoryObj, StoryFn } from "@storybook/web-components";
import { card, CardProps } from "@/components/card/card";
import { html } from "lit";

const meta = {
  title: "Card",
  tags: ["autodocs"],
  render: (args) => card(args),
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'nuovo'],
      description: 'Stile della card',
    },
    imageSrc: { control: 'text', description: 'URL immagine card' },
    title: { control: 'text', description: 'Titolo della card' },
    description: { control: 'text', description: 'Descrizione della card' },
    linkHref: { control: 'text', description: 'Link associato alla card' },
    linkLabel: { control: 'text', description: 'Testo del link' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Il componente Card presenta contenuti visivi come immagini, titoli, descrizioni e link di approfondimento. Ottimizzato per responsive design, perfetto per gallerie prodotto, vetrine promozionali o contenuti editoriali.'
      }
    }
  }
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    imageSrc: "https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",
    title: "Stella",
    description: "Cucina componibile",
    linkHref: "#",
    linkLabel: "Scopri di più",
  },
};

const cardListItems = [
  {
    imageSrc: "https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",
    title: "Stella",
    description: "Cucina componibile",
    linkHref: "#",
    linkLabel: "Scopri di più",
  },
  {
    imageSrc: "https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",
    title: "Luna",
    description: "Cucina moderna",
    linkHref: "#",
    linkLabel: "Scopri di più",
  },
  {
    imageSrc: "https://media.mondoconv.it/media/catalog/product/cache/b4620e7f01c647bf35d1a5a24df74d89/J/X/JXO9_1LVL.jpg",
    title: "Sole",
    description: "Cucina classica",
    linkHref: "#",
    linkLabel: "Scopri di più",
  },
];

const CardListTemplate: StoryFn = () => html`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="card-list" style="list-style: none; padding: 0;">
      ${cardListItems.map(item => html`
        <li style="padding-bottom: 3rem;">${card(item)}</li>
      `)}
    </ul>
  </div>
`;

export const CardList = CardListTemplate.bind({});
CardList.storyName = 'Lista di Card';
CardList.parameters = {
  docs: {
    description: {
      story: 'Esempio di utilizzo di più card in lista',
    },
  },
};
