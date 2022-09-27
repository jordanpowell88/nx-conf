import styles from './jelly.module.css';

export type JellyFlavor = 'grape' | 'strawberry';

export interface JellyProps {
  flavor: JellyFlavor
  extra?: boolean
}

export function Jelly(props: JellyProps) {
  const style = {
    jelly: props.flavor === 'grape' ? styles['grape'] : styles['strawberry'],
    thickness: props.extra ? styles['extra-thickness'] : styles['thickness']
  }
  return (
    <div data-cy="jelly" className={`${style.jelly} ${style.thickness}`}></div>
  )
}

export default Jelly;
