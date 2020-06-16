import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import List from './list';
import Details from './details';
import Filters from './filters';

import styles from './index.module.scss';

const PlayersPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Filters />
      <div className={styles.container}>
        <List />
        <Route path={path || `${path}/:playerId`}>
          <Details />
        </Route>
      </div>
    </>
  );
};

export default PlayersPage;
