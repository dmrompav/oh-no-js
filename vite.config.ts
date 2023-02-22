import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': p('src'),
    }
  }
});

function p(str) {
  return path.resolve(path.dirname('./'), str);
}
