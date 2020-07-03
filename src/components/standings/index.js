import React from 'react';

import standingsGif from 'assets/gifs/standings.gif';

import styles from './index.module.scss';

const StandingsPage = () => {
  return (
    <div className={styles.container}>
      <p>Still working out the kinks</p>
      <img src={standingsGif} className={styles.img} alt="slam dunk fail" />
      <p>Standings coming soon</p>
    </div>
  );
};

export default StandingsPage;
