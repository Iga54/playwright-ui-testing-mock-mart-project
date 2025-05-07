export interface RegisterUserModel {
  userName: string;
  userEmail: string;
  userPassword: string;
  userConfirmPassword: string;
}
export interface LoginUserModel {
  userEmail: string;
  userPassword: string;
}
