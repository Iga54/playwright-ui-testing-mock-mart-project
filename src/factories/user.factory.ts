import { faker } from '@faker-js/faker/locale/en';
import { RegisterUserModel } from 'src/models/user.models';

export function createRandomUser(): RegisterUserModel {
  const registerUserData: RegisterUserModel = {
    userName: faker.person.firstName().replace(/[^A-Za-z]/g, ''),
    userEmail: '',
    userPassword: faker.internet.password(),
    userConfirmPassword: '',
  };
  registerUserData.userEmail = faker.internet.email({
    firstName: registerUserData.userName,
  });
  registerUserData.userConfirmPassword = registerUserData.userPassword;

  return registerUserData;
}
