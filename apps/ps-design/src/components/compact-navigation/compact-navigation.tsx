import styles from './compact-navigation.module.scss';

/* eslint-disable-next-line */
export interface CompactNavigationProps {}

export function CompactNavigation(props: CompactNavigationProps) {
  return <div className={styles['container']}>
    <a href="#">Home</a>
    <a href="#">Purchase</a>


    <img
        className={styles['nav-logo']}
        src="../assets/PS.png"
        alt="navigation logo"
      />
    <a href="#">About</a>
    <a href="#">Contact</a>

  </div>;
}

export default CompactNavigation;
