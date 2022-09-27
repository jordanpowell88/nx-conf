import styles from './peanut-butter.module.css';

export type PeanutButterType = 'crunchy' | 'creamy';

export interface PeanutButterProps {
  type: PeanutButterType
  extra?: boolean
}

export function PeanutButter(props: PeanutButterProps) {
  const style = {
    pb: props.type === 'crunchy' ? styles['crunchy'] : styles['creamy'],
    thickness: props.extra ? styles['extra-thickness'] : styles['thickness']
  }
  return (
    <div data-cy="pb" className={`${style.pb} ${style.thickness}`}>
    </div>
  );
}

export default PeanutButter;
