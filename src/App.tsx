import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

import { weatherType } from "./Types";
import Search from "./components/Search";

const App: React.FC = () => {
  const [weather, setWeather] = useState<weatherType>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getCity = (city: string): void => {
    setLoading(true);
    fetch("/api/" + city)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setWeather(data);
          setLoading(false);
        } else setError(true);
      });
  };

  useEffect(() => {
    if (error) return;
    if (!weather?.current) return;
    if (weather?.current.condition.text === "Sunny") {
      document.body.classList.add("sunny");
      document.body.classList.remove("cloudy");
    } else {
      document.body.classList.remove("sunny");
      document.body.classList.add("cloudy");
    }
  }, [weather, error]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Search getCity={getCity} />
      <WeatherCard weather={weather} loading={loading} />
    </div>
  );
};

export default App;
