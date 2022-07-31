import React from "react";
import { LeftNavbarData, RightNavbarData } from "../../Assets";
import { Item, LeftSection, Logo, NavWrapper, RightSection } from "./style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NavBar: React.FC = () => {
  return (
    <NavWrapper>
      <LeftSection>
        {LeftNavbarData.map((item) => {
          return <Item key={item.id}>{item.text}</Item>;
        })}
      </LeftSection>
      <Logo />
      <RightSection>
        {RightNavbarData.map((item) => {
          return (
            <Item key={item.id}>
              {item.text ? item.text : <FavoriteBorderIcon />}
            </Item>
          );
        })}
      </RightSection>
    </NavWrapper>
  );
};

export default NavBar;
