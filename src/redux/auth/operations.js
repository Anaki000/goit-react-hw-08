import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, contactsAPI, setToken } from "../../config/contactsAPI";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPi) => {
    try {
      const { data } = await contactsAPI.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await contactsAPI.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await contactsAPI.post("users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;
  if (!savedToken) {
    return thunkAPI.rejectWithValue("Token is not exist!");
  }
  try {
    setToken(savedToken);
    const { data } = await contactsAPI.get("users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
