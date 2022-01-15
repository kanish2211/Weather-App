import "./App.css";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Header = () => {
  return (
    <div className="header">
      <TiWeatherPartlySunny className="headericon" />
      <h1> WEATHER APP</h1>
    </div>
  );
};

export default Header;
