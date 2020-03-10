import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header-temp';
import Filters from './filters';
import StandingsPage from './standings/standingsPage-temp';
import GamesPage from './games/gamesPage-temp';
import PlayersPage from './players/playersPage-temp';

import './app.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL} >
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
