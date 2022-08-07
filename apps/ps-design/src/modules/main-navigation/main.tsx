import CompactNavigation from '../../components/compact-navigation/compact-navigation';
import styles from './main.module.scss';

/* eslint-disable-next-line */
export interface MainProps {}

export function MainNavigation(props: MainProps) {
  return (
    <nav className={styles['container']}>
      <div className={styles['left-container']}>
        <div className={styles['title']}>Artisans du web</div>
        <CompactNavigation />
      </div>
      <img
        className={styles['nav-logo']}
        src="../assets/PS.png"
        alt="navigation logo"
      />
      <div className={styles['secondary-title']}>Templates designers</div>
    </nav>
  );
}

export default MainNavigation;
