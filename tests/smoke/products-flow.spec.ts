import { expect, test } from '@playwright/test';
import { ProductsPage } from 'src/pages/products.page';

test.describe('smoke: user can view and interact with functions on products page', () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await productsPage.goto();
  });
  test('products page loads', async ({ page }) => {
    //Assert:
    await expect(productsPage.productsPageHeader).toBeVisible();
  });

  test('products page shows products', async ({ page }) => {
    //Assert:
    await expect(productsPage.productsPageHeader).toBeVisible();
  });

  test('user is able to click in product', async ({ page }) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();

    //Assert:
    await expect(productPage.productTitle).toBeVisible();
  });

  test('add to cart button is visible and clickable', async ({ page }) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();

    //Assert:
    await expect(productPage.addToCartButton).toBeVisible();
    await productPage.addToCartButton.click();
  });

  test('add comment button is visible and clickable', async ({ page }) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();

    //Assert:
    await expect(productPage.addCommentButton).toBeVisible();
    await productPage.addCommentButton.click();
  });
});
