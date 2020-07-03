import React from 'react';

import gamesGif from 'assets/gifs/games.gif';

import styles from './index.module.scss';

const GamesPage = () => {
  return (
    <div className={styles.container}>
      <p>Still working out the kinks</p>
      <img src={gamesGif} className={styles.img} alt="slame dunk gif" />
      <p>Games coming soon</p>
    </div>
  );
};

export default GamesPage;
