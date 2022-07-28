import styled from "styled-components"
import { Images } from "../../Assets"


export const HeroSection = styled.div`

width:100%;
height:100vh;
background:url(${Images.Hero}) center center no-repeat;
background-size:auto ;
  `
export const HeroContent = styled.div`
width:50%;
height: calc(100vh - 100px);
display:flex;
flex-direction:column;
justify-content:center;
text-align:left;


`
export const H1 = styled.h1`
font-size:73px;
line-height:60px;
display:flex;
flex-direction:column;
color: #fff;
span{
  color:#D1094B
}
`
export const Par = styled.p`
margin-top: 28px;
font-size:24px;
line-height:35px;
color:#fff;
`

