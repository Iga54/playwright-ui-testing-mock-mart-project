// auth.setup.ts
import { expect, test as setup } from '@playwright/test';
import { userSignUpData } from 'src/test-data/api-signup-data';

setup('authenticates a user and creates a session', async ({ request }) => {
  // Arrange:
  const expectedStatusCode = 200;

  //Act:
  const response = await request.post('/api/auth/signin', {
    data: {
      email: userSignUpData.email,
      password: userSignUpData.password,
    },
  });

  //Assert:
  expect(response.status()).toBe(expectedStatusCode);

  await request.storageState({ path: 'tmp/auth.json' });
});
