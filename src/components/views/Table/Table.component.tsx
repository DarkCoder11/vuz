import React from 'react';

import {useCharacters} from '~/context';

import styles from './Table.module.scss';
import {columns} from './Table.constants';
import TableBody from './TableBody.component';
import TableHeader from './TableHeader.component';

const Table: React.FC = () => {
  const {characters} = useCharacters();

  return (
    <div className={styles.container}>
      <TableHeader columns={columns} />
      <div className={styles.container__body}>
        <TableBody data={characters} />
      </div>
    </div>
  );
};

export default Table;
