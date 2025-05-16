import { Page } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';

export class ProductPage extends BasePage {
  url = '/products/1';

  addCommentButton = this.page.getByRole('button', { name: 'Add Comment' });

  constructor(page: Page) {
    super(page);
  }
  
}
