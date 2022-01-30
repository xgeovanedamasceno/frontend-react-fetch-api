import propTypes from 'prop-types';

function Title({ children }) {
  return <h1>{ children }</h1>;
}

Title.propTypes = {
  children: propTypes.string.isRequired
};

export default Title;
