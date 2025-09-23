import { expect, test } from '@playwright/test';
import { ProductsPage } from 'src/pages/products.page';

test.describe('smoke: not logged in user can view and interact with functions on the product page', () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await productsPage.goto();
  });

  test('user is able to click in product', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();

    //Assert:
    await expect(productPage.productTitle).toBeVisible();
  });

  test('add to cart button is visible and clickable', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();

    //Assert:
    await expect(productPage.addToCartButton).toBeVisible();
    await productPage.addToCartButton.click();
  });

  test('add comment button is visible and clickable', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();

    //Assert:
    await expect(productPage.addCommentButton).toBeVisible();
    await productPage.addCommentButton.click();
  });

  test('user can back to products from product page', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();
    const homePage = await productPage.clickBackToProducts();
    //Assert:
    await expect(homePage.homePageText).toBeVisible();
  });

  test('user is able to view category of the product', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();
    //Assert:
    await expect(productPage.productCategoryInfo).toBeVisible();
  });

  test('user can view the product review', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();
    //Assert:
    await expect(productPage.productReviewInfo).toBeVisible();
  });

  test('user is able to view price of the product', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();
    //Assert:
    await expect(productPage.productPriceInfo).toBeVisible();
  });

  test('user is able to view description of the product', async ({}) => {
    //Act:
    const productPage = await productsPage.pickOneProduct();
    //Assert:
    await expect(productPage.productDescriptionInfo).toBeVisible();
  });
});
