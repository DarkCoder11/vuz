import React, {useMemo} from 'react';

import {useCharacters} from '~/context';
import {VerticalLineIcon} from '~/assets';
import {ChampionStat, Typography} from '~/components';

import styles from './ChampionsStats.module.scss';

const ChampionsStats: React.FC = () => {
  const {selectedChampions} = useCharacters();

  const {
    powerAverage,
    energyAverage,
    mobilityAverage,
    techniqueAverage,
    survivabilityAverage,
  } = useMemo(() => {
    let powerSum = 0;
    let mobilitySum = 0;
    let techniqueSum = 0;
    let survivabilitySum = 0;
    let energySum = 0;

    selectedChampions.forEach((champion) => {
      const power = champion.abilities.find(
        (ability) => ability.abilityName === 'Power',
      );
      if (power) {
        powerSum += power.abilityScore;
      }

      const mobility = champion.abilities.find(
        (ability) => ability.abilityName === 'Mobility',
      );
      if (mobility) {
        mobilitySum += mobility.abilityScore;
      }

      const technique = champion.abilities.find(
        (ability) => ability.abilityName === 'Technique',
      );
      if (technique) {
        techniqueSum += technique.abilityScore;
      }

      const survivability = champion.abilities.find(
        (ability) => ability.abilityName === 'Survivability',
      );
      if (survivability) {
        survivabilitySum += survivability.abilityScore;
      }

      const energy = champion.abilities.find(
        (ability) => ability.abilityName === 'Energy',
      );
      if (energy) {
        energySum += energy.abilityScore;
      }
    });

    const numberOfChampions = selectedChampions.length;

    return {
      powerAverage: numberOfChampions ? powerSum / numberOfChampions : 0,
      mobilityAverage: numberOfChampions ? mobilitySum / numberOfChampions : 0,
      techniqueAverage: numberOfChampions
        ? techniqueSum / numberOfChampions
        : 0,
      survivabilityAverage: numberOfChampions
        ? survivabilitySum / numberOfChampions
        : 0,
      energyAverage: numberOfChampions ? energySum / numberOfChampions : 0,
    };
  }, [selectedChampions]);

  return (
    <div className={styles.container}>
      <div className={styles.container__stats}>
        <ChampionStat title="Power" point={powerAverage} />
        <ChampionStat title="Mobility" point={mobilityAverage} />

        <VerticalLineIcon />
        <ChampionStat title="Technique" point={techniqueAverage} />
        <VerticalLineIcon />

        <ChampionStat title="Survivability" point={survivabilityAverage} />
        <ChampionStat title="Energy" point={energyAverage} />
      </div>

      <Typography className={styles.container__info}>
        * Totals as average for squad
      </Typography>
    </div>
  );
};

export default ChampionsStats;
