import PropTypes from 'prop-types';
import AnchorStyle from './styled';

function Anchor({ url, name }) {
  return (
    <AnchorStyle>
      <a href={url}>{ name }</a>
    </AnchorStyle>
  );
}

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Anchor;
