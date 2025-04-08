import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [
    vue(),
    basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Offline App',
        short_name: 'OfflineApp',
        description: 'My offline-first Vue application',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        display: 'standalone',
        start_url: '/'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,woff,woff2}']
      }
    })
  ],
  server: {
    host: true
  }
})
