import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // 相对路径 base：使产物可部署到任意子路径（如资料库 page 的 /page/{id}/{version}/ 下）
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['posters/*.jpg', 'posters/*.png', 'exercises/*.png', 'effects/*.png', 'muscles/*.png', 'icons/icon.svg'],
      manifest: {
        name: '稳举',
        short_name: '稳举',
        description: '把喜欢的人稳稳举起来 · 本地健身清单',
        theme_color: '#12081a',
        background_color: '#12081a',
        display: 'standalone',
        lang: 'zh-CN',
        start_url: './',
        icons: [
          {
            src: 'icons/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
})
