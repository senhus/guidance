import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  appearance: true,
  title: "Senhus Guides",
  description: "House of home automation sensors and custom parts",
  "rewrites": 
  {
    "source": "/(.*)",
    "destination": "/index.html"
  },
  themeConfig: {
    sidebar,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Shop', link: 'https://senhus.dk/shop/' },
      {
        text: 'Sensors',
        items: [
          { text: 'Sigurd Presence Sensor', link: '/sensors/SG-1/' },
          { text: 'Viggo Presence Sensor', link: '/sensors/VG-1/' },
        ],
      }
    ],
     search: {
      provider: 'local'
    },
    docFooter: {
      prev: false,
      next: false,
    },
  }
})
