import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Games from './games';
import Players from './players';
import Standings from './standings';

const Routes = ({ selectedTeam }) => (
  <Switch>
    <Route exact path="/">
      <Redirect to={`/${selectedTeam.urlName}/players`} />
    </Route>
    <Route exact path="/:id">
      <Redirect to={`/${selectedTeam.urlName}/players`} />
    </Route>
    <Route path="/:id/players">
      <Players />
    </Route>
    <Route path="/:id/standings">
      <Standings />
    </Route>
    <Route path="/:id/games">
      <Games />
    </Route>
  </Switch>
);

const mapStateToProps = ({ teams: { selectedTeam } }) => {
  return {
    selectedTeam,
  };
};

Routes.propTypes = {
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Routes);
