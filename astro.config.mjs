import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import partytown from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://israelchidera.netlify.app/',
  integrations: [react(), 
    sitemap(),
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