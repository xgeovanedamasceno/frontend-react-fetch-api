import PropTypes from 'prop-types';
/* import Anchor from '../Anchor'; */

function Nav({ children }) {
  return (
    <nav>
      { children }
    </nav>
  );
}

Nav.propTypes = {
  children: PropTypes.element.isRequired
};

export default Nav;
