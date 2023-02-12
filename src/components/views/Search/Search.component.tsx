import React from 'react';

import {LineIcon} from '~/assets';
import {Input} from '~/components';
import {useCharacters} from '~/context';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const {onSearch} = useCharacters();

  return (
    <div className={styles.container}>
      <LineIcon className={styles.container__icon} />
      <Input
        name="input"
        withRightIcon
        placeholder="Search Characters..."
        innerClassName={styles.container__input}
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
