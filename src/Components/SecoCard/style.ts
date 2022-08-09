import {styled} from '@mui/system'
import { Container, FlexBox } from '../../GlobelStyle'



export const SectionSecoCard = styled(Container)`
display:flex;
flex-direction:row;
padding-top:90px;


`


export const StyledSecoCard = styled(FlexBox)`
width:25%;
height:400px;
position:relative;


img{
  position: absolute;
  width:100%;
  height: 100%;
  z-index: 1;
}

&:hover img{
  
    transform:scaleY(1.1);
   
  }


&:hover div{
  visibility: visible;
  z-index: 6;
  transform:scaleY(2);
 
}
&:hover::before {
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
 

  }

`


export const H6 = styled(FlexBox)`
position:absolute;
top:85%;
padding-left:90px;
visibility:hidden;
color:#fff;
font-size:15px;

  

` 