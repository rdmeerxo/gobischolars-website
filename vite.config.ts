import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // project src alias
      '@': path.resolve(__dirname, './src'),

      // keep figma asset aliases (used directly in code)
      'figma:asset/f037c39c6fc591b1ee4a70aa2340f020c1a46251.png': path.resolve(__dirname, './src/assets/f037c39c6fc591b1ee4a70aa2340f020c1a46251.png'),
      'figma:asset/a6835317673bc11aa0edc10c5cfc63dcb0c21d41.png': path.resolve(__dirname, './src/assets/a6835317673bc11aa0edc10c5cfc63dcb0c21d41.png'),
      'figma:asset/9db02477af973eaf86109f11db26e1a8c14eacef.png': path.resolve(__dirname, './src/assets/9db02477af973eaf86109f11db26e1a8c14eacef.png'),
      'figma:asset/9a583b505c413772ffa9024d8da637e35cecaec6.png': path.resolve(__dirname, './src/assets/9a583b505c413772ffa9024d8da637e35cecaec6.png'),
      'figma:asset/96ab770ecb78e8039bd90f51b46d043141e3227f.png': path.resolve(__dirname, './src/assets/96ab770ecb78e8039bd90f51b46d043141e3227f.png'),
      'figma:asset/911b2cbfc6ae9b6ed05853bc49eca9558c0ea4ec.png': path.resolve(__dirname, './src/assets/911b2cbfc6ae9b6ed05853bc49eca9558c0ea4ec.png'),
      'figma:asset/8256fc6859d9abecf7a96b46f0ff3e2798507dd9.png': path.resolve(__dirname, './src/assets/8256fc6859d9abecf7a96b46f0ff3e2798507dd9.png'),
      'figma:asset/6402ebbb2d4b17155656f30c0c6b0603110336b6.png': path.resolve(__dirname, './src/assets/6402ebbb2d4b17155656f30c0c6b0603110336b6.png'),
      'figma:asset/5c4da41f8c97e4721bb55c24bec6e6974f35f81e.png': path.resolve(__dirname, './src/assets/5c4da41f8c97e4721bb55c24bec6e6974f35f81e.png'),
      'figma:asset/33142a3b533a7c91b14daf2a59d975e0e52e7752.png': path.resolve(__dirname, './src/assets/33142a3b533a7c91b14daf2a59d975e0e52e7752.png'),
      'figma:asset/2a20426845a9f839d5cc9cec36353d4b9eaca1a2.png': path.resolve(__dirname, './src/assets/2a20426845a9f839d5cc9cec36353d4b9eaca1a2.png'),
      'figma:asset/246cab81a31dab1f2cd891a02bb6a19c7df86e1f.png': path.resolve(__dirname, './src/assets/246cab81a31dab1f2cd891a02bb6a19c7df86e1f.png'),
      'figma:asset/09e52ed45bdc8bf9aac1d0e6a07b3cf9f1938ede.png': path.resolve(__dirname, './src/assets/09e52ed45bdc8bf9aac1d0e6a07b3cf9f1938ede.png'),

      // keep any other explicit, meaningful aliases here (avoid version-tagged keys)
    },
  },

  // pre-bundle commonly used libs to stabilize dev server and editor tooling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'clsx',
      'tailwind-merge',
      'recharts',
      'lucide-react'
    ],
  },

  build: {
    target: 'esnext',
    outDir: 'docs',
  },
  server: {
    port: 3000,
    open: true,
  },
});
