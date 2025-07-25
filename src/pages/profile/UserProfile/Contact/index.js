import React from 'react';
import {useIntl} from 'react-intl';
import AppsContainer from '../../../../@crema/core/AppsContainer';
import ContactList from './ContactList';

const Contact = () => {
  const {messages} = useIntl();
  return (
    <AppsContainer fullView title={messages['contactApp.contact']}>
      <ContactList />
    </AppsContainer>
  );
};

export default Contact;
