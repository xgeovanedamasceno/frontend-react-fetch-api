import propTypes from 'prop-types';
import Title from '../../components/Title';
import MainContainerStyle from '../../components/MainContainer/styled';

function Contact({ title }) {
  return (
    <MainContainerStyle>
      <Title>{ title }</Title>
    </MainContainerStyle>
  );
}

Contact.propTypes = {
  title: propTypes.string.isRequired
};

export default Contact;
