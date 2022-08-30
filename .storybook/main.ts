module.exports = {
  stories: ['../src/components/**/*.stories.ts', '../src/views/**/*.stories.ts'],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  "framework": "@storybook/vue3"
}