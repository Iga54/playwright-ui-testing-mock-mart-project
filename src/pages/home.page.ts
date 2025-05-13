import { Page } from '@playwright/test';
import { MainMenuComponent } from 'src/components/main-menu.component';
import { BasePage } from 'src/pages/base.page';

export class HomePage extends BasePage {
  url = '/';
  mainMenu = new MainMenuComponent(this.page);

  homePageText = this.page.getByRole('heading', {
    name: 'Featured Products',
  });

  constructor(page: Page) {
    super(page);
  }
}
