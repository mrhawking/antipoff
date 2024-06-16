import { createSlice } from '@reduxjs/toolkit';

const storedToken = localStorage.getItem('token');
const initialAuthState = {
  currentUserToken: storedToken ? JSON.parse(storedToken) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.currentUserToken = action.payload;
    },
    logout(state) {
      state.currentUserToken = null;
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;