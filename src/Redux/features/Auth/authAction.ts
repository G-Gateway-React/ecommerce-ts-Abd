import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface actionType {
  email: string;
  password: string;
}

export const fetchToken = createAsyncThunk(
  "login/user",
  async (data: actionType) => {
    const response = await axios.post(
      "https://pro-commerce1.herokuapp.com/api/v1/login",
      {
        email: data.email,
        password: data.password,
      }
    );

    return response;
  }
);
