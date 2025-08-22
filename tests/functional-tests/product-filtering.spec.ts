import { expect, test } from '@playwright/test';
import { ProductsPage } from 'src/pages/products.page';

test.describe('checking the product filtering functionalities', () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    productsPage.goto();
  });

  test('user can filter by every category', async ({ page }) => {
    //Arrange:
    const categories = productsPage.categoryButtons;

    //Act:
    for (const category of categories) {
      await category.button.click();

      const cardsNames = await productsPage.categoryInCard.allTextContents();

      for (const cardsName of cardsNames) {
        const textInCard = cardsName.toLowerCase().trim();
        //Assert:
        expect(textInCard).toContain(category.label);
      }
    }
  });

  test.describe('user can filter by product rating', () => {
    test('user can filter by the rating of product', async ({}) => {
      //Arrange:
      const ratings = productsPage.productsRatings;
      const ratingInCard = productsPage.ratingInCard;

      const ratingResults = await ratingInCard.allTextContents();

      //Act:
      for (const rating of ratings) {
        await rating.button.click();

        for (const ratingResult of ratingResults) {
          //Assert:
        }
      }
    });
  });

  test.describe('user can filter by the price of the product', () => {
    test('user can filter by the price of the product', async ({ page }) => {
      //Arrange:
      const priceLocator = productsPage.priceOfProductInCard;
      const priceRanges = productsPage.priceButtons;

      for (const priceRange of priceRanges) {
        //Act:
        await priceRange.button.click();
        await page.waitForTimeout(3000);

        const allPrices = await priceLocator.allTextContents();

        for (const price of allPrices) {
          const value = parseFloat(price.replace('$', '').trim());

          //Assert:
          expect(value).toBeGreaterThanOrEqual(priceRange.min);
          expect(value).toBeLessThan(priceRange.max);
        }
      }
    });
  });
});
