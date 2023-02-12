import React from 'react';

import styles from './Table.module.scss';
import TableRow from './TableRow.component';
import {TTableBodyProps} from './Table.types';

const TableBody: React.FC<TTableBodyProps> = ({data}) => {
  const bodyRenderer = data.map(({id, ...rest}) => (
    <TableRow key={id} id={id} {...rest} />
  ));

  return (
    <div className={styles.container__body}>
      <div className={styles.container__body__content}>{bodyRenderer}</div>
    </div>
  );
};

export default TableBody;
