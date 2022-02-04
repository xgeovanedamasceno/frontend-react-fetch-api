import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainContainerStyle from '../../components/MainContainer/styled';

function Product() {
  const [product, setProduct] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  function renderProduct() {
    return (
      <section>
        <div>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
        </div>
        <div>
          <h1>{product.nome}</h1>
          <h2>{product.preco}</h2>
        </div>
      </section>
    );
  }

  return (
    <MainContainerStyle>
      { product ? renderProduct() : null }
    </MainContainerStyle>
  );
}

export default Product;
