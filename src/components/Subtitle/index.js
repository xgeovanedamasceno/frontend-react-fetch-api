import propTypes from 'prop-types';

function Subtitle({ children }) {
  return <h2>{ children }</h2>;
}

Subtitle.propTypes = {
  children: propTypes.string.isRequired
};

export default Subtitle;
