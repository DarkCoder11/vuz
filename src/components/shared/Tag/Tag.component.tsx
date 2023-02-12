import React from 'react';
import classNames from 'classnames';

import {CheckIcon} from '~/assets';
import {Typography} from '~/components';

import styles from './Tag.module.scss';
import {TTagProps} from './Tag.types';

const Tag: React.FC<TTagProps> = ({
  child,
  selected,
  isSelectable,
  onTagClick,
}) => {
  const toggleSelect = () => {
    if (isSelectable && onTagClick) {
      onTagClick();
    }
  };

  const containerClasses = classNames(styles.container, {
    [styles.container_selected]: selected,
  });

  return (
    <div className={containerClasses} onClick={toggleSelect}>
      {selected && <CheckIcon />}
      <Typography tagName="span" className={styles.container__tag}>
        {child}
      </Typography>
    </div>
  );
};

export default Tag;
