import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockResponse = {
  id: 'notebook',
  fotos: [
    {
      titulo: 'notebook-2',
      src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg'
    },
    {
      titulo: 'smartphone',
      src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone.jpg'
    }
  ],
  nome: 'Notebook',
  preco: '2499.50'
};

const productID = 'notebook';

const productServer = setupServer(
  rest.get(`https://ranekapi.origamid.dev/json/api/produto/${productID}`, (req, res, ctx) => {
    const mockedResponse = res(
      ctx.json(mockResponse)
    );
    return mockedResponse;
  })
);

export default productServer;
