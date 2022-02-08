import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Product from '..';
import productServer from '../../../__mocks__/product-server';

describe('Product', () => {
  beforeEach(() => {
    render(<Product />);
  });

  beforeAll(() => productServer.listen());
  afterAll(() => productServer.close());

  it('should render an img', async () => {
    const imgEl = await screen.findByRole('img');
    screen.debug();
    expect(imgEl).toBeInTheDocument();
  });
});
