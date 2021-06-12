import { render } from '@testing-library/react';

import EuContainer from './eu-container';

describe('EuContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EuContainer />);
    expect(baseElement).toBeTruthy();
  });
});
