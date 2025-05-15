import { expect, test } from '@playwright/test';
import { BASE_URL } from 'config/env.config';

test.describe('checking basic UI functionalities', async () => {
  test('home page loads', async ({ page }) => {
    //Act:
    await page.goto(BASE_URL);

    //Assert:
    await expect(page).toHaveURL(BASE_URL);
  });

  test('nonexistent route shows 404', async ({ page }) => {
    //Act:
    await page.goto('http://localhost:3000/2');

    //Assert:
    await expect(
      page.getByRole('heading', { name: 'This page could not be found.' }),
    ).toBeVisible();
  });

  test('footer is visible on the page', async ({ page }) => {
    //Act:
    await page.goto(BASE_URL);

    //Assert:
    await expect(page.getByText('© 2025 MockMart. All rights')).toBeVisible();
  });

  test('site logo is visible on the page', async ({ page }) => {
    //Act:
    await page.goto(BASE_URL);

    //Assert:
    await expect(page.getByRole('link', { name: 'Mock Mart' })).toBeVisible();
  });

  test('search field is visible on the page', async ({ page }) => {
    //Act:
    await page.goto(BASE_URL);

    //Assert:
    await expect(
      page.getByRole('textbox', { name: 'Search products...' }),
    ).toBeVisible();
  });

  test('navigation menu is visible on the page', async ({ page }) => {
    //Act:
    await page.goto(BASE_URL);

    //Assert:
    await expect(
      page.getByText('Mock MartProductsCategoriesSign InSign UpOpen main menu'),
    ).toBeVisible();
  });
});
