import { Locator, Page } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';

interface UserComment {
  body: Locator;
}
export class ProductPage extends BasePage {
  url = '/products/1';

  addCommentButton = this.page.getByRole('button', { name: 'Add Comment' });
  jewelryCategoryButton = this.page.getByRole('button', { name: 'jewelery' });

  productTitle = this.page.getByRole('heading', {
    name: 'Fjallraven - Foldsack No. 1',
  });
  productPrice = this.page.getByText('$');

  constructor(page: Page) {
    super(page);
  }

  async getProductComment(body: string): Promise<UserComment> {
    const commentContainer = this.page
      .locator('.text-gray-700')
      .filter({ hasText: body });

    return {
      body: commentContainer,
    };
  }
  async clickEditCommentButton(body: string) {
    // await this.page.reload();
    // const comment = await this.page.getByText(body);
    await this.page.reload({ waitUntil: 'domcontentloaded' });
    await this.page
      .getByText(body)
      .getByRole('button', { name: 'Edit' })
      .click();

    // .locator('.bg-white.p-4.rounded-lg.shadow')
    // .filter({
    //   hasText: body,
    // })
    // .getByRole('button', { name: 'Edit' })
    // .click();
  }
}
