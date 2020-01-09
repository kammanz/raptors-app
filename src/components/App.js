import React from 'react';
import PostPlayers from './PostPlayers';
import PlayerStats from './PlayerStats';

const App= () => {
  return (
    <div className="App">
      <h1>Raptor's App</h1>
      <div id="container">
        <PostPlayers />
        <PlayerStats />
      </div>
    </div>
  );
}

export default App;
