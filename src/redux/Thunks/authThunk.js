import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUser, logInRequest, logOutRequest, registerRequest } from "Api/authApi";

 export const registerThunk = createAsyncThunk('user/register', (userData)=>registerRequest(userData))
 export const logInThunk = createAsyncThunk('user/logIn', (logInUserData)=>logInRequest(logInUserData))
 export const logOutThunk = createAsyncThunk('user/logOut', ()=>logOutRequest())
 export const getCurrentThunk = createAsyncThunk('user/current', (_, thunkAPI)=>currentUser(_, thunkAPI))