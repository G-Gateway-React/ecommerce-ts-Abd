import { createSlice } from "@reduxjs/toolkit";
import { fetchToken, signUpThunk } from "./authAction";

let Authed_Storage_Key = "authed";
export interface AuthState {
  isAuthed: boolean;
  userToken?: string | null;
  errorMsg?: string | undefined;
  isSignedUp?: boolean;
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
    logout: (state) => {
      state.isAuthed = false;
      state.userToken = "";
      localStorage.removeItem("userToken");
      localStorage.removeItem(Authed_Storage_Key);
    },
    // signedUp: (state) => {
    //   state.isSignedUp = false;
    //   state.errorMsg = "";
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.isAuthed = false;
      state.errorMsg = "";
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.errorMsg = "";
      state.isAuthed = true;
      state.userToken = action.payload?.token;
      localStorage.setItem("userToken", state.userToken);
      localStorage.setItem(Authed_Storage_Key, "1");
    });
    builder.addCase(fetchToken.rejected, (state, action) => {
      state.isAuthed = false;
      state.errorMsg = "";
      state.errorMsg = action.payload?.msg;
    });
    builder.addCase(signUpThunk.pending, (state) => {
      state.errorMsg = "";
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      state.errorMsg = "";
      state.isSignedUp = true;
      console.log("tam");
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.errorMsg = "";
      state.errorMsg = action.payload?.msg;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
