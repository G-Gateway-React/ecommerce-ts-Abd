import React from "react";
import { LeftNavbarData, RightNavbarData } from "../../Assets";
import { Item, LeftSection, Logo, NavWrapper, RightSection } from "./style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
interface NavbarProps {
  style?: React.CSSProperties;
}

const NavBar: React.FC<NavbarProps> = (props) => {
  return (
    <NavWrapper>
      <LeftSection>
        {LeftNavbarData.map((item) => {
          return (
            <Item key={item.id} style={props.style}>
              {item.text}
            </Item>
          );
        })}
      </LeftSection>
      <Logo style={{ backgroundColor: "black" }} />
      <RightSection>
        {RightNavbarData.map((item) => {
          return (
            <Item key={item.id} style={props.style}>
              {item.text ? item.text : <FavoriteBorderIcon />}
            </Item>
          );
        })}
      </RightSection>
    </NavWrapper>
  );
};

export default NavBar;
