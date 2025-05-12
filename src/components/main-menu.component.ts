import { Locator, Page } from '@playwright/test';

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
}
