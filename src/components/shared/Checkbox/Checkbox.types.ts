import {ChangeEvent, FormEvent} from 'react';

export type TCheckboxProps = {
  name: string;
  value?: boolean;
  disabled?: boolean;
  className?: string;
  useCustomOnChange?: boolean;
  customOnChange?: (event: ChangeEvent) => void;
  onChange?: (event: FormEvent<HTMLInputElement> | boolean) => void;
};
