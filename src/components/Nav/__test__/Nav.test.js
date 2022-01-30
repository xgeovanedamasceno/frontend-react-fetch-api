import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';
import Nav from '..';

function MockNav() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

describe('Nav', () => {
  it('should render a nav element', () => {
    render(<MockNav />);

    const navEl = screen.getByRole('navigation');

    expect(navEl).toBeInTheDocument();
  });
});
