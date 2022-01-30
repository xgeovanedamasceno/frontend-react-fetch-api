import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from '..';

describe('Contact Page', () => {
  beforeEach(() => {
    render(<Contact title="Contact Page" />);
  });

  it('should render a Title Component', () => {
    const titleComp = screen.getByRole('heading', { level: 1 });

    expect(titleComp).toBeInTheDocument();
  });

  it('should render Title Component with text "Contact Page"', () => {
    const titleComp = screen.getByRole('heading', { level: 1 });

    expect(titleComp).toHaveTextContent('Contact Page');
  });
});
