import { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

  // ...
  framework: '@storybook/vue3-vite', // 👈 Add this
};

export default config;