import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlayersList from './PlayersList';
import PlayerDetails from './PlayerDetails';
import '../App.scss';
import Header from './Header';
import TeamPage from './TeamPage';
import GamePage from './GamePage';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter >
        <Header/>
        <div id="container">
            <Route path="/" exact component={PlayersList}/>
            <Route path="/" exact component={PlayerDetails} />
            <Route path="/teams" component={TeamPage} />
            <Route path="/games" component={GamePage} />
        </div>
      </BrowserRouter>
          
    </div>
  );
}

export default App;
