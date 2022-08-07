import Logo from "./logo.png";
import Hero from "./hero.jpg";
import Img1 from "./imgCard1.png";
import Img2 from "./imgCard2.png";
import Img3 from "./imgCard3.png";
import Img4 from "./imgCard4.png";
import Img5 from "./imgCard5.png";
import Img6 from "./imgCard6.png";
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

export const RightNavbarData = [
  {
    text: "SEARCH",
    path: "/",
    id: 1,
  },

  {
    text: "SIGN IN",
    path: "/login",
    id: 2,
  },
  {
    text: "BAG (2)",
    path: "/",
    id: 3,
  },
  {
    icon: "whishlist",
    path: "/",
    id: 4,
  },
];
export const AuthedRightNavbarData = [
  {
    text: "SEARCH",
    path: "/",
    id: 1,
  },

  {
    text: "LOG OUT",
    path: "/logout",
    id: 2,
  },
  {
    text: "BAG (2)",
    path: "/",
    id: 3,
  },
  {
    icon: "whishlist",
    path: "/",
    id: 4,
  },
];

export const ImagesCard = [
  {
    img: Img1,
    text: "Jumpsuits",
    id: 1,
  },

  {
    img: Img2,
    text: "Tops",
    id: 2,
  },

  {
    img: Img3,
    text: "Shorts",
    id: 3,
  },

  {
    img: Img4,
    text: "Knitwear",
    id: 4,
  },
  {
    img: Img5,
    text: "Jackets",
    id: 5,
  },

  {
    img: Img6,
    text: "T-Shirts",
    id: 6,
  },
];
