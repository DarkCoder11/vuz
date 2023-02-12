import React from 'react';

import styles from './Table.module.scss';
import {TTableHeaderProps} from './Table.types';

const TableHeader: React.FC<TTableHeaderProps> = ({columns}) => {
  const tableHeader = columns.map(({name}) => (
    <div className={styles.header__item} key={name}>
      {name}
    </div>
  ));

  return <div className={styles.header}>{tableHeader}</div>;
};

export default TableHeader;
