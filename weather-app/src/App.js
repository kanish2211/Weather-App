import React, { useState } from "react";
import Axios from "axios";
import WeatherReport from "./WeatherReport";
import "./App.css";
import Header from "./Header";

const API_KEY = "8a615e769eec04422a333dc69171f25b";
const App = () => {
  const [cityname, setcityname] = useState("");
  const [weatherResponse, setweatherResponse] = useState();

  const kelvinToCelcius = (temperatureInKelvin) => {
    const temperatureInCelcius = temperatureInKelvin - 273;
    return temperatureInCelcius;
  };
  const Menubar = () => {
    return (
      <div className="menubar">
        <p
          onClick={() => {
            setcityname("London");
            weather();
          }}
        >
          London
        </p>
        <p
          onClick={() => {
            setcityname("Delhi");
            weather();
          }}
        >
          Delhi
        </p>
        <p
          onClick={() => {
            setcityname("sydney");
            weather();
          }}
        >
          Sydney
        </p>
        <p
          onClick={() => {
            setcityname("toronto");
            weather();
          }}
        >
          Toronto
        </p>
        <p
          onClick={() => {
            setcityname("washington");
            weather();
          }}
        >
          Washington DC
        </p>
        <p
          onClick={() => {
            setcityname("paris");
            weather();
          }}
        >
          Paris
        </p>
      </div>
    );
  };

  const weather = async () => {
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`
      );
      if (response.status === 200) {
        setweatherResponse(
          new WeatherResponse(
            response.data.name,
            response.data.main.pressure,
            response.data.main.humidity,
            kelvinToCelcius(response.data.main.temp),
            kelvinToCelcius(response.data.main.feels_like),
            kelvinToCelcius(response.data.main.temp_min),
            kelvinToCelcius(response.data.main.temp_max),
            response.data.wind.speed,
            response.data.wind.deg,
            response.data.weather[0].icon,
            response.data.weather[0].main,
            response.data.weather[0].description,
            response.data.clouds.all
          )
        );
        console.log(response.data);
        console.log(response.data.clouds);
        console.log(response.data.main.temp);
        console.log(response.data.wind.speed);
        console.log(response.data.weather[0].icon);
      } else {
        console.error("get weather error", response.data.error); //
      }
    } catch (error) {
      console.error("get weather error", error);
    } finally {
    }
  };

  return (
    <div>
      <Header />
      <Menubar />
      <input
        placeholder="Enter City Name"
        onChange={(element) => {
          setcityname(element.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          weather();
        }}
      >
        get
      </button>
      {weatherResponse ? <WeatherReport name={weatherResponse} /> : ""}
      <p></p>
    </div>
  );
};
class WeatherResponse {
  // final string city
  constructor(
    city,
    humidity,
    pressure,
    temperature,
    feelsLike,
    tempMin,
    tempMax,
    windSpeed,
    windDegree,
    icon,
    main,
    description,
    cloud
  ) {
    this.cityname = city;
    this.pressurevalue = pressure;
    this.humidityvalue = humidity;
    this.tempertureValue = temperature;
    this.feelsLike = feelsLike;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.windSpeed = windSpeed;
    this.windDegree = windDegree;
    this.icon = icon;
    this.main = main;
    this.description = description;
    this.cloud = cloud;
  }
}

export default App;
