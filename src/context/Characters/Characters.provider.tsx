import {filter, find} from 'lodash';
import React, {useCallback, useState} from 'react';

import {TCharacter} from './Characters.types';
import {CharactersContext} from './Characters.context';
import {CharactersData, CharacterTags} from './Characters.constants';

export const CharactersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [filterTags, setFilterTags] = useState(CharacterTags);
  const [characters, setCharacters] = useState<TCharacter[]>(CharactersData);
  const [selectedChampions, setSelectedChampions] = useState<TCharacter[]>([]);
  const [searchedValue, setSearchedValue] = useState('');

  const handleSearch = useCallback(
    (searchValue: string) => {
      const searchCharactersResult = filter(CharactersData, (char) =>
        char.name.toLowerCase().includes(searchValue),
      );

      setSearchedValue(searchValue);
      setCharacters(
        !searchCharactersResult.length ? characters : searchCharactersResult,
      );
    },
    [characters],
  );

  const handleSelectChampion = useCallback(
    (selectedChampionId: number, checked: boolean) => {
      if (!checked) {
        const filteredChampions = filter(
          selectedChampions,
          (selectedChampion) => selectedChampion.id !== selectedChampionId,
        );

        setSelectedChampions(filteredChampions);
      } else {
        const selectedChampion = find(CharactersData, {id: selectedChampionId});

        if (selectedChampion) {
          setSelectedChampions((prevSelectedChampions) => [
            ...prevSelectedChampions,
            selectedChampion,
          ]);
        }
      }
    },
    [selectedChampions],
  );

  const handleFilterTags = useCallback(
    (tagName: string) => {
      const updatedFilterTags = filterTags.map((filterTag) => {
        if (filterTag.tag_name === tagName) {
          return {
            ...filterTag,
            selected: !filterTag.selected,
          };
        }

        return filterTag;
      });

      const selectedFilterTagNames = filter(
        updatedFilterTags,
        (filterTag) => filterTag.selected,
      ).map((filterTag) => filterTag.tag_name);

      const filteredCharacters = filter(CharactersData, (character) =>
        character.tags?.some((filterTag) =>
          selectedFilterTagNames.includes(filterTag.tag_name),
        ),
      ) as TCharacter[];

      if (!filteredCharacters.length) {
        handleSearch(searchedValue);
      } else {
        setCharacters(filteredCharacters);
      }

      setFilterTags(updatedFilterTags);
    },
    [filterTags, handleSearch, searchedValue],
  );

  const handleClearAllFilterTags = useCallback(() => {
    setFilterTags(CharacterTags);
    setCharacters(CharactersData);
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        filterTags,
        characters,
        selectedChampions,
        onSearch: handleSearch,
        onFilter: handleFilterTags,
        onClearFilter: handleClearAllFilterTags,
        onSelectedChampion: handleSelectChampion,
      }}>
      {children}
    </CharactersContext.Provider>
  );
};
