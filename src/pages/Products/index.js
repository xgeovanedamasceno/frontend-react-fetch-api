import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Title from '../../components/Title';
import MainContainerStyle from '../../components/MainContainer/styled';
import WrapperProductItem from '../../components/ProductsItem/styled';

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
        <MainContainerStyle>
          {products.map((product, index) => (
            <WrapperProductItem>
              <li key={`${product.id}${product.id + index}`}>
                <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
                <h2>{product.nome}</h2>
                <p>{`$ ${product.preco}`}</p>
              </li>
            </WrapperProductItem>
          ))}
        </MainContainerStyle>
      </ul>
    );
  }
  return (
    <>
      <MainContainerStyle>
        <Title>{ title }</Title>
      </MainContainerStyle>
      { renderProducts() }
    </>
  );
}

Products.propTypes = {
  title: propTypes.string.isRequired
};

export default Products;
