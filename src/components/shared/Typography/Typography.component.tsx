import React from 'react';

import {FCC} from '~/types';

import {TTypographyProps} from './Typography.types';

const Typography: FCC<TTypographyProps> = ({
  children,
  tagName = 'p',
  className = '',
  ...rest
}) => {
  const Tag = tagName;

  return (
    <Tag {...rest} className={className}>
      {children}
    </Tag>
  );
};

export default Typography;
