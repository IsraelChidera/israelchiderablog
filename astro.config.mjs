import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://israelchidera.netlify.app/',
  trailingSlash: 'ignore',
  redirects: {
    // The About page now lives on the homepage.
    '/about': '/#about',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/about/'),
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
});
