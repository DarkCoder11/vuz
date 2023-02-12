import React from 'react';

import {ChampionIcon} from '~/assets';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container__logo}>
        <ChampionIcon />
      </div>
    </header>
  );
};

export default Header;
