import { Page } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';

export class LoginPage extends BasePage {
  url = '/signin';

  // loginError = this.page.getByTestId('login-error');

  signInText = this.page.getByRole('heading', { name: 'Sign In' });

  constructor(page: Page) {
    super(page);
  }

  // async loginUser(loginUserData: LoginUserModel): Promise<WelcomePage> {
  //   await this.userEmailInput.fill(loginUserData.userEmail);
  //   await this.userPasswordInput.fill(loginUserData.userPassword);
  //   await this.loginButton.click();
  // }
}
