import { Locator, Page } from '@playwright/test';
import { CommentModel } from 'src/models/comment.model';
import { ProductPage } from 'src/pages/product.page';

export class AddCommentView {
  bodyInput: Locator;
  postCommentButton: Locator;
  addCommentViewTitle: Locator;

  constructor(private page: Page) {
    this.bodyInput = this.page.getByRole('textbox', {
      name: 'Write your comment here...',
    });
    this.postCommentButton = this.page.getByRole('button', {
      name: 'Post Comment',
    });
    this.addCommentViewTitle = this.page.getByRole('heading', {
      name: 'Add a Comment',
    });
  }

  async createComment(commentData: CommentModel): Promise<ProductPage> {
    await this.bodyInput.fill(commentData.body);
    await this.postCommentButton.click();

    return new ProductPage(this.page);
  }
}
