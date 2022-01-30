import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockResponse = [
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  },
  {
    id: 'notebook-1',
    fotos: [
      {
        titulo: 'notebook-1',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook'
      },
      {
        titulo: 'smartwatch-3',
        src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwa'
      }
    ],
    nome: 'Notebook',
    preco: '2300'
  }
];

const server = setupServer(
  rest.get('https://ranekapi.origamid.dev/json/api/produto', (req, res, ctx) => {
    const mockedResponse = res(
      ctx.json(mockResponse)
    );
    return mockedResponse;
  })
);

export default server;
