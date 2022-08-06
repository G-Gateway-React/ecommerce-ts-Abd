import React from "react";
import Logo from "./logo.png";
import Hero from "./hero.jpg";
import Img1 from "./imgCard1.png";
import Img2 from "./imgCard2.png";
import Img3 from "./imgCard3.png";
import Img4 from "./imgCard4.png";
import Img5 from "./imgCard5.png";
import Img6 from "./imgCard6.png";
export const Images={

    Logo,
    Hero,
  
}


export const LeftNavbarData=
[
    {
        
    text :'NEW ARRIVALS',
    path :'/newarrivals',
},

    {

    text : 'SHOP',
    path : '/shop',
},
    {

    text :'COLLECTIONS',
    path :'/collection',
},



=======
import Logo from "./logo.png";
import Hero from "./hero.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../Redux";

export const Images = {
  Logo,
  Hero,
};

export const LeftNavbarData = [
  {
    text: "NEW ARRIVALS",
    path: "/newarrivals",
    id: 1,
  },

  {
    text: "SHOP",
    path: "/shop",
    id: 2,
  },
  {
    text: "COLLECTIONS",
    path: "/collection",
    id: 3,
  },
];




export const ImagesCard=
[
    {
        
   img: Img1,
   text: 'Jumpsuits',
},

{
        
    img:Img2,  
    text: 'Tops',
 },
 
 {
        
    img:Img3,
    text: 'Shorts',
 },
 
 {
        
    img:Img4,
    text: 'Knitwear',
 },
 {
        
    img:Img5,
    text: 'Jackets',
 },
  
 {
        
    img:Img6, 
     text: 'T-Shirts',
 },
 
];

