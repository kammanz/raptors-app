import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Games from './games';
import Players from './players';
import Standings from './standings';

const Routes = ({ urlName }) => (
  <Switch>
    <Route exact path="/">
      <Redirect to={`/${urlName}/players`} />
    </Route>
    <Route exact path="/:id">
      <Redirect to={`/${urlName}/players`} />
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

const mapStateToProps = ({
  teams: {
    selectedTeam: { urlName },
  },
}) => urlName;

Routes.propTypes = {
  urlName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Routes);
