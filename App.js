import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import SummaryScreen from './components/SummaryScreen';

const App = () => {
  const [summary, setSummary] = useState('');

  const handleShowSummary = (summary) => {
    setSummary(summary);
  };

  return (
    <div>
      {summary ? (
        <SummaryScreen summary={summary} />
      ) : (
        <MainScreen setShowSummary={handleShowSummary} />
      )}
    </div>
  );
};

export default App;
