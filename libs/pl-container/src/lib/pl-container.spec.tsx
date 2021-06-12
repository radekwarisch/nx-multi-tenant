import { render } from '@testing-library/react';

import PlContainer from './pl-container';

describe('PlContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlContainer />);
    expect(baseElement).toBeTruthy();
  });
});
