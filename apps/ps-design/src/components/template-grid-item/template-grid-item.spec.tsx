import { render } from '@testing-library/react';

import TemplateGridItem from './template-grid-item';

describe('TemplateGridItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateGridItem />);
    expect(baseElement).toBeTruthy();
  });
});
