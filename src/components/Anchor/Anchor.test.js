import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Anchor from '.';

describe('Anchor', () => {
  beforeEach(() => {
    render(<Anchor url="#exemplo" name="Products" />);
  });

  it('should render an anchor element with the text "Products"', () => {
    const anchorEl = screen.getByRole('link', { name: 'Products' });

    expect(anchorEl).toBeInTheDocument();
  });

  it('should render an anchor element with href value "#exemplo"', () => {
    const anchorEl = screen.getByRole('link', { name: 'Products' });

    expect(anchorEl).toHaveAttribute('href', '#exemplo');
  });

  it('should render an anchor element with background-color: #F6F8FA', () => {
    // Snapshot tests?
  });
});
