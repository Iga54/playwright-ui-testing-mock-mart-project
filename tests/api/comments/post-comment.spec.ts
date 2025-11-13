import { expect, test } from '@playwright/test';
import { faker } from 'node_modules/@faker-js/faker/dist/locale/en.cjs';

test.describe('POST /api/comments', () => {
  test(
    ' should create a comment and status code 200',
    { tag: '@api-comments' },
    async ({ request }) => {
      //Arrange:
      const expectedStatusCode = 200;
      const productId = 2;
      const payload = {
        content: faker.lorem.sentence(),
      };

      //Act:
      const response = await request.post(
        `/api/products/${productId}/comments`,
        {
          data: payload,
        },
      );

      const createdCommentsResponse = await request.get(
        `/api/products/${productId}/comments`,
      );
      const createdComments = await createdCommentsResponse.json();

      //Assert:
      expect(response.status()).toBe(expectedStatusCode);
      expect(createdComments[0].content).toBe(payload.content);
    },
  );
});
