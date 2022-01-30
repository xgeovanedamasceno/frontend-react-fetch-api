import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Subtitle from '..';

describe('Subtitle', () => {
  beforeEach(() => {
    render(<Subtitle>Some Text</Subtitle>);
  });

  it('should render a h2 element', () => {
    const h2El = screen.getByRole('heading', { level: 2 });

    expect(h2El).toBeInTheDocument();
  });

  it('should render h2 element with text "Some Text"', () => {
    const h2El = screen.getByRole('heading', { level: 2 });

    expect(h2El).toHaveTextContent('Some Text');
  });
});
