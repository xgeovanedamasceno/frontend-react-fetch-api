import propTypes from 'prop-types';
import Title from '../../components/Title';

function Contact({ title }) {
  return (
    <Title>{ title }</Title>
  );
}

Contact.propTypes = {
  title: propTypes.string.isRequired
};

export default Contact;
