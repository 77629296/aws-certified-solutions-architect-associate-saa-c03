import { render } from '@testing-library/react';

import Login from './Login';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Login />);
    expect(getByText(/Login/gi)).toBeTruthy();
  });
});
