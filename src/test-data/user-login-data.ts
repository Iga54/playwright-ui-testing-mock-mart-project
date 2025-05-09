import { USER_EMAIL, USER_PASSWORD } from 'config/env.config';
import { LoginUserModel } from 'src/models/user.models';

export const testUser1: LoginUserModel = {
  userEmail: USER_EMAIL,
  userPassword: USER_PASSWORD,
};
