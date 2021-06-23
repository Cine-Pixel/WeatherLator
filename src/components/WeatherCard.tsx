import React from "react";
import Spinner from "./Spinner";

import { weatherType } from "../Types";
import { calcWindArrowDirection } from "../utils/calcWindArrowDirection";

interface PropTypes {
  weather: weatherType | undefined;
  loading: boolean;
}

const WeatherCard: React.FC<PropTypes> = ({ weather, loading }) => {
  return !loading && weather ? (
    <div className="weather-card">
      <h1>{weather.location.name},</h1>
      <h1>{weather.location.country}</h1>
      <p className="date-time">{weather.location.localtime}</p>
      <img src={weather.current.condition.icon} alt="weather icon" />
      <h1 className="degree">{weather.current.temp_c}&#176;c</h1>
      <p>{weather.current.condition.text}</p>
      <div className="wind">
        <p>
          {weather.current.wind_dir}&nbsp;
          <i
            className="fas fa-arrow-up"
            style={{
              transform: `rotate(${calcWindArrowDirection(
                weather.current.wind_dir
              )}deg)`,
            }}
          ></i>
          ,&nbsp;
          {weather.current.wind_kph} KPH
        </p>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default WeatherCard;
