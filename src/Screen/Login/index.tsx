import { Button, FormGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { Container, FlexBox } from "../../GlobelStyle";
import useForm from "../../hooks/useForm";
import { RootState, useAppDispatch } from "../../Redux";
import { fetchToken } from "../../Redux/features/Auth/authAction";

const Login = () => {
  const isAuthed = useSelector((state: RootState) => state.auth.isAuthed);
  const errorMsg = useSelector((state: RootState) => state.auth.errorMsg);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { values, handelChange } = useForm({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch(
      fetchToken({
        email: values.email,
        password: values.password,
      })
    );
  };

  const handleEnter: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(
        fetchToken({
          email: values.email,
          password: values.password,
        })
      );
    }
  };

  useEffect(() => {
    if (isAuthed === true) {
      setTimeout(() => navigate("/"), 2000);
    }
  }, [isAuthed]);

  if (isAuthed === false) {
    return (
      <Container>
        <FlexBox style={{ flexDirection: "column" }}>
          <NavBar style={{ color: "black" }} />
          <FormGroup style={{ margin: "100px 0" }}>
            <p>{errorMsg === "something went wrong" ? errorMsg : ""}</p>
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
            <p>{errorMsg === "email not found" ? errorMsg : ""}</p>
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
              <p>{errorMsg === "incorrect password" ? errorMsg : ""}</p>
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
