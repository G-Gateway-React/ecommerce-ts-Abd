import { Button, FormGroup, Input, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { Container, FlexBox } from "../../GlobelStyle";
import useForm from "../../hooks/useForm";
import { RootState } from "../../Redux";
import { fetchToken } from "../../Redux/features/Auth/authAction";
import { login } from "../../Redux/features/Auth/authSlice";

const Login = () => {
  const isAuthed = useSelector((state: RootState) => state.auth.isAuthed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, handelChange } = useForm({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    const res = await axios
      .post("https://pro-commerce1.herokuapp.com/api/v1/login", {
        email: email,
        password: password,
      })
      .catch((error) => {});

    if (res) {
      localStorage.setItem("userToken", res.data.token);

      return res;
    } else {
      return null;
    }
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleLogin(values.email, values.password);
    setTimeout(() => {
      const result = localStorage.getItem("userToken");
      if (result !== null) {
        dispatch(login(result));
      }
    }, 1000);
  };
  const handleEnter: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin(values.email, values.password);

      setTimeout(() => {
        const result = localStorage.getItem("userToken");
        if (result !== null) {
          dispatch(login(result));
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
            <div
              style={{
                display: "flex",
              }}
            >
              <TextField
                onChange={handelChange}
                onKeyPress={handleEnter}
                name="password"
                type={show ? "text" : "password"}
                id="password"
                label="password"
                variant="standard"
                value={values.password}
              />
              <Button onClick={() => setShow(!show)}>
                {show ? "hide" : "show"}
              </Button>
              <Link to={"/signup"}> I dont have account</Link>
            </div>

            <Button onClick={handleClick}> login </Button>
          </FormGroup>
        </FlexBox>
      </Container>
    );
  }
  return <div>redirect to homePage</div>;
};

export default Login;
