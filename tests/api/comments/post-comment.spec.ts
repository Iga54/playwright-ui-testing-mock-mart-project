import { expect, test } from '@playwright/test';

test.describe('POST /api/comments', () => {
  test(
    ' should create a comment and status code 200',
    { tag: '@api-comments' },
    async ({ request }) => {
      //Arrange:
      const expectedStatusCode = 200;
      const productId = 2;
      const payload = {
        content: 'This is a great product!',
      };

      //Act:
      const response = await request.post(
        `/api/products/${productId}/comments`,
        {
          data: payload,
        },
      );
      const responseBody = await response.json();

      //Assert:
      expect(response.status()).toBe(expectedStatusCode);
      expect(responseBody.content).toBe(payload.content);
    },
  );
});
