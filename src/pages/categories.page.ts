import { Page } from '@playwright/test';
import { MainMenuComponent } from 'src/components/main-menu.component';
import { BasePage } from 'src/pages/base.page';

export class CategoriesPage extends BasePage {
  url = '/categories';
  mainMenu = new MainMenuComponent(this.page);

  categoriesText = this.page.getByRole('heading', { name: 'Categories' });

  constructor(page: Page) {
    super(page);
  }
}
