import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: string;
  email: string;
  password: string;
};

interface loginResult {
  token: string;
  user: User;
}
type signUpResult = loginResult;

//  loginAuthentication
export const fetchToken = createAsyncThunk<
  {
    token: string;
    user: User;
  },
  {
    email: string;
    password: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "login/user",

  async ({ email, password }, thunkApi) => {
    try {
      const {
        data: { token, user },
      } = await axios.post<loginResult>(
        "https://pro-commerce1.herokuapp.com/api/v1/login",
        {
          email: email,
          password: password,
        }
      );

      return { token, user };
    } catch (e: any) {
      if (e.response.status === 404) {
        return thunkApi.rejectWithValue({
          msg: "email not found",
        });
      } else if (e.response.status === 403) {
        return thunkApi.rejectWithValue({
          msg: "incorrect password",
        });
      } else {
        return thunkApi.rejectWithValue({
          msg: "something went wrong",
        });
      }
    }
  }
);

export const signUpThunk = createAsyncThunk<
  {
    user: User;
  },
  {
    userName: string;
    email: string;
    password: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>("signup/user", async ({ userName, email, password }, thunkApi) => {
  try {
    const { data } = await axios.post<signUpResult>(
      "https://pro-commerce1.herokuapp.com/api/v1/signup",
      {
        email,
        password,
        name: userName,
      }
    );
    return data;
  } catch (e: any) {
    if (e.response?.data?.msg) {
      return thunkApi.rejectWithValue({
        msg: e.response.data.msg,
      });
    } else {
      return thunkApi.rejectWithValue({
        msg: "somthing went wrong",
      });
    }
  }
});
