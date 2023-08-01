import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteApiContact, getApiContact, postApiContact } from "Api/contactsApi";

 export const fetchContactThunk = createAsyncThunk('contacts/fetchAll', ()=>getApiContact())
 export const addContactThunk = createAsyncThunk('contacts/addContact', (formData)=>postApiContact(formData))
 export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', (id)=>deleteApiContact(id))




// export const fetchContactThunk = createAsyncThunk(
//     'contacts/requestContact',
//     async (_, thunkAPI) => {
//       try {
//         const contactsApi = await getApiContact();
//         return contactsApi;
//       } 
//       catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );
