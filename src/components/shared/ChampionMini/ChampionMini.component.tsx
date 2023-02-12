import React from 'react';

import {Typography} from '~/components';

import styles from './ChampionMini.module.scss';
import {TChampionMiniProps} from './ChampionMini.types';

const ChampionMini: React.FC<TChampionMiniProps> = ({name, charImg}) => (
  <div className={styles.container}>
    <img alt="mini" src={charImg} className={styles.container__image} />
    <Typography className={styles.container__name}>{name}</Typography>
  </div>
);

export default ChampionMini;
