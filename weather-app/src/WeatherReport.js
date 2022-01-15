import React, { useState } from "react";

const WeatherReport = ({ name }) => {
  const [moreDetails, setmoreDetails] = useState(false);
  const iconurl = "http://openweathermap.org/img/w/" + name.icon + ".png";
  return (
    <div className="response">
      <h3 className="cityname">{name.cityname}</h3>
      <img className="icon" src={iconurl} alt="" />
      <p>{name.main}</p>
      <p>{name.description}</p>
      <p>Temperature: {name.tempertureValue}</p>
      <p>Feels like: {name.feelsLike} </p>
      <p>Maximum Temperture: {name.tempMax}</p>
      <p>Minimum Temperture: {name.tempMin}</p>

      {moreDetails ? (
        <div className="response">
          <p>humidity: {name.humidityvalue}</p>
          <p>pressure: {name.pressurevalue}</p>
          <p>Wind Speed: {name.windSpeed}</p>
          <p>Wind Degree: {name.windDegree}</p>
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
};
export default WeatherReport;
