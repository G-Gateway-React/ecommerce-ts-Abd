import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screen/Home";
import Login from "./Screen/Login";
import SignUp from "./Screen/signUp";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
