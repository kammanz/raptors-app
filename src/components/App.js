import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Filters from './Filters';
import StandingsPage from './standings/StandingsPage';
import GamesPage from './games/GamesPage';
import PlayersPage from './players/PlayersPage';

import '../scss/App.scss';

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
