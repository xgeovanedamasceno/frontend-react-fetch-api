import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '..';

describe('Home', () => {
  beforeEach(() => {
    render(<Home title="React Fetch API" subtitle="Some Text" />);
  });

  it('should render Title component', () => {
    const h1El = screen.getByRole('heading', { level: 1 });

    expect(h1El).toBeInTheDocument();
  });

  it('should render Subtitle component', () => {
    const h2El = screen.getByRole('heading', { level: 2 });

    expect(h2El).toBeInTheDocument();
  });
});
