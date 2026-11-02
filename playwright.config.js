import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests/LearnPlaywright',
  timeout :30*1000,
  expect : {
    timeout: 5*1000,
  },
  use: {
  browserName: 'chromium',
  },

});

