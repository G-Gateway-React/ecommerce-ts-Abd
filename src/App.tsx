import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Home from "./Screen/Home";

const App: React.FC = () => {
  useEffect(() => {
    // const access_token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFib29kaGFuYWZpMTBAZ21haWwuY29tIiwibmFtZSI6IkFiZHVsUmFobWFuIiwiaWF0IjoxNjU4NzQ4MTY1fQ.xMc8yjNQQm-RSCvr9aoSh0EqkKkbw-u9nYCAvd91nBw";
    axios
      .post("https://pro-commerce1.herokuapp.com/api/v1/login", {
        email: "aboodhanafi10@gmail.com",
        password: "0592798686An!@#",
      })
      .then((res) => {
        //console.log(res.data);
      })
      .catch((error) => {
        // console.error(error);
      });
  });
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
