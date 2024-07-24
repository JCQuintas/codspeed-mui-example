import codspeedPlugin from '@codspeed/vitest-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [codspeedPlugin(), react()],
  test: {
    environment: 'jsdom',
    testTimeout: 60000,
    benchmark: {
      outputJson: 'test-results/benchmark-charts.json',
    },
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      providerOptions: {
        timeout: 60000,
      },
    },
  },
});
