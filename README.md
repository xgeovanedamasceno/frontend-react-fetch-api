# Front-End Fetch API - React App

This project is a React App that makes a request to an API and renders its response.

The main objective of this project is the development of tests as a way to practice and learn React JS, Testing Library and Jest.

This Project follow the Conventional Commits (https://www.conventionalcommits.org/en/v1.0.0/).

## Learnings

## 1. Extensões de arquivos '.js' vs '.jsx' and objecto React em arquivos .jsx
Ao adicionar 
```
const App = function () {
    return <h1>Hello World</h1>
}

export default App;
```
foi acusado um erro de que é obrigatório usar o objecto React em arquivos com extensão '.jsx'

No arquivo .eslintrc.json adicionei uma regra para permitir ambas extensões '.js' e '.jsx' conforme docs abaixo: 

- https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md

- Article about file extension in react applications

https://www.webtips.dev/javascript-vs-jsx#:~:text=React%20can%20be%20written%20with,JSX%20are%20written%20in%20camelCase.

## 2. anchor vs button elements

https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/566011b89df811b95bc4e99799a5ea03d440411d/docs/rules/anchor-is-valid.md

## 3. prevent missing props validation

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md

## 4. Testing Styled Components

https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b

https://medium.com/welldone-software/unit-testing-styled-components-92dac6249f14

https://javascript.plainenglish.io/a-beginners-guide-to-behaviour-testing-in-react-faf098a8c232

## 5. Validate DOM Nesting

console.error
    Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
        at a
        at a
        at I (/home/xdgeo/Documents/dev-projects/frontend-react-fetch-api/node_modules/styled-components/src/models/StyledComponent.js:252:3)
        at Anchor (/home/xdgeo/Documents/dev-projects/frontend-react-fetch-api/src/components/Anchor/index.js:4:19)

## 6. PropTypes for children components

- propType "children" is not required, but has no corresponding defaultProps declaration.
(https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)

console.error
    Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `Nav`, expected a single ReactElement.
        at Nav (/home/xdgeo/Documents/dev-projects/frontend-react-fetch-api/src/components/Nav/index.js:3:16)

https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

https://oieduardorabelo.medium.com/react-avan%C3%A7ado-utilizando-props-children-como-fun%C3%A7%C3%A3o-de-primeira-classe-f6be8acdfaf1

## 7. Warning: Can't perform a React state update on an unmounted component.

https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

before:
```
useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) setProducts(data);
    });
  }, []);
```

after:
```
useEffect(() => {
    let isMounted = true;

    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) setProducts(data);
      });

    return () => {
      isMounted = false;
    };
  }, []);
```


## 8. Do not use Array index in keys

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md

before:
```
function renderProducts() {
    return (
      <ul>
        {products.map((product, index) => (
          <li key={`${product.id}${index}`}>
            <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
            <h2>{product.nome}</h2>
            <p>{product.preco}</p>
          </li>
        ))}
      </ul>
    );
  }
```

after:
```
function renderProducts() {
    return (
      <ul>
        {products.map((product, index) => (
          <li key={`${product.id}${product.id + index}`}>
            <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
            <h2>{product.nome}</h2>
            <p>{product.preco}</p>
          </li>
        ))}
      </ul>
    );
  }
```

## 9. Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.

https://eslint.org/docs/rules/arrow-body-style

before
```
const server = setupServer(
  rest.get('https://ranekapi.origamid.dev/json/api/produto', (req, res, ctx) => {
    return res(
      ctx.json(mockResponse)
    );
  })
);
```

after:
```

const server = setupServer(
  rest.get('https://ranekapi.origamid.dev/json/api/produto', (req, res, ctx) => {
    const mockedResponse = res(
      ctx.json(mockResponse)
    );
    return mockedResponse;
  })
);
```

Dependencies:
  - testing-library/jest-dom
  - testing-library/react
  - testing-library/user-event
  - prop-types
  - react
  - react-dom
  - react-router-dom
  - react-scripts
  - react-test-renderer
  - styled-components

Development Dependencies:
  - eslint
  - eslint-config-airbnb
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react
  - eslint-plugin-react-hooks
  - jest-styled-components
  - msw



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
