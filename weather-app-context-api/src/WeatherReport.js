import React, { useState } from "react";
import WeatherContext from "./WeatherContext";

const WeatherReport = () => {
  const [moreDetails, setmoreDetails] = useState(false);

  return (
    <WeatherContext.Consumer>
      {(context) => {
        const iconurl =
          "http://openweathermap.org/img/w/" +
          context.weatherData.icon +
          ".png";
        return (
          <div className="response">
            <h3 className="cityname">{context.weatherData.cityname}</h3>
            <img className="icon" src={iconurl} alt="" />
            <p>{context.weatherData.main}</p>
            <p>{context.weatherData.description}</p>
            <p>Temperature: {context.weatherData.tempertureValue}</p>
            <p>Feels like: {context.weatherData.feelsLike} </p>
            <p>Maximum Temperture: {context.weatherData.tempMax}</p>
            <p>Minimum Temperture: {context.weatherData.tempMin}</p>

            {moreDetails ? (
              <div className="response">
                <p>humidity: {context.weatherData.humidityvalue}</p>
                <p>pressure: {context.weatherData.pressurevalue}</p>
                <p>Wind Speed: {context.weatherData.windSpeed}</p>
                <p>Wind Degree: {context.weatherData.windDegree}</p>
                <p></p>
                <button
                  onClick={() => {
                    setmoreDetails(false);
                  }}
                >
                  Less details
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setmoreDetails(true);
                }}
              >
                More details
              </button>
            )}
          </div>
        );
      }}
    </WeatherContext.Consumer>
  );
};
export default WeatherReport;
