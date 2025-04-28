import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from '@/components/button/button';
import { button } from '@/components/button/button';
import { getAllIconTypes } from '@/components/icon/iconSvgs';
import { html } from 'lit';

const meta: Meta<ButtonProps & {
  type?: 'pieno' | 'contorno';
  iconsize?: 'small' | 'medium' | 'large';
}> = {
  title: 'Button',
  tags: ['autodocs'],
  render: (args) => {
    const {  ...rest } = args;
    return html`${button({ ...rest })}`;
  },
  argTypes: {
    iconleft: {
      control: { type: 'select' },
      options: [null, ...getAllIconTypes()],
      description: 'Icona da visualizzare a sinistra',
    },
    iconright: {
      control: { type: 'select' },
      options: [null, ...getAllIconTypes()],
      description: 'Icona da visualizzare a destra',
    },
    iconsize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Dimensione dell’icona',
    },
    width: {
      control: { type: 'select' },
      options: ['fitcontent', 'fixed'],
      description: 'Larghezza',
    },
    height: {
      control: { type: 'select' },
      options: ['fitcontent', 'fixed'],
      description: 'Altezza',
    },
    variant: {
      control: { type: 'select' },
      options: ['primario', 'secondario', 'terziario', 'dolcecasa', 'dolcecasanero', 'findomestic', 'carrello'],
      description: 'Stile di base',
    },
    type: {
      control: { type: 'select' },
      options: ['pieno', 'contorno'],
      description: 'Stile dello sfondo',
    },
    label: {
      control: 'text',
      description: 'Testo interno al pulsante',
    },
    disabled: {
      control: 'boolean',
      description: 'Se disabilitato',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Il componente Button fornisce pulsanti versatili con supporto per icone a sinistra o destra, varianti di stile (pieno, contorno) e gestione dello stato disabilitato. Accessibile via tastiera e screen reader, con aria-label automatico.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta['render']>;

export const PrimarioSolido: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: 'Testo',
  },
};

export const PrimarioContorno: Story = {
  args: {
    ...PrimarioSolido.args,
    type: 'contorno',
  },
};

export const SecondarioSolido: Story = {
  args: {
    ...PrimarioSolido.args,
    variant: 'secondario',
  },
};

export const SecondarioContorno: Story = {
  args: {
    ...SecondarioSolido.args,
    type: 'contorno',
  },
};

export const TerziarioSolido: Story = {
  args: {
    ...PrimarioSolido.args,
    variant: 'terziario',
  },
};

export const DolcecasaSolido: Story = {
  args: {
    ...PrimarioSolido.args,
    variant: 'dolcecasa',
  },
};

export const DolcecasaneroSolido: Story = {
  args: {
    ...PrimarioSolido.args,
    variant: 'dolcecasanero',
  },
};

export const PrimarioSolidoDisabilitato: Story = {
  args: {
    ...PrimarioSolido.args,
    disabled: true,
  },
};

export const CarrelloDesktop: Story = {
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'medium',
    width: 'fitcontent',
    height: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: '',
  },
};

export const CarrelloMobile: Story = {
  args: {
    ...CarrelloDesktop.args,
    iconsize: 'small',
  },
};

export const SecondarioSolidoMenu: Story = {
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fixed',
    height: 'fitcontent',
    variant: 'secondario',
    type: 'pieno',
    disabled: false,
    label: 'Testo',
  },
};
export const Findomestic: Story = {
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fitcontent',
    height: 'fitcontent',
    variant: 'findomestic',
    type: 'pieno',
    disabled: false,
    label: 'Paga a rate',
  },
};


export const ProcediAcquisto: Story = {
  args: {
    iconleft: null,
    iconright: 'tipo_riproduci',
    iconsize: 'medium',
    width: 'fixed',
    height: 'fixed',
    variant: 'carrello',
    type: 'pieno',
    disabled: false,
    label: 'Procedi con l\'acquisto',
  },
};
