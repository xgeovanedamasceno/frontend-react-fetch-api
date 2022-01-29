import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Nav from '..';
import Anchor from '../../Anchor';

describe('Nav', () => {
  it('should render an nav element with 1 anchor component', () => {
    render(
      <Nav>
        <Anchor url="#exemplo" name="Products" />
      </Nav>
    );

    const links = screen.getByRole('link', { name: 'Products' });

    const navEl = screen.getByRole('navigation');

    expect(navEl).toContainElement(links);
  });

  /* it('should render an nav element with 2 anchor components', () => {
    render(
      <Nav>
        <Anchor url="#exemplo" name="Products" />
        <Anchor url="#exemplo" name="Productz" />
      </Nav>
    );

    const links = screen.getAllByRole('link');

    const navEl = screen.getByRole('navigation');
    expect(links).toHaveLength(1);
  }); */

  it('should render correctly', () => {
    const tree = renderer.create(
      <Nav>
        <Anchor url="#exemplo" name="Products" />
      </Nav>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
