import React from 'react';
import lebron from 'assets/gifs/lebron.gif';

import styles from './index.module.scss';

const GamesPage = () => {
  return (
    <div className={styles.container}>
      <p>Still working out the kinks</p>
      <img src={lebron} className={styles.img} />
      <p>Games coming soon</p>
    </div>
  );
};

export default GamesPage;
