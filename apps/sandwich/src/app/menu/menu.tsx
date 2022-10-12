import { JellyFlavor } from '../jelly/jelly';
import { PeanutButterType } from '../peanut-butter/peanut-butter';
import MenuCheckbox from './menu-checkbox/menu-checkbox';
import MenuItem from './menu-item/menu-item';
import styles from './menu.module.css';

export interface MenuProps {
  peanutButterChange(type: PeanutButterType): void;
  jellyChange(flavor: JellyFlavor): void;
  extraChange(extra: boolean): void;
}

export function Menu(props: MenuProps) {
  const { peanutButterChange, jellyChange, extraChange } = props;
  const peanutButterOptions = ['crunchy', 'creamy'];
  const jellyOptions = ['grape', 'strawberry'];

  return (
    <div className={styles['container']}>
      <h3>Sandwhich Menu</h3>
      <MenuItem
        data-cy="pb"
        label="Peanut Butter"
        options={peanutButterOptions}
        valueChange={(pb) => peanutButterChange(pb as PeanutButterType)}
      />
      <MenuItem
        data-cy="jelly"
        label="Jelly"
        options={jellyOptions}
        valueChange={(j) => jellyChange(j as JellyFlavor)}
      />
      <MenuCheckbox data-cy="extra" label="Extra" valueChange={extraChange} />
      <hr />
    </div>
  );
}

export default Menu;
