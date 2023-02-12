export type TAbility = {
  abilityName: string;
  abilityScore: number;
};

export type TTag = {
  slot: number;
  tag_name: string;
};

export type TFilterTag = TTag & {
  selected: boolean;
};

export type TCharacter = {
  id: number;
  name: string;
  quote?: string;
  tags?: TTag[];
  image: string;
  universe: string;
  thumbnail?: string;
  abilities: TAbility[];
};

export type TCharactersContext = {
  filterTags: TFilterTag[];
  characters: TCharacter[];
  selectedChampions: TCharacter[];
  onClearFilter: () => void;
  onFilter: (tagName: string) => void;
  onSearch: (searchValue: string) => void;
  onSelectedChampion: (selectedChampionId: number, checked: boolean) => void;
};
