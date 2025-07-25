import React from 'react';
import ContactList from './ContactList/index';
import PropTypes from 'prop-types';

const Contact = ({contactData}) => {
  return <ContactList list={contactData.user.emergency} />;
};

export default Contact;

Contact.propTypes = {
  contactData: PropTypes.any,
};
