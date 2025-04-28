import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import { createTabs } from '@/components/tab/tab';
import type { LitTabsProps } from '@/components/tab/tab';

export default {
  title: 'Tab',
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object', description: 'Lista di tab' },
    variant: { control: 'inline-radio', options: ['default', 'pieno'], description: 'Stile del tab' },
    activeTab: { control: 'number', description: 'Indice del tab attivo' },
  },
  parameters:{
    docs: {
      description: {
        component: 'Il componente Tabs permette la navigazione a schede, mostrando contenuti separati senza cambiare pagina. Implementa gestione corretta di aria-selected e tabindex, garantendo la navigazione e il focus da tastiera.'
      }
    }
  }
} as Meta<Omit<LitTabsProps, 'container'>>;

const Template: StoryFn<Omit<LitTabsProps, 'container'>> = (args) => {
  const container = document.createElement('div');

  createTabs({
    ...args,
    container,
    tabs: args.tabs.map(tab => ({
      ...tab,
      content: typeof tab.content === 'function' ? tab.content() : tab.content,
    })),
  });

  return container;
};

export const TabDefault = Template.bind({});

TabDefault.args = {
  tabs: [
    { label: 'Prima', content: 'Contenuto della prima tab. Lorem ipsum dolor sit amet.' },
    { label: 'Seconda', content: 'Contenuto della seconda tab. Vivamus luctus urna sed urna.' },
    { label: 'Terza', content: () => html`<p>Contenuto della terza tab dinamica.</p>` },
  ],
  variant: 'default',
  activeTab: 0,
};

export const TabPieno = Template.bind({});
TabPieno.args = {
  ...TabDefault.args,
  variant: 'pieno',
};
