import TemplateGridContainer from '../../components/template-grid-container/template-grid-container';
import styles from './homepage.module.scss';

/* eslint-disable-next-line */
export interface HomepageProps {}

export function Homepage(props: HomepageProps) {
  return (
    <div className={styles['container']}>
      <TemplateGridContainer />
    </div>
  );
}

export default Homepage;
