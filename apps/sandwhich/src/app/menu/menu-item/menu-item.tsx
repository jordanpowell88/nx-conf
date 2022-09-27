import styles from './menu-item.module.css';

export interface MenuItemProps {
  label: string,
  options: string[],
  valueChange: (v: string) => void
}

export function MenuItem(props: MenuItemProps) {
  const { label, options, valueChange } = props;

  return (
    <div className={styles['container']}>
      <label>{label}</label>
      <select onChange={e => valueChange(e.target.value)}>
        <option></option>
        {options.map((option) => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
}

export default MenuItem;
