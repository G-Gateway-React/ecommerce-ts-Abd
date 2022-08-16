import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchToken } from "./authAction";

let Authed_Storage_Key = "authed";
export interface AuthState {
  isAuthed: boolean;
  userToken?: string | null;
  errorMsg?: string | undefined;
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
    // login: (state, action: PayloadAction<string>) => {
    //   state.userToken = action.payload;
    //   localStorage.setItem(Authed_Storage_Key, "1");
    //   state.isAuthed = true;
    // },
    logout: (state) => {
      state.isAuthed = false;
      state.userToken = "";
      localStorage.removeItem("userToken");
      localStorage.removeItem(Authed_Storage_Key);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.isAuthed = false;
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
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
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
