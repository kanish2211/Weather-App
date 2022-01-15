import WeatherContext from "./WeatherContext";
import WeatherReport from "./WeatherReport";

const WeatherBody = () => {
  return (
    <WeatherContext.Consumer>
      {(context) => {
        return (
          <>
            <input
              placeholder="Enter City Name"
              onChange={(element) => {
                context.cityname(element.target.value);
              }}
            ></input>

            <button
              onClick={() => {
                context.weather();
              }}
            >
              get
            </button>
            {context.weatherData ? <WeatherReport /> : <div></div>}
          </>
        );
      }}
    </WeatherContext.Consumer>
  );
};

export default WeatherBody;
