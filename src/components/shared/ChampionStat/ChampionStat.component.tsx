import React from 'react';

import {Typography} from '~/components';

import styles from './ChampionStat.module.scss';
import {TChampionStatProps} from './ChampionStat.types';

const ChampionStat: React.FC<TChampionStatProps> = ({title, point}) => {
  const formattedPoint = point % 1 !== 0 ? point.toFixed(2) : point;

  return (
    <div className={styles.container}>
      <Typography className={styles.container__title}>{title}</Typography>
      <Typography className={styles.container__point}>
        {!point ? '-' : formattedPoint}
      </Typography>
    </div>
  );
};

export default ChampionStat;
