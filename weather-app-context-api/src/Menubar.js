import WeatherContext from "./WeatherContext";
import "./App.css";

const Menubar = () => {
  return (
    <WeatherContext.Consumer>
      {(context) => (
        <div className="menubar">
          <p
            onClick={() => {
              context.cityname("London");
              context.weather();
            }}
          >
            London
          </p>
          <p
            onClick={() => {
              context.cityname("London");
              context.weather();
            }}
          >
            Delhi
          </p>
          <p
            onClick={() => {
              context.cityname("Delhi");
              context.weather();
            }}
          >
            Sydney
          </p>
          <p
            onClick={() => {
              context.cityname("Sydney");
              context.weather();
            }}
          >
            Toronto
          </p>
          <p
            onClick={() => {
              context.cityname("Toronto");
              context.weather();
            }}
          >
            Washington DC
          </p>
          <p
            onClick={() => {
              context.cityname("Paris");
              context.weather();
            }}
          >
            Paris
          </p>
        </div>
      )}
    </WeatherContext.Consumer>
  );
};

export default Menubar;
