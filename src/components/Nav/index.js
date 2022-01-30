import { Link } from 'react-router-dom';
import AnchorStyle from '../Anchor/styled';
import NavStyle from './styled';

function Nav() {
  return (
    <NavStyle>
      <AnchorStyle><Link to="/">Home</Link></AnchorStyle>
      <AnchorStyle><Link to="products">Products</Link></AnchorStyle>
      <AnchorStyle><Link to="contact">Contact</Link></AnchorStyle>
    </NavStyle>
  );
}

export default Nav;
