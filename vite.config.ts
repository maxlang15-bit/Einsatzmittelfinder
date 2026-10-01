import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubProjectSite =
  process.env.GITHUB_ACTIONS === 'true' && repository !== `${owner}.github.io`;
const base = isGitHubProjectSite && repository ? `/${repository}/` : '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Einsatzmittel-Finder',
        short_name: 'Einsatzmittel',
        description: 'Lokaler Ressourcenfinder – fiktiver Prototyp',
        lang: 'de',
        theme_color: '#142c44',
        background_color: '#f3f6f9',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          { src: `${base}icon-192.png`, sizes: '192x192', type: 'image/png' },
          { src: `${base}icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any' },
        ],
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,png}'] },
    }),
  ],
});
