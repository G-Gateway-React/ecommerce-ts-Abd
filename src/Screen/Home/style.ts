import styled from "styled-components";
import { Container } from "../../GlobelStyle";

export const Tital = styled.h1`
  font-size: 56px;
  line-height: 76px;
  font-weight: 500;
  span {
    color: #ffffff;
    background: #d1094b;
    border-radius: 2px;
  }
  padding-top: 65px;
`;

export const H3 = styled(Container)`
  text-align: left;
  margin: 81px 0 -60px 0;
  font-size: 25px;
`;

export const CardWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 60px;
`;
