import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../..";

// export const HandleLogin = async (email: string, password: string) => {
//   const data = useSelector((state: RootState) => state.auth.isAuthed);
//   log

//   const res = await axios.post(
//     "https://pro-commerce1.herokuapp.com/api/v1/login",
//     {
//       email: email,
//       password: password,
//     }
//   );
//   console.log(res);

//   if (res.status !== 200) {
//     localStorage.setItem("userToken", res.data.token);
//   }
//   return res;
// };
