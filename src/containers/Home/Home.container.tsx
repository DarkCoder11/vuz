import React from 'react';

import {CharactersProvider} from '~/context';
import {Champions, Filters, Header, Search, Table} from '~/components';

const HomeContainer: React.FC = () => (
  <CharactersProvider>
    <section>
      <Header />
      <Champions />

      <Search />
      <Filters />

      <Table />
    </section>
  </CharactersProvider>
);

export default HomeContainer;
