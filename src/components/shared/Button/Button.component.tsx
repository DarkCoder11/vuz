import React from 'react';
import classNames from 'classnames';

import {FCC} from '~/types';

import {TButtonProps} from './Button.types';
import styles from './Button.module.scss';

const Button: FCC<TButtonProps> = ({
  onClick,
  children,
  LeftIcon,
  disabled,
  className = '',
  size = 'medium',
  type = 'button',
  variant = 'primary',
}) => {
  const buttonClasses = classNames(
    styles.container,
    styles[`container_${size}`],
    styles[`container_${variant}`],

    {
      [styles.container__left]: !!LeftIcon,
    },
    className,
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}>
      {!!LeftIcon && <LeftIcon />}

      {children}
    </button>
  );
};

export default Button;
