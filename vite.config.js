import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // <-- Importez le plugin

export default defineConfig({
    base: '/',
    plugins: [
        react(),
        svgr({
            exportAsDefault: true,
            svgrOptions: {
                icon: true,
            },
        }),
        nodePolyfills(), // <-- Ajoutez le plugin ici
    ],
});