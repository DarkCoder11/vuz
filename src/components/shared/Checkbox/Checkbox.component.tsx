import {FCC} from '~/types';

import styles from './Checkbox.module.scss';
import {TCheckboxProps} from './Checkbox.types';

const Checkbox: FCC<TCheckboxProps> = ({
  name,
  value,
  children,
  disabled,
  useCustomOnChange,
  onChange = () => null,
}) => (
  <label htmlFor={name} className={styles.container}>
    <div className={styles.container__wrapper}>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={value}
        autoComplete="off"
        disabled={disabled}
        className={styles.container__input}
        onChange={(event) =>
          onChange(useCustomOnChange ? event : event.target.checked)
        }
      />
      <span className={styles.container__after} />
    </div>

    {children}
  </label>
);

export default Checkbox;
