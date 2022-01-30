import propTypes from 'prop-types';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

function Home({ title, subtitle }) {
  return (
    <>
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </>
  );
}

Home.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired
};

export default Home;
