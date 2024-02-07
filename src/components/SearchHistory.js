const SearchHistory = ({ searchHistory, fetchWeather, setSearchHistory }) => {
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div>
      <h3>Search History</h3>
      {searchHistory.map((city, index) => (
        <button key={index} onClick={() => fetchWeather(city)}>
          {city}
        </button>
      ))}
      <button onClick={clearSearchHistory}>Clear History</button>
    </div>
  );
};

export default SearchHistory;
