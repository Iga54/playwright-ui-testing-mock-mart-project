import { expect, test } from '@playwright/test';
import { prepareNewComment } from 'src/factories/comment.factory';
import { HomePage } from 'src/pages/home.page';
import { LoginPage } from 'src/pages/login.page';
import { ProductPage } from 'src/pages/product.page';
import { ProductsPage } from 'src/pages/products.page';
import { testUser1 } from 'src/test-data/user-login-data';

test.describe('user can create, verify and update comment', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;
  let productsPage: ProductsPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test(
    'operates on comments',
    {
      tag: '@logged',
    },
    async () => {
      const newCommentData = prepareNewComment();

      await test.step('create comment', async () => {
        //Act:
        homePage = await loginPage.loginUser(testUser1);

        productsPage = await homePage.exploreProductsPage();

        productPage = await productsPage.pickOneProduct();

        const addCommentView = await productPage.clickAddCommentButton();

        //Assert:
        await expect
          .soft(addCommentView.addCommentViewTitle)
          .toHaveText('Add a Comment');

        await addCommentView.createComment(newCommentData);
      });

      await test.step('verify created comment', async () => {
        //Act:
        const userComment = await productPage.getProductComment(
          newCommentData.body,
        );

        //Assert:
        await expect(userComment.body).toHaveText(newCommentData.body);
      });

      await test.step('update created comment', async () => {
        //Act:

        const editCommentView = await productPage.clickEditCommentButton(
          newCommentData.body,
        );

        await editCommentView.updateComment(newCommentData);

        //Assert:
        await expect
          .soft(editCommentView.editCommentViewTitle)
          .toHaveText('Edit Comment');
      });
    },
  );
});
