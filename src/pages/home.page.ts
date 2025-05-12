import { Page } from '@playwright/test';
import { MainMenuComponent } from 'src/components/main-menu.component';
import { BasePage } from 'src/pages/base.page';
import { LoginPage } from 'src/pages/login.page';
import { RegisterPage } from 'src/pages/register.page';

export class HomePage extends BasePage {
  url = '/';
  mainMenuComponent = new MainMenuComponent(this.page);

  homePageText = this.page.getByRole('heading', {
    name: 'Featured Products',
  });

  constructor(page: Page) {
    super(page);
  }

  async goToLoginPage() {
    await this.mainMenuComponent.signInLink.click();

    return new LoginPage(this.page);
  }

  async goToRegisterPage() {
    await this.mainMenuComponent.signUpLink.click();

    return new RegisterPage(this.page);
  }
}
