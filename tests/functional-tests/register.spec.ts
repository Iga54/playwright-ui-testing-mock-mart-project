import { expect, test } from '@playwright/test';
import { createRandomUser } from 'src/factories/user.factory';
import { RegisterUserModel } from 'src/models/user.models';
import { RegisterPage } from 'src/pages/register.page';

test.describe('verification of user registration', () => {
  let registerPage: RegisterPage;
  let registerUserData: RegisterUserModel;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
    registerUserData = createRandomUser();
  });

  test('happy path - user can register with correct data', async ({ page }) => {
    //Act:
    const loginPage = await registerPage.registerUser(registerUserData);

    //Assert:
    await expect(loginPage.signInText).toBeVisible();
  });

  test('negative path - user can not register with empty email', async ({}) => {
    //Arrange:
    const expectedErrorText = 'Please fill in this field.';
    registerUserData.userEmail = '';
    const emailInput = registerPage.userEmailInput;
    const errorEmailMessage = await emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage,
    );

    //Act:
    await registerPage.registerUser(registerUserData);

    //Assert:
    expect(errorEmailMessage).toBe(expectedErrorText);
  });

  test('negative path - user can not register with incorrect email form', async ({}) => {
    //Arrange:
    const expectedErrorText = 'Please fill in this field.';
    registerUserData.userEmail = 'test2.com';
    const emailInput = registerPage.userEmailInput;
    const errorEmailMessage = await emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage,
    );

    ///Act:
    await registerPage.registerUser(registerUserData);

    //Assert:
    expect(errorEmailMessage).toBe(expectedErrorText);
  });

  test('negative path - user can not register with inconsistent passwords', async ({}) => {
    //Arrange:
    const expectedErrorText = 'Passwords do not match';
    registerUserData.userPassword = '111111';

    //Act:
    await registerPage.registerUser(registerUserData);

    //Assert:
    await expect(registerPage.errorPasswordMismatchMessage).toHaveText(
      expectedErrorText,
    );
  });

  test('negative path - user can not register with too short password', async ({}) => {
    //Arrange:
    const expectedErrorText = 'Password must be at least 6 characters long';
    const shortPassword = (registerUserData.userPassword = '12345');
    registerUserData.userConfirmPassword = shortPassword;

    //Act:
    await registerPage.registerUser(registerUserData);

    //Assert:
    await expect(registerPage.errorPasswordTooShortMessage).toHaveText(
      expectedErrorText,
    );
  });

  test('negative path - user can not register with too long password', async ({}) => {
    //Arrange:
    const expectedErrorText = 'Passwords do not match';
    registerUserData.userPassword = '1111111';

    //Act:
    await registerPage.registerUser(registerUserData);

    //Assert:
    expect(registerPage.errorPasswordTooLongMessage).toHaveText(
      expectedErrorText,
    );
  });

  test('negative path - user can not register with emojis in name input', async ({}) => {
    //Arrange:
    const expectedErrorText = 'Name must not contain emojis';
    registerUserData.userName = '112222:)';

    //Act:
    await registerPage.registerUser(registerUserData);

    //Assert:
    expect(registerPage.errorPasswordEmojis).toHaveText(expectedErrorText);
  });
});
