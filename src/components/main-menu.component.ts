import { Locator, Page } from '@playwright/test';
import { CategoriesPage } from 'src/pages/categories.page';
import { HomePage } from 'src/pages/home.page';
import { LoginPage } from 'src/pages/login.page';
import { RegisterPage } from 'src/pages/register.page';

export class MainMenuComponent {
  siteLogo: Locator;
  productsLink: Locator;
  categoriesLink: Locator;
  userGreeting: Locator;
  logoutButton: Locator;
  signInLink: Locator;
  signUpLink: Locator;

  constructor(private page: Page) {
    this.siteLogo = this.page.getByRole('link', { name: 'Mock Mart' });
    this.productsLink = this.page.getByRole('link', { name: 'Products' });
    this.categoriesLink = this.page.getByRole('link', { name: 'Categories' });
    this.userGreeting = this.page.getByText('Hello, John!');
    this.logoutButton = this.page.getByRole('button', { name: 'Sign Out' });
    this.signInLink = this.page.getByRole('link', { name: 'Sign In' });
    this.signUpLink = this.page.getByRole('link', { name: 'Sign Up' });
  }
  async goToLoginPage() {
    await this.signInLink.click();

    return new LoginPage(this.page);
  }

  async goToRegisterPage() {
    await this.signUpLink.click();

    return new RegisterPage(this.page);
  }

  async goToHomePage() {
    await this.siteLogo.click();

    return new HomePage(this.page);
  }

  async goToCategoriesPage() {
    await this.categoriesLink.click();

    return new CategoriesPage(this.page);
  }
}
