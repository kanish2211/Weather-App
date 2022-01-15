import WeatherContext from "./WeatherContext";
import { useState } from "react";
import Axios from "axios";

const API_KEY = "8a615e769eec04422a333dc69171f25b";

const WeatherProvider = (props) => {
  const [cityname, setcityname] = useState("");
  const [weatherResponse, setweatherResponse] = useState();
  const kelvinToCelcius = (temperatureInKelvin) => {
    const temperatureInCelcius = temperatureInKelvin - 273;
    return temperatureInCelcius;
  };
  return (
    <WeatherContext.Provider
      value={{
        weatherData: weatherResponse,
        cityname: (name) => {
          setcityname(name);
        },
        weather: async () => {
          try {
            console.log(cityname);
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
              console.log(weatherResponse);
              console.log(response.data.weather[0].icon);
            } else {
              console.error("get weather error", response.data.error); //
            }
          } catch (error) {
            console.error("get weather error", error);
          } finally {
          }
        },
      }}
    >
      {props.children}
    </WeatherContext.Provider>
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

export default WeatherProvider;
