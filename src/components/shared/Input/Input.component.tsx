import React from 'react';
import classNames from 'classnames';

import {SearchIcon} from '~/assets';

import styles from './Input.module.scss';
import {TInputProps} from './Input.types';

const Input: React.FC<TInputProps> = ({
  name,
  disabled,
  withRightIcon,
  placeholder,
  type = 'text',
  className = '',
  innerClassName = '',
  ...rest
}) => {
  const inputClasses = classNames(styles.container, className, {
    [styles.container_with_icon]: !!withRightIcon,
  });

  const inputInnerClasses = classNames(styles.container__inner, {
    [innerClassName]: innerClassName,
    [styles.container__inner_disabled]: disabled,
  });

  return (
    <div className={inputInnerClasses}>
      <input
        {...rest}
        id={name}
        name={name}
        autoComplete="off"
        disabled={disabled}
        className={inputClasses}
        placeholder={placeholder}
        type={type}
      />
      {withRightIcon && (
        <div className={styles.icon}>
          <SearchIcon />
        </div>
      )}
    </div>
  );
};

export default Input;
