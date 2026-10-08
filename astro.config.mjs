import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ronazpradhan.com.np',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  // No integrations: the sitemap is a 20-line endpoint, not a dependency.
});
