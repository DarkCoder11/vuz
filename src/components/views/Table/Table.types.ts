import {TCharacter} from '~/context';

export type TName = {
  id: number;
  name: string;
};

export type TTableHeaderProps = {
  columns: TName[];
};

export type TTableBodyProps = {
  data: TCharacter[];
};

export type TTableProps = TTableBodyProps & {
  selectedDataItems: number[];
};
