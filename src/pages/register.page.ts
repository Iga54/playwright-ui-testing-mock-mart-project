import { Page } from '@playwright/test';
import { MainMenuComponent } from 'src/components/main-menu.component';
import { RegisterUserModel } from 'src/models/user.models';
import { BasePage } from 'src/pages/base.page';
import { LoginPage } from 'src/pages/login.page';

export class RegisterPage extends BasePage {
  url = '/signup';
  mainMenu = new MainMenuComponent(this.page);

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
  signUpText = this.page.getByRole('heading', { name: 'Create an Account' });

  errorPasswordMismatchMessage = this.page.getByText('Passwords do not match');
  errorPasswordTooShortMessage = this.page.getByText(
    'Password must be at least 6',
  );
  errorPasswordTooLongMessage = this.page.getByText('Passwords do not match');
  errorPasswordEmojis = this.page.getByText('Name must not contain emojis');

  constructor(page: Page) {
    super(page);
  }

  async registerUser(registerUserData: RegisterUserModel): Promise<LoginPage> {
    await this.userNameInput.fill(registerUserData.userName);
    await this.userEmailInput.fill(registerUserData.userEmail);
    await this.userPasswordInput.fill(registerUserData.userPassword);
    await this.userConfirmPasswordInput.fill(
      registerUserData.userConfirmPassword,
    );
    await this.registerBtn.click();
    return new LoginPage(this.page);
  }
}
