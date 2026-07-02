/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const optionalPeerDependencies = ['echarts', 'katex', 'mermaid'];

const externalizePeerDependencies = (id: string) => {
  if (optionalPeerDependencies.includes(id)) return true;
  return id === 'highlight.js' || id.startsWith('highlight.js/lib/');
};

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.VITE_NODE_ENV || 'production'),
  },
  build: {
    target: 'esnext',
    lib: {
      entry: {
        index: path.resolve(dirname, 'src/index.ts'),
        'plugin/code-highlight': path.resolve(dirname, 'src/plugin/code-highlight/index.ts'),
        'plugin/katex': path.resolve(dirname, 'src/plugin/katex/index.ts'),
        'plugin/echarts': path.resolve(dirname, 'src/plugin/echarts/index.ts'),
        'plugin/think': path.resolve(dirname, 'src/plugin/think/index.ts'),
        'plugin/svg': path.resolve(dirname, 'src/plugin/svg/index.ts'),
        'plugin/mermaid': path.resolve(dirname, 'src/plugin/mermaid/index.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => (entryName === 'index' ? 'index.js' : `${entryName}/index.js`),
    },
    rollupOptions: {
      external: externalizePeerDependencies,
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});
