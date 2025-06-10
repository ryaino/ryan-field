import { StorybookConfig } from '@analogjs/storybook-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { UserConfig, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-onboarding', '@storybook/addon-docs'],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: undefined,
      },
    },
  },
};

export async function viteFinal(config: UserConfig) {
  return mergeConfig(config, {
    plugins: [viteTsConfigPaths()],
  });
}

export default config;
