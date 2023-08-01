import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentThunk,
  logInThunk,
  logOutThunk,
  registerThunk,
} from 'redux/Thunks/authThunk';
import initialState from 'redux/initialState';

const fulfilledRegistration = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
const fulfilledLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const fulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const fulfilledGetCurrent = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, fulfilledRegistration)
      .addCase(logInThunk.fulfilled, fulfilledLogIn)
      .addCase(logOutThunk.fulfilled, fulfilledLogOut)
      .addCase(getCurrentThunk.fulfilled, fulfilledGetCurrent),
});
export const authReducer = authSlice.reducer;
