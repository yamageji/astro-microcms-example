module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  plugins: [
    'prettier-plugin-svelte',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
  pluginSearchDirs: false,
};
