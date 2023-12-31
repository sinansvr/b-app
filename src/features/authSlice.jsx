import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload.user.username;
      state.token = action.payload.user.key;
      state.error=false;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload.user.username;
      state.token = action.payload.user.key;
      state.error=false;
    },fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    }
  },
});

export const { fetchStart, loginSuccess,logoutSuccess,registerSuccess,fetchFail } = authSlice.actions;

export default authSlice.reducer;
