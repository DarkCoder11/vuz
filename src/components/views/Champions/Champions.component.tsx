import React, {useMemo} from 'react';

import {useCharacters} from '~/context';
import {Champion, Typography, ChampionsStats} from '~/components';

import styles from './Champions.module.scss';

const Champions: React.FC = () => {
  const {selectedChampions, onSelectedChampion} = useCharacters();

  const renderChampions = useMemo(
    () =>
      selectedChampions.map(({id, thumbnail}) => (
        <Champion
          key={id}
          championImage={thumbnail}
          onRemove={() => onSelectedChampion(id, false)}
        />
      )),
    [onSelectedChampion, selectedChampions],
  );

  return (
    <div className={styles.container}>
      <Typography tagName="h2">Your champions!</Typography>

      <div className={styles.container__champions}>{renderChampions}</div>

      <ChampionsStats />
    </div>
  );
};

export default Champions;
