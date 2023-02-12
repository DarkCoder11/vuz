import React, {useMemo} from 'react';

import {Button, Tag} from '~/components';
import {useCharacters} from '~/context';

import styles from './Filters.module.scss';

const Filters: React.FC = () => {
  const {filterTags, onFilter, onClearFilter} = useCharacters();

  const renderFilterTags = useMemo(
    () =>
      filterTags.map(({tag_name, selected}) => (
        <Tag
          isSelectable
          key={tag_name}
          child={tag_name}
          selected={selected}
          onTagClick={() => onFilter(tag_name)}
        />
      )),
    [filterTags, onFilter],
  );

  return (
    <div className={styles.container}>
      {renderFilterTags}

      <Button
        variant="ghost"
        onClick={onClearFilter}
        className={styles.container__clear}>
        Clear all
      </Button>
    </div>
  );
};

export default Filters;
