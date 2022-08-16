import React from 'react';
import ImgMediaCard from '../../Components/Card';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import SecoCard from '../../Components/SecoCard';
import {H3, Tital } from './style';


const Home: React.FC = () => {


    return (
        <div>
           
       <Hero/>
       <Tital><span>CATEGOR</span>IES</Tital>  
       <ImgMediaCard/>
       <H3>NEW BOOTS ADDED RECENTLY</H3>
      <SecoCard/>

      <Footer/>     
        </div>
    );
}


export default Home;
