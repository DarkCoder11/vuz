import {noop} from 'lodash';
import {createContext, useContext} from 'react';

import {TCharactersContext} from './Characters.types';
import {CharactersData, CharacterTags} from './Characters.constants';

export const CharactersContext = createContext<TCharactersContext>({
  onSearch: noop,
  onFilter: noop,
  onClearFilter: noop,
  selectedChampions: [],
  onSelectedChampion: noop,
  filterTags: CharacterTags,
  characters: CharactersData,
});

export const useCharacters = () => useContext(CharactersContext);
