import { useState } from 'react';
import styles from './menu-checkbox.module.css';

export interface MenuCheckboxProps {
  label: string;
  valueChange: (v: boolean) => void;
}

export function MenuCheckbox(props: MenuCheckboxProps) {
  const { label, valueChange } = props;
  const [value, setValue] = useState<boolean>(false);

  const handleExtraChange = () => {
    valueChange(!value);
    setValue(!value);
  };

  return (
    <div className={styles['container']}>
      <label htmlFor="extra">{label}</label>
      <input
        id="extra"
        name="extra"
        type="checkbox"
        value="extra"
        onChange={handleExtraChange}
      />
    </div>
  );
}

export default MenuCheckbox;
