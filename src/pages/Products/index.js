import propTypes from 'prop-types';
import Title from '../../components/Title';
import MainContainerStyle from '../../components/MainContainer/styled';

function Products({ title }) {
  return (
    <MainContainerStyle>
      <Title>{ title }</Title>
    </MainContainerStyle>
  );
}

Products.propTypes = {
  title: propTypes.string.isRequired
};

export default Products;
