import React from 'react';
import ImgMediaCard from '../../Components/Card';
import Hero from '../../Components/Hero';
import { Tital } from './style';


const Home: React.FC = () => {


    return (
        <div>
           
       <Hero/>
       <Tital><span>CATEGOR</span>IES</Tital>  
       <ImgMediaCard/>

        </div>
    );
}

export default Home;


