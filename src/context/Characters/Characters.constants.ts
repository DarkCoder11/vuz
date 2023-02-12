import {uniqBy} from 'lodash';

import CharactersData from './characters.json';
import {TFilterTag} from './Characters.types';

export const CharacterTags = uniqBy(
  CharactersData.reduce<TFilterTag[]>((acc, curVal) => {
    let prevAcc = [...acc];

    if (curVal.tags) {
      const tagsWithSelected = curVal.tags.map((tag) => ({
        ...tag,
        selected: false,
      }));
      prevAcc = [...prevAcc, ...tagsWithSelected];
    }

    return prevAcc;
  }, []),
  'tag_name',
);

export {CharactersData};
