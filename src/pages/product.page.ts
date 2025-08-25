import { Locator, Page } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';
import { HomePage } from 'src/pages/home.page';
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

  backToProductsButton = this.page.getByRole('link', {
    name: 'Back to Products',
  });

  productCategoryInfo = this.page
    .locator('.text-gray-600.mb-4.capitalize')
    .filter({ hasText: "men's clothing" });

  productReviewInfo = this.page
    .locator('div')
    .filter({ hasText: /^4\.0 \(1 review\)$/ });

  productPriceInfo = this.page
    .locator('.text-2xl.font-bold.text-blue-600.mb-6')
    .filter({ hasText: '$' });

  productDescriptionInfo = this.page.getByText('Your perfect pack for');

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

  async clickBackToProducts(): Promise<HomePage> {
    await this.backToProductsButton.click();

    return new HomePage(this.page);
  }
}
