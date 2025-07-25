import React from 'react';
import ContactList from './ContactList/index';
import PropTypes from 'prop-types';

const Contact = ({data}) => {
  return <ContactList list={data?.manager} />;
};

export default Contact;

Contact.propTypes = {
  data: PropTypes.any,
};
