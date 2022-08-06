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

export const RightNavbarData = [
  {
    text: "SEARCH",
    id: 1,
  },

  {
    text: "SIGN IN",
    path: "/login",
    id: 2,
  },
  {
    text: "BAG (2)",
    path: "/BAG",
    id: 3,
  },
  {
    icon: "whishlist",
    id: 4,
  },
];
