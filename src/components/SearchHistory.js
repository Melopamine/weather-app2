const SearchHistory = ({ searchHistory, onHistoryClick, onClearHistory }) => {
  const clearSearchHistory = () => {
    onClearHistory();
  };

  return (
    <div>
      <h3>Search History</h3>
      {searchHistory.map((city, index) => (
        <button key={index} onClick={() => onHistoryClick(city)}>
          {city}
        </button>
      ))}
      <button onClick={clearSearchHistory}>Clear History</button>
    </div>
  );
};

export default SearchHistory;
