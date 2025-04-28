import path from "path";
import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/manager-api",
    "@storybook/addon-mdx-gfm"
  ],

  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
 
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
    });
  },

  docs: {
    autodocs: true
  }
};
export default config;