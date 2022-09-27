import styles from './bread.module.css';

export function Bread() {
  return (
    <div data-cy="bread" className={styles['slice']}>
    </div>
  );
}

export default Bread;
