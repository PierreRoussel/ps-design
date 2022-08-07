import { render } from '@testing-library/react';

import Main from './main';

describe('MainNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
