import { render } from '@testing-library/react';

import FrContainer from './fr-container';

describe('FrContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrContainer />);
    expect(baseElement).toBeTruthy();
  });
});
