import React from 'react';

import lebron from 'assets/gifs/lebron.gif';

import styles from './index.module.scss';

const StandingsPage = () => {
  return (
    <div className={styles.container}>
      <p>Still working out the kinks</p>
      <img src={lebron} className={styles.img} />
      <p>Standings coming soon</p>
    </div>
  );
};

export default StandingsPage;
