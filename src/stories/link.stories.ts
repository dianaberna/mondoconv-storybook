import { StoryFn, Meta } from '@storybook/web-components';
import { link, LinkProps, LinkVariant } from '@/components/link/link';
import { getAllIconTypes, IconType } from '@/components/icon/iconSvgs';
import { html } from 'lit';

export default {
  title: 'Link',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['header', 'tag', 'inlineWithIcon', 'inline'],
      description: 'Stile visuale del link',
    },
    href: {
      control: 'text',
      description: 'URL del link',
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Target del link',
    },
    label: {
      control: 'text',
      description: 'Testo del link',
    },
    withIcon: {
      control: { type: 'select' },
      options: [null, ...getAllIconTypes()],
      description: 'Icona opzionale',
    },
    border: {
      control: 'boolean',
      description: 'Bordo visibile',
    },
    borderRadius: {
      control: 'boolean',
      description: 'Bordo arrotondato',
    },
    dataActive: {
      control: 'boolean',
      description: 'Stato attivo',
    },
  },
  parameters:{
    docs: {
      description: {
        component: 'Il componente Link crea collegamenti ipertestuali personalizzati, con supporto per icone opzionali, bordi decorativi e varianti visive come header, tag e link inline. Completamente accessibile con target configurabile.'
      }
    }
  }
} as Meta<LinkProps>;

const Template: StoryFn<LinkProps> = (args) => link(args);

export const Header = Template.bind({});
Header.args = {
  variant: 'header',
  href: '#',
  target: '_self',
  label: 'Punti Vendita',
  withIcon: 'tipo_posizione',
};

export const ConIcona = Template.bind({});
ConIcona.args = {
  variant: 'inlineWithIcon',
  href: '#',
  target: '_self',
  label: 'Link Primario',
  withIcon: 'tipo_freccia_dx',
};

export const Inline = Template.bind({});
Inline.args = {
  variant: 'inline',
  href: '#',
  target: '_self',
  label: 'Link Primario',
};

export const Tag1 = Template.bind({});
Tag1.args = {
  variant: 'tag',
  href: '#',
  label: 'Link Tag',
  border: true,
  borderRadius: false,
};

export const Tag2 = Template.bind({});
Tag2.args = {
  variant: 'tag',
  href: '#',
  label: 'Link Tag Arrotondato',
  border: true,
  borderRadius: true,
};

interface TagItem {
  label: string;
  href?: string;
  withIcon?: IconType | null;
  active?: boolean;
}

const TagListTemplate: StoryFn = (args) => {
  const { variant, borderRadius, tags } = args as { 
    variant: LinkVariant;
    borderRadius: boolean;
    tags: TagItem[];
  };

  return html`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: auto; scrollbar-width: none;">
      ${tags.map((tag) => html`
        <li>
          ${link({
            variant,
            href: tag.href || '#',
            label: tag.label,
            withIcon: tag.withIcon || null,
            border: true,
            borderRadius,
            dataActive: tag.active ?? false,
          })}
        </li>
      `)}
    </ul>
  `;
};

export const ListaDiTag1 = TagListTemplate.bind({});
ListaDiTag1.args = {
  variant: 'tag',
  borderRadius: false,
  tags: [
    { label: 'Matrimoniale', active: true },
    { label: '1 piazza e mezza' },
    { label: 'Singolo' },
  ],
};

export const ListaDiTag2 = TagListTemplate.bind({});
ListaDiTag2.args = {
  variant: 'tag',
  borderRadius: true,
  tags: [
    { label: 'Tutto', active: true },
    { label: 'Promozioni' },
    { label: 'Piani cottura' },
    { label: 'Forni' },
    { label: 'Lavastoviglie' },
    { label: 'Microonde' },
    { label: 'Induzione' },
  ],
};
