/* eslint-disable @typescript-eslint/no-var-requires */
let skeleton = require("path").join(
  require.resolve(
    "@skeletonlabs/skeleton",
  ),
  "../**/*.{html,js,svelte,ts}",
);

/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    skeleton,
  ],

  theme: {
    extend: {},
  },

  plugins: [
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ],
};

module.exports = config;
