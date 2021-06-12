import { render } from '@testing-library/react';

import CoreContainer from './core-container';

describe('CoreContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreContainer />);
    expect(baseElement).toBeTruthy();
  });
});
