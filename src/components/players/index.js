import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import List from './list';
import Details from './details';
import Placeholder from './details/placeholder';
import Filters from './filters';

import styles from './index.module.scss';

const PlayersPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Filters />
      <div className={styles.container}>
        <List />
        <Switch>
          <Route exact path={path}>
            <Placeholder />
          </Route>
          <Route path={`${path}/:playerId`}>
            <Details />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default PlayersPage;
