import React from 'react'
import { Container } from '../../GlobelStyle';
import BasicButtons from '../Buttons';
import NavBar from "../NavBar";
import { H1, HeroContent, HeroSection, Par } from "./style";
const Hero: React.FC = ()=> {

  return (
    <HeroSection>
      <Container>
        <NavBar />
        <HeroContent >
    <H1>
      <span>NEW</span> COLLECTION 
      </H1>

      <Par>Our Easiest Chuck-On-And-Go Staples Come With A Serious Style Heritage That’s Liberating, Sexy, Comfy And Supremely Cool. </Par>
     <BasicButtons/>
    </HeroContent>
      </Container>
   
    </HeroSection>
  );
}

export default Hero;