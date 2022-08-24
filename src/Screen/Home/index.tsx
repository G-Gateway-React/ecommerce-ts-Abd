import React from "react";
import ImgMediaCard from "../../Components/Card";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import SecoCard from "../../Components/SecoCard";
import { H3, CardWrapper, Tital } from "./style";
import { Images } from "../../Assets";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Tital>
        <span>CATEGOR</span>IES
      </Tital>
      <CardWrapper>
        {Images.map((item) => (
          <ImgMediaCard
            key={item.id}
            id={item.id}
            img={item.img}
            text={item.text}
          />
        ))}
      </CardWrapper>

      <H3>NEW BOOTS ADDED RECENTLY</H3>
      <SecoCard />
    </div>
  );
};

export default Home;
