import { Template } from '../../modules/types/template';
import styles from './template-grid-item.module.scss';

/* eslint-disable-next-line */
export interface TemplateGridItemProps {
  template: Template;
}

export function TemplateGridItem(props: TemplateGridItemProps) {
  const height = {
    height: 50 + Math.random() * 500,
    backgroundImage: `url(../assets/${props.template.images[0].url}.png)`,
  };
  if (props.template)
    return (
      <div className={styles['container']} style={height}>
        <p>{props.template.name}</p>
      </div>
    );
  throw new Error('Template non défini');
}

export default TemplateGridItem;
