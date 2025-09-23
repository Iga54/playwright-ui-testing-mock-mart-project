import { expect, test as setup } from '@playwright/test';
import { STORAGE_STATE } from 'playwright.config';
import { LoginPage } from 'src/pages/login.page';
import { testUser1 } from 'src/test-data/user-login-data';

setup('login and save session', async ({ page }) => {
  //Arrange:
  const expectedGreeting = 'Welcome to MockMart';
  const loginPage = new LoginPage(page);

  //Act:
  await loginPage.goto();
  const homePage = await loginPage.loginUser(testUser1);

  //Assert:
  await expect(homePage.homePageText).toHaveText(expectedGreeting);

  await page.context().storageState({ path: STORAGE_STATE });
});
