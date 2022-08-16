import React from 'react';
import {Container, Grid,} from '@mui/material';
import {Heading3, Ulist} from './style';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {FooterSection} from './style';
import {Link} from 'react-router-dom';

function LinkSection(){

return(
    <FooterSection>
    <Container>
          <Grid container spacing={6}>
            <Grid item xs={3}>
         <Heading3>CUSTOMER SERVICE</Heading3>
         <Ulist>
            <li><Link to="/">CONTACT</Link></li>
            <li><Link to="/">DELIVERY & RETURNS</Link></li>
            <li><Link to="/">PAYMENTS</Link></li>
            <li><Link to="/">MAKE A RETURN</Link></li>
            <li><Link to="/">FAQ</Link></li>
         </Ulist>
            </Grid>
            <Grid item xs={3}>
            <Heading3>INFO</Heading3>
            <Ulist>
            <li><Link to="/">GIFT VOUCHERS</Link></li>
            <li><Link to="/">SIZE GUIDE</Link></li>
            <li><Link to="/">CAREERS</Link></li>
            <li><Link to="/">ABOUT US</Link></li>
            <li><Link to="/">GUIDE</Link></li>
            <li><Link to="/">LEGAL POLICIES</Link></li>
            </Ulist>
            </Grid>
            <Grid item xs={3}>
            <Heading3>FOLLOW US</Heading3>
            <Ulist>
            <li><FacebookIcon/><Link to="/">FACEBOOK</Link></li>
            <li><InstagramIcon/><Link to="/">INSTAGRAM</Link></li>
            
            
            </Ulist>
            </Grid>
            <Grid item xs={3}>
            <Heading3>CONTACT US</Heading3>
            <Ulist>
            <li><Link to="/">HELLO @SHOESLY.COM</Link></li>
            <li><Link to="/">+972597097813</Link></li>
            
            
            </Ulist>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
       </Container>
       </FooterSection>

)
}
export default LinkSection