import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlayersList from './PlayersList';
import PlayerDetails from './PlayerDetails';
import '../App.css';


const PageOne = () => {
  return <div>
    <h3>PageOne</h3>
    
  </div>;
}

const PageTwo = () => {
  return <div>PageTwo<button>click me</button></div>;
}

const App= () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ PageOne } />
          <Route path="/pagetwo" component={ PageTwo } />
          <h1>Raptors App</h1>
          <div id="container">
            <PlayersList />
            <PlayerDetails />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
