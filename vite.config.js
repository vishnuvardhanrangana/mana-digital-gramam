import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => {
  // Use '/mana-digital-gramam/' only when explicitly targeting GitHub Pages.
  // Cloudflare Pages (CF_PAGES=1), local dev, and custom domains run at root '/'.
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const base = isGitHubPages ? '/mana-digital-gramam/' : (process.env.VITE_BASE || '/');

  return {
    base,
    plugins: [
      tailwindcss(),
      react(),
    ],
  };
})
