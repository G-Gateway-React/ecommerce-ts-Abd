import React from 'react';
import { H5, StyledCard } from './style';
import CardMedia from "@mui/material/CardMedia";
import {Price} from './style';

interface Props {
    img: string;
    text: string;
}

export default function TopCard({ img, text }: Props) {
    return (
        <>
      <StyledCard  >
        <CardMedia
          sx={{ width: "100%" ,position : "relative"}}
          component="img"
          alt="green iguana"
          image={img}
        > 
        
        </CardMedia>
          
        <H5>{text}</H5>
       <Price>
       <p> $24.59</p>
       </Price>
      </StyledCard>

       </>
    );
  }