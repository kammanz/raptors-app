import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';
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
            <div>hello world</div>
            <Route path="/" exact component={PlayersPage}/>
            <Route path="/standings" component={StandingsPage} />
            <Route path="/games" component={GamesPage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
