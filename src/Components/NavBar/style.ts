import styled from "styled-components";
import { Images } from "../../Assets";
import { FlexBox } from "../../GlobelStyle";

export const NavWrapper = styled(FlexBox)`
  width: 100%;
  height: 80px;
  padding-top: 19px;
  justify-content: space-between;
`;

export const LeftSection = styled(FlexBox)`
  gap: 30px;
`;

export const Item = styled(FlexBox)`
  font-size: 18px;
  font-weight: 400;
  color: white;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Logo = styled(FlexBox)`
  width: 20%;
  height: 100px;
  background: url(${Images.Logo}) center center no-repeat;
  background-size: auto;
`;

export const RightSection = styled(FlexBox)`
  gap: 30px;
`;
