import React from 'react';
import PlayersList from './PlayersList';
import PlayerStats from './PlayerStats';
import '../App.css';

const App= () => {
  return (
    <div className="App">
      <h1>Raptor's App</h1>
      <div id="container">
        <PlayersList />
        <PlayerStats />
      </div>
    </div>
  );
}

export default App;
