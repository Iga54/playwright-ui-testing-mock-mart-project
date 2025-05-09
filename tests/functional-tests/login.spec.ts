import { expect, test } from '@playwright/test';
import { LoginPage } from 'src/pages/login.page';
import { testUser1 } from 'src/test-data/user-login-data';

test.describe('login verification', async () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('user can login with correct data', async ({ page }) => {
    //Arrange:

    //Act:
    const homePage = await loginPage.loginUser(testUser1);

    //Assert:
    expect(homePage.mainMenuComponent.userGreeting).toBeVisible();
  });

  test('user can not login with incorrect email', async ({ page }) => {
    //Arrange:
    const expectedErrorMessage = 'Failed to sign in';
    testUser1.userEmail = 'test23@22.com';

    //Act:
    await loginPage.loginUser(testUser1);

    //Assert:
    expect(loginPage.loginErrorMessage).toHaveText(expectedErrorMessage);
  });

  test('user can not login with incorrect password', async ({ page }) => {
    //Arrange:
    const expectedErrorMessage = 'Failed to sign in';
    testUser1.userPassword = 'test23';

    //Act:
    await loginPage.loginUser(testUser1);

    //Assert:
    expect(loginPage.loginErrorMessage).toHaveText(expectedErrorMessage);
  });
});
