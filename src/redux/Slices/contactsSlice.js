import { initialStateContacts } from '../initialState';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactThunk,
  addContactThunk,
  deleteContactThunk,
} from '../Thunks/contactsThunk';

function fetchFulfilled(state, { payload }) {
  state.contacts = payload;
}

function addFulfilled(state, { payload }) {
  state.contacts.push(payload);
}

function deleteFulfilled(state, { payload }) {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  reducers: {
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactThunk.fulfilled, fetchFulfilled)
      .addCase(addContactThunk.fulfilled, addFulfilled)
      .addCase(deleteContactThunk.fulfilled, deleteFulfilled),
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
