export type LoginRequest = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LoginResponse = {
  access_token: string;
};
