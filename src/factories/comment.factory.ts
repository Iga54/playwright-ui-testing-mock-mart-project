import { faker } from '@faker-js/faker/locale/en';
import { CommentModel } from 'src/models/comment.model';

export function prepareNewComment(bodySentence = 5): CommentModel {
  const body = faker.lorem.sentence(bodySentence);

  const newComment: CommentModel = { body: body };

  return newComment;
}
