import React, { useEffect } from "react";
import {
  AuthedRightNavbarData,
  LeftNavbarData,
  RightNavbarData,
} from "../../Assets";
import { Item, LeftSection, Logo, NavWrapper, RightSection } from "./style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux";
import { logout } from "../../Redux/features/Auth/authSlice";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
interface NavbarProps {
  style?: React.CSSProperties;
}

const NavBar: React.FC<NavbarProps> = (props) => {
  const isAuthed = useSelector((state: RootState) => state.auth.isAuthed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);
  return (
    <Container>
      <NavWrapper>
        <LeftSection>
          {LeftNavbarData.map((item) => {
            return (
              <Item key={item.id} style={props.style}>
                <Link to={item.path}>{item.text}</Link>
              </Item>
            );
          })}
        </LeftSection>
        <Logo style={{ backgroundColor: "black" }} />
        <RightSection>
          {!isAuthed
            ? RightNavbarData.map((item) => {
                return (
                  <Item key={item.id} style={props.style}>
                    <Link
                      to={item.path}
                      style={{
                        color:
                          item.color && pathname !== "/" ? item.color : "white",
                      }}
                    >
                      {item.text ? item.text : <FavoriteBorderIcon />}
                    </Link>
                  </Item>
                );
              })
            : AuthedRightNavbarData.map((item) => {
                return (
                  <Item key={item.id} style={props.style}>
                    {item.text !== "LOG OUT" ? (
                      <Link
                        to={item.path}
                        style={{
                          color:
                            item.color && pathname !== "/"
                              ? item.color
                              : props.style?.color,
                        }}
                      >
                        {item.text ? item.text : <FavoriteBorderIcon />}
                      </Link>
                    ) : (
                      <Item
                        key={item.id}
                        onClick={handleLogout}
                        style={{
                          cursor: "pointer",
                          color: pathname !== "/" ? "black" : "white",
                        }}
                      >
                        {item.text}
                      </Item>
                    )}
                  </Item>
                );
              })}
        </RightSection>
      </NavWrapper>
    </Container>
  );
};

export default NavBar;
