import { expect, test } from '@playwright/test';

test.describe('GET/api/products', () => {
  test('@api-products, should return status code 200 and at least 10 products', async ({
    request,
  }) => {
    //Arrange:
    const expectedStatusCode = 200;
    const expectedQuantityOfProducts = 10;

    //Act:
    const response = await request.get('/api/products');

    const responseBody = await response.json();

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);

    expect(responseBody.length).toBeGreaterThanOrEqual(
      expectedQuantityOfProducts,
    );
  });

  test('@api-products, should return product with given id and status code 200', async ({
    request,
  }) => {
    //Arrange:
    const expectedStatusCode = 200;
    const productId = 6;
    const expectedProductTitle = 'Solid Gold Petite Micropave';

    //Act:
    const response = await request.get(`/api/products/${productId}`);
    const responseBody = await response.json();

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);
    expect(responseBody.title).toContain(expectedProductTitle);
  });

  test('@api-products, should return product from given category status code 200 and at least 3 products', async ({
    request,
  }) => {
    //Arrange:

    const expectedStatusCode = 200;
    const expectedQuantityOfProducts = 3;
    const productCategory = 'electronics';

    //Act:
    const response = await request.get(
      `/api/products?category=${productCategory}`,
    );

    const responseBody = await response.json();

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);
    expect(responseBody.length).toBeGreaterThanOrEqual(
      expectedQuantityOfProducts,
    );
  });

  test('@api-products, should return product searched by name and status code 200', async ({
    request,
  }) => {
    //Arrange:
    const expectedStatusCode = 200;
    const productName = 'Mens Casual T-Shirt';

    //Act:
    const response = await request.get(`/api/products?query=${productName}`);

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);
  });

  // test('@api-products, negative test, should not return product searched by the incorrect price and status code 400', async ({
  //   request,
  // }) => {
  //   //Arrange:
  //   const expectedStatusCode = 400;
  //   const productPrice = '0.03';

  //   //Act:
  //   const response = await request.get(`/api/products?query=${productPrice}`);

  //   //Assert:
  //   expect(response.status()).toBe(expectedStatusCode);
  // });

  test('@api-products, should return products searched by rating and status code 200', async ({
    request,
  }) => {
    //Arrange:
    const expectedStatusCode = 200;
    const productMinRating = '4.0';

    //Act:
    const response = await request.get(
      `/api/products?minRating=${productMinRating}`,
    );

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);
  });

  test('@api-products, should return product searched by price and status code 200', async ({
    request,
  }) => {
    //Arrange:
    const expectedStatusCode = 200;
    const productMinPrice = '10.00';

    //Act:
    const response = await request.get(
      `/api/products?minPrice=${productMinPrice}`,
    );

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);
  });
});
