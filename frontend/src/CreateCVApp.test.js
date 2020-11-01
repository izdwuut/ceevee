import React from 'react';
import { render } from '@testing-library/react';
import CreateCVApp from './index';

test('renders learn react link', () => {
  const { getByText } = render(<CreateCVApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
