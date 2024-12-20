// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://jens599.github.io',
  base: 'jlc-astro',
  integrations: [tailwind(), icon()],
  vite: {
    define: {
      'import.meta.env.BASE_PATH': JSON.stringify('/jlc-astro'),
    },
  },
  // devToolbar: {
  //   enabled: true,
  // },
})
