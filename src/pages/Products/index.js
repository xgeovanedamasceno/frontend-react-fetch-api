import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Title from '../../components/Title';
import MainContainerStyle from '../../components/MainContainer/styled';

function Products({ title }) {
  const [products, setProducts] = useState([]);

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
  return (
    <MainContainerStyle>
      <Title>{ title }</Title>
      { renderProducts() }
    </MainContainerStyle>
  );
}

Products.propTypes = {
  title: propTypes.string.isRequired
};

export default Products;
