import { Page } from '@playwright/test';
import { MainMenuComponent } from 'src/components/main-menu.component';
import { LoginUserModel } from 'src/models/user.models';
import { BasePage } from 'src/pages/base.page';
import { HomePage } from 'src/pages/home.page';

export class LoginPage extends BasePage {
  url = '/signin';
  mainMenuComponent = new MainMenuComponent(this.page);

  signInText = this.page.getByRole('heading', { name: 'Sign In' });
  userEmailInput = this.page.getByRole('textbox', { name: 'Email address' });
  userPasswordInput = this.page.getByRole('textbox', { name: 'Password' });
  signInBtn = this.page.getByRole('button', { name: 'Sign in' });

  loginErrorMessage = this.page.getByText('Failed to sign in');

  constructor(page: Page) {
    super(page);
  }

  async loginUser(loginUserData: LoginUserModel): Promise<HomePage> {
    await this.userEmailInput.fill(loginUserData.userEmail);
    await this.userPasswordInput.fill(loginUserData.userPassword);
    await this.signInBtn.click();
    return new HomePage(this.page);
  }
}
