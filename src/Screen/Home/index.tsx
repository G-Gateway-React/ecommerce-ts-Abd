import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ImgMediaCard from "../../Components/Card";
import Hero from "../../Components/Hero";
import { logout } from "../../Redux/features/Auth/authSlice";
import { Tital } from "./style";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <Hero />
      <Tital>
        <span>CATEGOR</span>IES
      </Tital>
      <ImgMediaCard />
      <button onClick={handleLogout}>logout</button>
      <Link to={"/login"}>login </Link>
    </div>
  );
};

export default Home;
