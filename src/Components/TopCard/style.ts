import styled from 'styled-components';
import { FlexBox } from "../../GlobelStyle";

export const StyledCard = styled(FlexBox)`
 width: 200px;
height: 315px;
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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 2;
  }
`;

export const H5 = styled(FlexBox)`
  position: absolute;
  top: 80%;
  visibility: hidden;
  color: #fff;
  font-size: 15px;
`;

export const Price = styled.div`
display :flex;
width: 120px;
height: 50px;
background: #D1094B;
z-index: 6;
align-items: center;
position: absolute;
left: 1px;
p{

    color:white;
    padding :0 10px;

}
clip-path: polygon(75% 0%, 55% 51%, 75% 100%, 0 100%, 0 43%, 0 0);

`