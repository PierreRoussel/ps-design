import { render } from '@testing-library/react';

import CompactNavigation from './compact-navigation';

describe('CompactNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompactNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
