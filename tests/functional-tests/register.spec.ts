import { expect, test } from '@playwright/test';
import { createRandomUser } from 'src/factories/user.factory';
import { RegisterUserModel } from 'src/models/user.models';
import { RegisterPage } from 'src/pages/register.page';

test.describe('verification of user registration', async () => {
  let registerPage: RegisterPage;
  let registerUserData: RegisterUserModel;
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  test('user can register with correct data', async ({ page }) => {
    //Act:
    registerUserData = createRandomUser();
    const loginPage = await registerPage.registerUser(registerUserData);
    await loginPage.waitForPageToLoadUrl();

    //Assert:
    expect(loginPage.signInText).toBeVisible();
  });
  test('user can not register - empty email', async ({ page }) => {
    //Act:
    registerUserData = createRandomUser();
    registerUserData.userEmail = '';
    const loginPage = await registerPage.registerUser(registerUserData);
    await loginPage.waitForPageToLoadUrl();

    //Assert:
    expect(loginPage.signInText).toBeVisible();
  });
});
