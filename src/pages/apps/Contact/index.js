import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  onGetFolderListForContact,
  onGetLabelListForContact,
} from '../../../redux/actions/ContactApp';
import ContactListing from './ContactListing';
import {useIntl} from 'react-intl';
import AppsContainer from '../../../@crema/core/AppsContainer';
import SideBarContent from './ContactSideBar';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetFolderListForContact());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetLabelListForContact());
  }, [dispatch]);

  const {messages} = useIntl();
  return (
    <AppsContainer
      title={messages['contactApp.contact']}
      sidebarContent={<SideBarContent />}>
      <AppPageMetadata title='Contact App' />
      <ContactListing />
    </AppsContainer>
  );
};

export default Contact;
