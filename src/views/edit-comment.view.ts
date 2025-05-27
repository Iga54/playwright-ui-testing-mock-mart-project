import { Locator, Page } from '@playwright/test';
import { CommentModel } from 'src/models/comment.model';

export class EditCommentView {
  bodyInput: Locator;
  updateCommentButton: Locator;
  editCommentViewTitle: Locator;

  constructor(private page: Page) {
    this.bodyInput = this.page.getByRole('textbox', { name: 'Your comment' });
    // this.bodyInput = this.page.getByPlaceholder('Your comment');

    this.updateCommentButton = this.page.getByRole('button', {
      name: 'Update Comment',
    });
    this.editCommentViewTitle = this.page.getByRole('heading', {
      name: 'Edit Comment',
    });
  }

  async editComment(commentData: CommentModel): Promise<void> {
    await this.bodyInput.fill(commentData.body);
    await this.updateCommentButton.click();
  }
}
