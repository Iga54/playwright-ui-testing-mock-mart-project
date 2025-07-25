import { expect, test } from '@playwright/test';
import { HomePage } from 'src/pages/home.page';
import { LoginPage } from 'src/pages/login.page';
import { RegisterPage } from 'src/pages/register.page';
import { testUser1 } from 'src/test-data/user-login-data';

test.describe('checking the navigation menu functionalities from home page without logging', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('products link navigates to products page from home page', async ({}) => {
    //Arrange:
    const expectedProductsText = 'All Products';

    //Act:
    const productsPage = await homePage.mainMenu.goToProductsPage();

    //Assert:
    await expect(productsPage.productsPageHeader).toHaveText(
      expectedProductsText,
    );
  });

  test('categories link navigates to categories page from home page', async ({}) => {
    //Arrange:
    const expectedCategoriesText = 'Categories';

    //Act:
    const categoriesPage = await homePage.mainMenu.goToCategoriesPage();

    //Assert:
    await expect(categoriesPage.categoriesText).toHaveText(
      expectedCategoriesText,
    );
  });

  test('sign in link navigates to login page from home page', async ({}) => {
    //Act:
    const loginPage = await homePage.mainMenu.goToLoginPage();

    //Assert:
    await expect(loginPage.signInText).toBeVisible();
  });

  test('sign up link navigates to register page from home page', async ({}) => {
    //Act:
    const registerPage = await homePage.mainMenu.goToRegisterPage();

    //Assert:
    await expect(registerPage.signUpText).toBeVisible();
  });
});

test.describe('checking the navigation menu functionalities from register page to home page without logging', async () => {
  let registerPage: RegisterPage;
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  test('site logo navigates back to home page from register page', async ({}) => {
    //Arrange:
    const expectedHomePageText = 'Welcome to MockMart';

    //Act:
    const homePage = await registerPage.mainMenu.goToHomePageLogo();

    //Assert:
    await expect(homePage.homePageText).toHaveText(expectedHomePageText);
  });

  test('home page link navigates back to home page from register page', async ({}) => {
    //Arrange:
    const expectedHomePageText = 'Welcome to MockMart';

    //Act:
    const homePage = await registerPage.mainMenu.goToHomePageLink();

    //Assert:
    await expect(homePage.homePageText).toHaveText(expectedHomePageText);
  });
});

test.describe('checking the navigation menu functionalities - logging out from navigation menu', async () => {
  let loginPage: LoginPage;
  test('user can sign out', async ({ page }) => {
    //Arrange:
    loginPage = new LoginPage(page);
    await loginPage.goto();
    const homePage = await loginPage.loginUser(testUser1);

    //Act:
    await homePage.mainMenu.signOutLink.click();

    //Assert:
    await expect(homePage.mainMenu.signInLink).toBeVisible();
  });
});
