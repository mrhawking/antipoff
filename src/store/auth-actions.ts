import { Dispatch } from '@reduxjs/toolkit';
import { authActions } from './auth-slice';

export const LogIn = (token: string) => {
  return (dispatch: Dispatch) => {
    localStorage.setItem('token', JSON.stringify(token))
    dispatch(authActions.login({token}))
  };
};

export const LogOut = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem('token');
    dispatch(authActions.logout())
  };
};