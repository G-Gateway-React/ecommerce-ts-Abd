import { StyledInput, StyledSignUp } from "./style";
import { Container, Grid } from "@mui/material";
import LinkSection from "../LinkSection/index";

function Footer() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <StyledSignUp>
              <h2>SIGN UP FOR UPDATES</h2>
              <p>
                Sign up for exclusive early sale access and tailored new
                arrivals.
              </p>
              <StyledInput>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                />
                <h3>JOIN</h3>
              </StyledInput>
            </StyledSignUp>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>

      <LinkSection />
    </>
  );
}
export default Footer;
