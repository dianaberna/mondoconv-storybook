import { StoryFn, Meta } from '@storybook/web-components';
import { html } from 'lit';
import { dropdown, DropdownProps } from '@/components/dropdown/dropdown';
import { getAllIconTypes } from '@/components/icon/iconSvgs';

export default {
  title: 'Dropdown',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Etichetta del pulsante' },
    variant: { 
      control: { type: 'select' }, 
      options: ['iconLabelCart', 'onlyLabel'],
      description: 'Variante del dropdown',
    },
    iconName: {
      control: { type: 'select' },
      options: [null, ...getAllIconTypes()],
      description: 'Icona da visualizzare',
    },
    dropdownWidth: { control: 'text', description: 'Larghezza del dropdown' },
    dropdownClass: { control: 'text', description: 'Classe CSS aggiuntiva' },
    labelOnTopRight: { control: 'text', description: 'Badge numerico sulla destra' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Il componente Dropdown visualizza contenuti o menu contestuali a discesa. Supporta varianti con sola etichetta o con icona + badge numerico (es. carrello). Completamente accessibile e controllabile da tastiera.'
      }
    }
  }
} as Meta<DropdownProps>;

const Template: StoryFn<DropdownProps> = (args) => {
  const defaultContent = html`
    <h3>Bagni</h3>
    <ul style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 0;">
      <li><a href="#">Mobili bagno a terra</a></li>
      <li><a href="#">Mobili bagno sospesi</a></li>
      <li><a href="#">Mobiletti multiuso</a></li>
      <li><a href="#">Scarpiere</a></li>
      <li><a href="#">Specchi bagno</a></li>
      <li><a href="#">Rubinetteria bagno</a></li>
    </ul>
    <a href="#">Collezione bagni</a>
  `;

  return html`
    ${dropdown({
      ...args,
      content: args.content || defaultContent,
    })}
  `;
};

export const iconLabelCart = Template.bind({});
iconLabelCart.args = {
  label: 'Carrello',
  variant: 'iconLabelCart',
  iconName: 'tipo_carrello',
  dropdownWidth: '470px',
  labelOnTopRight: '2',
};

export const onlyLabel = Template.bind({});
onlyLabel.args = {
  label: 'Bagni',
  variant: 'onlyLabel',
  iconName: null,
  dropdownWidth: '470px',
};
