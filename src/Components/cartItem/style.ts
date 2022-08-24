import styled from "styled-components";
import { FlexBox } from "../../GlobelStyle";
import item1 from "../../Assets/item1.png";
import { Badge } from "@mui/material";

export const CartWrapper = styled(FlexBox)`
  width: 100%;
  height: 560px;
  justify-content: start;
  align-items: start;
  margin: 60px 0;
  gap: 40px;
`;
export const CartItemPhoto = styled.div`
  width: 30%;
  height: 460px;
  background: url(${item1}) center center no-repeat;
`;

export const CartItemDetails = styled(FlexBox)`
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin-top: 10px;
  width: 60%;
`;
export const CustomBadge = styled(Badge)`
  .MuiBadge-badge {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
