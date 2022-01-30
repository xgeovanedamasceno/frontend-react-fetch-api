import propTypes from 'prop-types';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import MainContainerStyle from '../../components/MainContainer/styled';

function Home({ title, subtitle }) {
  return (
    <MainContainerStyle>
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </MainContainerStyle>

  );
}

Home.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired
};

export default Home;
