import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';
import StandingsPage from './standings';
import GamesPage from './games';
import PlayersPage from './players';

import './app.scss';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <div id='container'>
          <Route path='/' exact component={PlayersPage} />
          <Route path='/standings' component={StandingsPage} />
          <Route path='/games' component={GamesPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;