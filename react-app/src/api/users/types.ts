export type Role = {
  role: string;
  entities: Record<string, string[]>;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  profession?: string;
  profilePicture?: string;
  birthdayDate?: string;
  verificationCode?: string;
  confirmedAt: string | null;
  accessToken?: string;
  role?: Role;
};

export type GetProfileResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  confirmedAt: string | null;
  role: Role;
};

export type SignupRequest = {
  email: string;
  password: string;
};

export type SignupResponse = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  confirmed_at: string | null;
};

export type RequestNewPasswordRequest = {
  email: string;
};

export type RequestNewPasswordResponse = undefined;

export type ResetPasswordRequest = {
  id: string;
  newPassword: string;
  verificationCode: string;
};

export type ResetPasswordResponse = undefined;

export type ConfirmUserRequest = {
  id?: string | null;
  verificationCode?: string | null;
};

export type ConfirmUserResponse = User;

//#region User
export type PatchUserRequest = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  profession?: string;
  birthdayDate?: string;
  hobbies?: string;
};

export type PatchUserResponse = PatchUserRequest;

//#endregion
