import { render } from '@testing-library/react';

import TemplateGridContainer from './template-grid-container';

describe('TemplateGridContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateGridContainer />);
    expect(baseElement).toBeTruthy();
  });
});
