import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUser,
  logInRequest,
  logOutRequest,
  registerRequest,
  token,
} from 'Api/authApi';

export const registerThunk = createAsyncThunk('user/register', userData =>
  registerRequest(userData)
);
export const logInThunk = createAsyncThunk('user/logIn', logInUserData =>
  logInRequest(logInUserData)
);
export const logOutThunk = createAsyncThunk('user/logOut', () =>
  logOutRequest()
);
export const getCurrentThunk = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) return thunkAPI.rejectWithValue();

      token.set(persistedToken);
      return await currentUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
