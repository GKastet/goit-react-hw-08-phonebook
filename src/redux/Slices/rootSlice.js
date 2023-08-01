import { createSlice } from '@reduxjs/toolkit';
import { initialStateRoot } from 'redux/initialState';

export function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

export function handleRejected(state, { error }) {
  state.isLoading = false;
  state.error = error.message;
}

export function handleFulfilled(state) {
  state.isLoading = false;
}

const rootSlice = createSlice({
  name: 'root',
  initialState: initialStateRoot,

  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const rootReducer = rootSlice.reducer;
