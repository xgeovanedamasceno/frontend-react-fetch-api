import { Link } from 'react-router-dom';
import NavStyle from './styled';

function Nav() {
  return (
    <NavStyle>
      <Link to="/">Home</Link>
      <Link to="products">Products</Link>
      <Link to="contact">Contact</Link>
    </NavStyle>
  );
}

export default Nav;
