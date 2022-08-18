import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import NavBar from "../../Components/NavBar";
import { FlexBox } from "../../GlobelStyle";
import { Button, TextField, Typography } from "@mui/material";
import { FormWrapper } from "./style";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpThunk } from "../../Redux/features/Auth/authAction";
import toast from "react-hot-toast";
// import { signedUp } from "../../Redux/features/Auth/authSlice";

interface IFormInputs {
  userName: string;
  email: string;
  password: string;
}
const schema = yup.object({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "passwoed must contains at least : Capital and small letter , number and special charechter @#$"
    ),
});
const SignUp = () => {
  const { isAuthed, errorMsg, isSignedUp } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IFormInputs) => {
    const res = await dispatch(
      signUpThunk({
        email: data.email,
        password: data.password,
        userName: data.userName,
      })
    );
    // console.log();

    if (res.meta.requestStatus === "fulfilled") {
      toast.success("regitered successfully", {
        position: "bottom-left",
        duration: 2500,
      });
      reset();
      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000);
    }
  };
  useEffect(() => {
    if (isAuthed) {
      setTimeout(() => navigate("/"), 3000);
    }
  }, [isAuthed]);

  if (!isAuthed) {
    return (
      <>
        <NavBar
          style={{
            color: "black",
          }}
        />
        <FlexBox
          style={{
            justifyContent: "center",
            margin: "115px 0",
          }}
        >
          <Box
            sx={{
              width: 765,
              height: "auto",
              border: "1px solid #000",
              borderRadius: 14,
              paddingBottom: 20,
            }}
          >
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <Typography
                sx={{
                  padding: "30px 0",
                }}
                variant="h3"
              >
                Create Account
              </Typography>
              <TextField
                id="standard-required"
                label="user name"
                variant="standard"
                type="text"
                fullWidth
                {...register("userName")}
              />
              <p>{errors.userName?.message}</p>
              <TextField
                id="standard-required"
                label="Email"
                variant="standard"
                type="email"
                fullWidth
                {...register("email")}
              />
              <p>{errorMsg !== "" ? errorMsg : ""}</p>
              <p>{errors.email?.message}</p>
              <TextField
                id="standard-required"
                label="Password"
                variant="standard"
                type={show ? "text" : "password"}
                fullWidth
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
              <Button onClick={() => setShow(!show)}>
                {show ? "hide" : "show"} password
              </Button>
              <Button type="submit">submit</Button>
            </FormWrapper>
          </Box>
        </FlexBox>
      </>
    );
  }
  return <div>redirect to homePage</div>;
};

export default SignUp;
