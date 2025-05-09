import { Page } from '@playwright/test';
import { MainMenuComponent } from 'src/components/main-menu.component';
import { BasePage } from 'src/pages/base.page';

export class HomePage extends BasePage {
  mainMenuComponent = new MainMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }
}
