import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import MainContainer from '..';

describe('MainContainer', () => {
  it('should contain the main element when rendering', () => {
    render(<MainContainer />);

    const mainEl = screen.getByRole('main');

    expect(mainEl).toBeInTheDocument();
  });

  it('should render correctely', () => {
    const tree = renderer.create(<MainContainer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
