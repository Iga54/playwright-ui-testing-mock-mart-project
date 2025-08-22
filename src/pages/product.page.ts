import { Locator, Page } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';
import { AddCommentView } from 'src/views/add-comment.view';
import { EditCommentView } from 'src/views/edit-comment.view';

export interface UserComment {
  body: Locator;
}
export class ProductPage extends BasePage {
  url = '/products/1';

  addCommentButton = this.page.getByRole('button', { name: 'Add Comment' });

  productTitle = this.page.getByRole('heading', {
    name: 'Fjallraven - Foldsack No. 1',
  });
  productPrice = this.page.getByText('$');

  addToCartButton = this.page.getByRole('button', { name: 'Add to Cart' });

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
  async clickAddCommentButton(): Promise<AddCommentView> {
    await this.addCommentButton.click();

    return new AddCommentView(this.page);
  }
  async clickEditCommentButton(body: string): Promise<EditCommentView> {
    const commentContainer = this.page
      .locator('.bg-white.p-4.rounded-lg.shadow')
      .filter({ hasText: body });
    await commentContainer.getByRole('button', { name: 'Edit' }).click();

    return new EditCommentView(this.page);
  }
}
