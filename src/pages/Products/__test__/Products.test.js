import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Products from '..';

describe('Products', () => {
  beforeEach(() => {
    render(<Products title="Products Page" />);
  });

  it('should contain a Title Component', () => {
    const titleComp = screen.getByRole('heading', { level: 1 });

    expect(titleComp).toBeInTheDocument();
  });

  it('should render title component with text "Products Page"', () => {
    const titleComp = screen.getByRole('heading', { level: 1 });

    expect(titleComp).toHaveTextContent('Products Page');
  });
});
