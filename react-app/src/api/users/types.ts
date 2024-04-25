export type Role = {
  role: string;
  entities: Record<string, string[]>;
};

export type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  profession?: string;
  profilePicture?: string;
  birthdayDate?: string;
  hobbies?: string;
  verificationCode?: string;
  confirmedAt: string | null;
  accessToken?: string;
  role?: Role;
};

export type GetProfileResponse = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  confirmedAt: string | null;
  hobbies?: string;
  role: Role;
};

export type SignupRequest = {
  firstName: string;
  lastName: string;
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

export type RequestVerificationRequest = {
  userId?: string | null;
};

//#region User
export type PatchUserRequest = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  profession?: string;
  birthdayDate?: string;
  hobbies?: string;
  oldPassword?: string;
  newPassword?: string;
};

export type PatchUserResponse = Omit<PatchUserRequest, 'oldPassword' | 'newPassword'>;

//#endregion

//#region Skills
export type PostSkillRequest = {
  name: string;
};

export type PostSkillResponse = {
  id: string;
  name: string;
};

export type GetSkillsResponse = {
  id: string;
  name: string;
}[];

export type DeleteSkillRequest = {
  id: string;
};

export type DeleteSkillResponse = undefined;

//#endregion
