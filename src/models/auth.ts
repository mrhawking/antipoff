export type TAuthFormValues = {
  username?: string;
  email: string;
  password: string;
  repassword?: string;
};

export type TAuthMode = 'signin' | 'signup';

export type TLoginResponse = {
  token: string;
};

export type TRegisterResponse = {
  token: string;
  id: number;
};