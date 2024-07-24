import codspeedPlugin from '@codspeed/vitest-plugin';
import react from '@vitejs/plugin-react';
import type { } from "@vitest/browser/providers/playwright";
import { defineConfig } from 'vitest/config';
import 'vitest/node';

const timeout = 120000;

export default defineConfig({
  plugins: [codspeedPlugin(), react()],
  test: {
    environment: 'jsdom',
    testTimeout: timeout,
    hookTimeout: timeout,
    teardownTimeout: timeout,
    benchmark: {
      outputJson: 'test-results/benchmark-charts.json',
    },
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      providerOptions: {
        launch: {
          timeout: timeout,
        },
        context: {}
      },
    },
  },
});
