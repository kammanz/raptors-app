import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import StandingsPage from './standings';
import GamesPage from './games';
import PlayersPage from './players';

const Routes = ({ selectedTeam }) => {
  console.log(selectedTeam.urlName);
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={`/${selectedTeam.urlName}/players`} />
      </Route>
      <Route exact path="/:id">
        <Redirect to={`/${selectedTeam.urlName}/players`} />
      </Route>
      <Route path="/:id/players">
        <PlayersPage />
      </Route>
      <Route path="/:id/standings">
        <StandingsPage />
      </Route>
      <Route path="/:id/games">
        <GamesPage />
      </Route>
    </Switch>
  );
};

const mapStateToProps = ({ selectedTeam }) => {
  return {
    selectedTeam,
  };
};

export default connect(mapStateToProps)(Routes);
