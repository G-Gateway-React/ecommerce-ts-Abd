import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { ImagesCard } from "../../Assets/index";
import { SectionCard , StyledCard , H5 } from './style';
// import { Typography } from '@mui/material';



export default function  ImgMediaCard(){
  return (
    <SectionCard >
   {ImagesCard.map((imges)=>

   <StyledCard>
    <CardMedia sx={{ width: '100%'}}
   component="img"
   alt="green iguana"
   image={imges.img}
      />
 <H5>
 {imges.text}
        </H5>
      
   </StyledCard>
    
     
   ) }
    </SectionCard>
    )
  }
    
