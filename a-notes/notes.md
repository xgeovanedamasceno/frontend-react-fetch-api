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

