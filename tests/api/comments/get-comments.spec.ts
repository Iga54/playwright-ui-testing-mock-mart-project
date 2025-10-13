import test, { expect } from '@playwright/test';

test.describe('GET /api/comments', () => {
  test('should return comment assigned to concrete product and status code 200', async ({
    request,
  }) => {
    //Arrange:
    const expectedStatusCode = 200;
    const productId = 1;

    //Act:
    const response = await request.get(`/api/products/${productId}/comments`);
    const responseBody = await response.json();

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);
    expect(responseBody[0].content).toContain(
      'Amaritudo solvo ex repellat studio.',
    );
  });
});
