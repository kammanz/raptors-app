import React from 'react';

import List from './list';
import Details from './details';
import Filters from './filters';

import styles from './index.module.scss';

const PlayersPage = () => {
  return (
    <>
      <Filters />
      <div className={styles.container}>
        <List />
        <Details />
      </div>
    </>
  );
};

export default PlayersPage;