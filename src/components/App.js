import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Filters from './filters';
import StandingsPage from './standings/standingsPage';
import GamesPage from './games/gamesPage';
import PlayersPage from './players/playersPage';

import '../scss/App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter >
        <Header/>
        <Filters/>
        <div id="container">
            <Route path="/" exact component={PlayersPage} />
            <Route path="/standings" component={StandingsPage} />
            <Route path="/games" component={GamesPage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
