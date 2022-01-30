import propTypes from 'prop-types';
import Title from '../../components/Title';

function Products({ title }) {
  return (
    <Title>{ title }</Title>
  );
}

Products.propTypes = {
  title: propTypes.string.isRequired
};

export default Products;
