import { useState } from 'react';

const WeatherSearchForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city name"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherSearchForm;
