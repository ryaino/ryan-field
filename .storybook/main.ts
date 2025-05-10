import type { StorybookConfig } from '@analogjs/storybook-angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  "framework": {
    "name": "@analogjs/storybook-angular",
    "options": {}
  }
};
export default config;