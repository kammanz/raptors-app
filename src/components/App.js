import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlayersList from './players/PlayersList';
import PlayerDetails from './players/PlayerDetails';
import '../App.css';
import Header from './Header';
import StandingsPage from './standings/StandingsPage';
import GamePage from './games/GamePage';
import PlayersPage from './players/PlayersPage';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter >
        <Header/>
        <div id="container">
            {/* <Route path="/" exact component={PlayersList}/>
            <Route path="/" exact component={PlayerDetails} /> */}
            <Route path="/" exact component={PlayersPage} />
            <Route path="/standings" component={StandingsPage} />
            <Route path="/games" component={GamePage} />
        </div>
      </BrowserRouter>
          
    </div>
  );
}

export default App;
