import { Page } from '@playwright/test';
import { RegisterUserModel } from 'src/models/user.models';
import { BasePage } from 'src/pages/base.page';
import { LoginPage } from 'src/pages/login.page';

export class RegisterPage extends BasePage {
  url = '/signup';

  userNameInput = this.page.getByRole('textbox', { name: 'Full Name' });
  userEmailInput = this.page.getByRole('textbox', { name: 'Email address' });
  userPasswordInput = this.page.getByRole('textbox', {
    name: 'Password',
    exact: true,
  });
  userConfirmPasswordInput = this.page.getByRole('textbox', {
    name: 'Confirm Password',
  });
  registerBtn = this.page.getByRole('button', { name: 'Create account' });

  constructor(page: Page) {
    super(page);
  }

  async registerUser(registerUserData: RegisterUserModel): Promise<LoginPage> {
    await this.userNameInput.fill(registerUserData.userName);
    await this.userEmailInput.fill(registerUserData.userEmail);
    await this.userPasswordInput.fill(registerUserData.userPassword);
    await this.userConfirmPasswordInput.fill(registerUserData.userPassword);
    await this.registerBtn.click();
    return new LoginPage(this.page);
  }
}
