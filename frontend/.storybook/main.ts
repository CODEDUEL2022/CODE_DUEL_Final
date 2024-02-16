import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    const newConfig = { ...config };
    if (newConfig.resolve) {
      newConfig.resolve.alias = {
        ...newConfig.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };

      newConfig.resolve.plugins = [...(newConfig.resolve.plugins || []), new TsConfigPathsPlugin()];
    }
    return newConfig;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
