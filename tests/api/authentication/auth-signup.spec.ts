import { expect, test } from '@playwright/test';
import { userSignUpData } from 'src/test-data/api-signup-data';

test.describe('POST /api/auth/signup', () => {
  test('should create a new user account and return status code 201', async ({
    request,
  }) => {
    //Arrange:
    const expectedStatusCode = 200;

    const payload = {
      name: userSignUpData.name,
      email: userSignUpData.email,
      password: userSignUpData.password,
    };

    //Act:
    const response = await request.post('/api/auth/signup', { data: payload });

    //Assert:
    expect(response.status()).toBe(expectedStatusCode);

    const responseBody = await response.json();
  });
});
