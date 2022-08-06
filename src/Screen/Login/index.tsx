import { Button, FormGroup, Input, TextField } from "@mui/material";
import axios from "axios";
import { error } from "console";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { Container, FlexBox } from "../../GlobelStyle";
import useForm from "../../hooks/useForm";
import { RootState } from "../../Redux";
import { login } from "../../Redux/features/Auth/authSlice";

const Login = () => {
  const isAuthed = useSelector((state: RootState) => state.auth.isAuthed);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, handelChange } = useForm({
    email: "",
    password: "",
  });
  const handleLogin = async (email: string, password: string) => {
    const res = await axios
      .post("https://pro-commerce1.herokuapp.com/api/v1/login", {
        email: email,
        password: password,
      })
      .catch((error) => {});
    console.log(res);

    if (res) {
      localStorage.setItem("userToken", res.data.token);

      return res;
    } else {
      return null;
    }
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    handleLogin(values.email, values.password);

    setTimeout(() => {
      const result = localStorage.getItem("userToken");
      if (result !== null) {
        dispatch(login());
      }
    }, 1000);
  };
  const handleEnter: React.KeyboardEventHandler<HTMLDivElement> = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin(values.email, values.password);

      setTimeout(() => {
        const result = localStorage.getItem("userToken");
        if (result !== null) {
          dispatch(login());
        }
      }, 1000);
    }
  };
  useEffect(() => {
    if (isAuthed) {
      setTimeout(() => navigate("/"), 3000);
    }
  }, [isAuthed]);

  if (!isAuthed) {
    return (
      <Container>
        <FlexBox style={{ flexDirection: "column" }}>
          <NavBar style={{ color: "black" }} />
          <FormGroup style={{ margin: "100px 0" }}>
            <TextField
              onChange={handelChange}
              onKeyPress={handleEnter}
              name="email"
              type="email"
              id="email"
              label="email"
              variant="standard"
              value={values.email}
              autoFocus
            />

            <TextField
              onChange={handelChange}
              onKeyPress={handleEnter}
              name="password"
              type="password"
              id="password"
              label="password"
              variant="standard"
              value={values.password}
            />
            <Button onClick={handleClick}> login </Button>
          </FormGroup>
        </FlexBox>
      </Container>
    );
  }
  return <div>redirect to homePage</div>;
};

export default Login;
