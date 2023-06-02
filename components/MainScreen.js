import React, { useState, useEffect } from 'react';

const MainScreen = ({ setShowSummary }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  const handleShowSummary = (summary) => {
    setShowSummary(summary);
  };

  return (
    <div>
      <h1>Show List</h1>
      {shows.map(show => (
        <div key={show.show.id}>
          <h2>{show.show.name}</h2>
          <p>{show.show.summary}</p>
          <button onClick={() => handleShowSummary(show.show.summary)}>Show Summary</button>
        </div>
      ))}
    </div>
  );
};

export default MainScreen;
