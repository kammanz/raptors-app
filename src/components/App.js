import React from 'react';
import PlayersList from './PlayersList';
import PlayerDetails from './PlayerDetails';
import '../App.css';

const App= () => {
  return (
    <div className="App">
          <h1>Raptors App 12:49pm</h1>
          <div id="container">
            <PlayersList />
            <PlayerDetails />
          </div>
    </div>
  );
}

export default App;
