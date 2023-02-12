import React, {HTMLInputTypeAttribute} from 'react';

export type TInputProps = {
  value?: string;
  name: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  labelClassName?: string;
  innerClassName?: string;
  type?: HTMLInputTypeAttribute;
  withRightIcon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
