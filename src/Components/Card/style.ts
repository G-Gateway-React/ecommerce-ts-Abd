import { styled } from "@mui/system";
import { FlexBox } from "../../GlobelStyle";

export const StyledCard = styled(FlexBox)`
  width: 32%;
  height: 400px;
  flex-direction: column;
  position: relative;
  margin-bottom: 35px;

  img {
    position: absolute;
    height: 100%;
    z-index: 1;
  }

  &:hover div {
    visibility: visible;
    z-index: 6;
    cursor: pointer;
  }
  &:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`;

export const H5 = styled(FlexBox)`
  position: absolute;
  top: 80%;
  visibility: hidden;
  color: #fff;
  font-size: 35px;
`;
