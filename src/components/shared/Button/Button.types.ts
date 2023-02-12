import React from 'react';

type TSize = 'large' | 'medium' | 'small';
type TButtonType = 'submit' | 'reset' | 'button';
type TVariant = 'primary' | 'secondary' | 'ghost';

export type TButtonProps = {
  size?: TSize;
  type?: TButtonType;
  variant?: TVariant;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
};
