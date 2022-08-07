import { Template } from '../../modules/types/template';
import TemplateGridItem from '../template-grid-item/template-grid-item';
import styles from './template-grid-container.module.scss';

/* eslint-disable-next-line */
export interface TemplateGridContainerProps {}

export function TemplateGridContainer(props: TemplateGridContainerProps) {
  const templates: Template[] = [
    {
      name: 'Impressionism',
      price: 25,
      images: [
        { url: '/gradients/1' },
        { url: '/gradients/1' },
        { url: '/gradients/1' },
      ],
    },
    {
      name: 'Futurism',
      price: 25,
      images: [
        { url: '/gradients/2' },
        { url: '/gradients/2' },
        { url: '/gradients/2' },
      ],
    },
    {
      name: 'Art',
      price: 25,
      images: [
        { url: '/gradients/3' },
        { url: '/gradients/3' },
        { url: '/gradients/3' },
      ],
    },
    {
      name: 'Digital',
      price: 25,
      images: [
        { url: '/gradients/4' },
        { url: '/gradients/4' },
        { url: '/gradients/4' },
      ],
    },
    {
      name: 'Romance',
      price: 25,
      images: [
        { url: '/gradients/5' },
        { url: '/gradients/5' },
        { url: '/gradients/5' },
      ],
    },
    {
      name: 'Impressionism',
      price: 25,
      images: [
        { url: '/gradients/1' },
        { url: '/gradients/1' },
        { url: '/gradients/1' },
      ],
    },
    {
      name: 'Futurism',
      price: 25,
      images: [
        { url: '/gradients/2' },
        { url: '/gradients/2' },
        { url: '/gradients/2' },
      ],
    },
    {
      name: 'Art',
      price: 25,
      images: [
        { url: '/gradients/3' },
        { url: '/gradients/3' },
        { url: '/gradients/3' },
      ],
    },
    {
      name: 'Digital',
      price: 25,
      images: [
        { url: '/gradients/4' },
        { url: '/gradients/4' },
        { url: '/gradients/4' },
      ],
    },
    {
      name: 'Romance',
      price: 25,
      images: [
        { url: '/gradients/5' },
        { url: '/gradients/5' },
        { url: '/gradients/5' },
      ],
    },
  ];
  return (
    <div className={styles['container']}>
      {templates.map((template) => {
        return <TemplateGridItem template={template} />;
      })}
    </div>
  );
}

export default TemplateGridContainer;
