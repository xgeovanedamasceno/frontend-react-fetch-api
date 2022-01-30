import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from '..';

describe('Home', () => {
  beforeEach(() => {
    render(<Title>React Fetch API</Title>);
  });

  it('should render a h1 element', () => {
    const h1El = screen.getByRole('heading', { level: 1 });

    expect(h1El).toBeInTheDocument();
  });

  it('should render a h1 element with text React Fetch API', () => {
    const h1El = screen.getByRole('heading', { level: 1 });

    expect(h1El).toHaveTextContent('React Fetch API');
  });
});
