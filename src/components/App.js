import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../scss/App.scss';
import Header from './Header';
import StandingsPage from './standings/StandingsPage';
import GamesPage from './games/GamesPage';
import PlayersPage from './players/PlayersPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter >
        <Header/>
        <div id="container">
            <Route to="/" exact component={PlayersPage} />
            <Route to="/standings" component={StandingsPage} />
            <Route to="/games" component={GamesPage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
