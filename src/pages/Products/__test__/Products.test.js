import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import server from '../../../__mocks__/server';
import Products from '..';

function MockProducts() {
  return (
    <BrowserRouter>
      <Products title="Products Page" />
    </BrowserRouter>
  );
}

describe('Products', () => {
  beforeEach(() => {
    render(<MockProducts />);
  });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should contain a Title Component', () => {
    const titleComp = screen.getByRole('heading', { level: 1 });

    expect(titleComp).toBeInTheDocument();
  });

  it('should render title component with text "Products Page"', () => {
    const titleComp = screen.getByRole('heading', { level: 1 });

    expect(titleComp).toHaveTextContent('Products Page');
  });

  it('should render 9 fetched data items', async () => {
    const listItemsEl = await screen.findAllByRole('listitem');
    screen.debug();

    expect(listItemsEl.length).toBe(9);
  });

  it('should render 9 fetched data imgs', async () => {
    const listImgs = await screen.findAllByRole('img');

    expect(listImgs.length).toBe(9);
  });

  it('should render 9 fetched data imgs', async () => {
    const listH2El = await screen.findAllByRole('heading', { level: 2 });

    expect(listH2El.length).toBe(9);
  });

  it('should render 9 fetched data imgs', async () => {
    const listParagraphsEl = await screen.findAllByRole('heading', { level: 2 });

    expect(listParagraphsEl.length).toBe(9);
  });

  it('should render 9 fetched data imgs', async () => {
    const listParagraphsEl = await screen.findAllByRole('heading', { level: 2 });

    expect(listParagraphsEl.length).toBe(9);
  });
});
