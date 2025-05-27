import { Page } from '@playwright/test';
import { MainMenuComponent } from 'src/components/main-menu.component';
import { BasePage } from 'src/pages/base.page';
import { ProductsPage } from 'src/pages/products.page';

export class HomePage extends BasePage {
  url = '/';
  mainMenu = new MainMenuComponent(this.page);

  homePageText = this.page.getByRole('heading', {
    name: 'Welcome to MockMart',
  });

  homePageExploreButton = this.page.getByRole('button', {
    name: 'Explore Our Collection',
  });

  constructor(page: Page) {
    super(page);
  }

  async exploreProductsPage() {
    this.homePageExploreButton.click();

    return new ProductsPage(this.page);
  }
}
