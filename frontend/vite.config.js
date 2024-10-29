import { defineConfig } from 'vite';
import polyfillNode from 'rollup-plugin-polyfill-node';

export default defineConfig({
    plugins: [],
    resolve: {
        alias: {
            global: 'globalThis',  // Use globalThis as a stand-in for global
        },
    },
    define: {
        global: 'globalThis',
        'process.env': {}  // Define an empty process.env object
    },
    build: {
        rollupOptions: {
            plugins: [polyfillNode()],
        },
    },
    optimizeDeps: {
        include: ['buffer', 'process'],
    },
});
