import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
  base: './', // This sets the base path for all generated URLs to './'
  // Other configuration options...
  plugins: [vanillaExtractPlugin()],
};
