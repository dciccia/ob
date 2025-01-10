import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto('https://onebrief.com/');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Onebrief | Home/);
});

test('get started link', async ({ page }) => {
  // Click the get started button.
  await page.locator(".nav_cta-wrap").click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Get Started | Onebrief/);

  //Expect URL to contain page path
  await expect(page).toHaveURL(/get-started/);

  //Expect page to have some text
  await expect(page.getByText("Getting started shouldn’t be complex.")).toBeVisible();
});

test('see the platform', async ({ page }) => {
  //Click see the platform button
  await page.getByText("See the Platform").click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Platform | Onebrief/);

  //Expect URL to contain page path
  await expect(page).toHaveURL(/platform/);

  //Expect page to have some text
  await expect(page.getByText("Before we built Onebrief, we lived your problems.")).toBeVisible();
});