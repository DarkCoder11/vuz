import {find} from 'lodash';
import classNames from 'classnames';
import React, {useEffect, useMemo, useState} from 'react';

import {TCharacter, useCharacters} from '~/context';
import {Tag, Checkbox, Typography, ChampionMini} from '~/components';

import styles from './Table.module.scss';

const TableRow: React.FC<TCharacter> = ({
  id,
  name,
  tags,
  abilities,
  thumbnail,
}) => {
  const {onSelectedChampion, selectedChampions} = useCharacters();
  const [isChecked, setIsChecked] = useState(false);

  const itemClasses = classNames(styles.container__body__content__item, {
    [styles.container__body__content__item_selected]: isChecked,
  });

  const renderAbilities = useMemo(
    () =>
      abilities.map((ability, index) => {
        const abilityClasses = classNames(
          styles.container__body__content__stats,
          {
            [styles.container__body__content__stats_max]:
              ability.abilityScore >= 10,
          },
        );

        return (
          <Typography
            key={`${ability.abilityName}/${index}`}
            className={abilityClasses}>
            {ability.abilityScore}
          </Typography>
        );
      }),
    [abilities],
  );

  const renderTags = useMemo(
    () =>
      tags?.map((tag) => (
        <Tag key={tag.slot} isSelectable={false} child={tag.tag_name} />
      )),
    [tags],
  );

  useEffect(() => {
    const updatedSelectedChampions = find(selectedChampions, {id});

    if (!updatedSelectedChampions && isChecked) {
      setIsChecked(false);
    }
  }, [id, isChecked, selectedChampions]);

  const handleChange = () => {
    const updatedIsChecked = !isChecked;

    onSelectedChampion(id, updatedIsChecked);
    setIsChecked(updatedIsChecked);
  };

  return (
    <div className={itemClasses}>
      <div className={styles.container__body__content__row}>
        <Checkbox
          name={name}
          value={isChecked}
          onChange={handleChange}
          disabled={selectedChampions.length === 6 && !isChecked}
        />
        <ChampionMini name={name} charImg={thumbnail} />
      </div>
      <div className={styles.container__body__content__tags}>{renderTags}</div>
      {renderAbilities}
    </div>
  );
};

export default TableRow;
