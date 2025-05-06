import { test } from '@playwright/test';
import { LoginPage } from 'src/pages/login.page';

test.describe('login verification', async () => {
  test('user can login with correct data', async ({ page }) => {
    //Arrange:
    const loginPange = new LoginPage(page);

    //Act:
    await loginPange.goto();
    
    //Assert:
  });
});
