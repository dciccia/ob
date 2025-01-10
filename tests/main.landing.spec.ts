import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.onebrief.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Onebrief | Home/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.onebrief.com/');

  // Click the get started button.
  await page.locator(".nav_cta-wrap").click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Get Started | Onebrief/);

  //Expect URL to contain page path
  await expect(page).toHaveURL(/get-started/);

  //Expect page to have some text
  await expect(page.getByText("Getting started shouldn’t be complex.")).toBeVisible();
});