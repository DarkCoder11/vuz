import React from 'react';

import {Typography} from '~/components';

import styles from './Champion.module.scss';
import {TChampionProps} from './Champion.types';

const Champion: React.FC<TChampionProps> = ({championImage, onRemove}) => (
  <div className={styles.container}>
    <img src={championImage} width={80} height={80} alt="champ" />
    <div role="button" onClick={onRemove} className={styles.container__remove}>
      <Typography className={styles.container__remove__text}>Remove</Typography>
    </div>
  </div>
);

export default Champion;
