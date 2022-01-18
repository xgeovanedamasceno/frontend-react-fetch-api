import { render, screen } from '@testing-library/react';
import App from './index';

test('render App with a heading', () => {
    render(<App />);
    
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();

});

test('render App with a text "Hello World"', () => {
    render(<App />);

    const textHeading = screen.getByText(/Hello World/i);

    expect(textHeading).toBeInTheDocument();
})
