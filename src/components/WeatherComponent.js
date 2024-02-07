import { useState } from 'react';
import WeatherSearchForm from './WeatherSearchForm';
import WeatherDisplay from './WeatherDisplay';
import SearchHistory from './SearchHistory';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const fetchWeather = (city) => {
    if (!city) return;

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        setWeather(resJson);
        if (!searchHistory.includes(city)) {
          setSearchHistory([...searchHistory, city]);
        }
      })
      .catch(error => {
        console.error("Failed to fetch weather data:", error);
      });
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div>
      <WeatherSearchForm onSubmit={fetchWeather} />
      {weather && <WeatherDisplay weather={weather} />}
      <SearchHistory
        searchHistory={searchHistory}
        onHistoryClick={fetchWeather}
        onClearHistory={clearSearchHistory}
      />
    </div>
  );
};

export default WeatherComponent;
