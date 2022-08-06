import { createSlice } from "@reduxjs/toolkit";

let Authed_Storage_Key = "authed";
export interface AuthState {
  isAuthed: boolean;
  userToken?: any;
}

export interface actionType {
  email: string;
  password: string;
}

const initialState: AuthState = {
  isAuthed: localStorage.getItem(Authed_Storage_Key) ? true : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.userToken = localStorage.getItem("userToken");
      localStorage.setItem(Authed_Storage_Key, "1");
      state.isAuthed = true;
    },
    logout: (state) => {
      state.isAuthed = false;
      state.userToken = "";
      localStorage.removeItem("userToken");
      localStorage.removeItem(Authed_Storage_Key);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;