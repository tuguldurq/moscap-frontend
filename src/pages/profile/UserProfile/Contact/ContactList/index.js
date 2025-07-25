import AppList from '@crema/core/AppList';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import ContactListSkeleton from '@crema/core/AppSkeleton/ContactListSkeleton';
import IntlMessages from '@crema/utility/IntlMessages';
import AppConfirmationModal from '@crema/core/AppConfirmationModal';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import {Empty} from 'antd';
import ContactDetail from '../ContactDetail/index';
import ContactListItem from '../ContactListItem/index';
import CreateContact from '../CreateContact/index';
import {AppAnimates} from 'shared/constants/AppEnums';
import {onGetContactList} from 'redux/actions/Artist';
import {onDeleteContact} from '../../../../../redux/actions/Artist';
import ContactHeader from './ContactHeader';
import './index.style.less';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(({artist}) => artist.contactList);
  useEffect(() => {
    dispatch(onGetContactList());
  }, [dispatch]);
  const loading = useSelector(({common}) => common.loading);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isShowDetail, onShowDetail] = useState(false);
  const [isAddContact, onSetIsAddContact] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toDeleteContacts, setToDeleteContacts] = useState(null);
  const [checkedContacts, setCheckedContacts] = useState([]);

  console.log(toDeleteContacts, checkedContacts);
  const onViewContactDetail = (contact) => {
    setSelectedContact(contact);
    onShowDetail(true);
  };
  const onOpenEditContact = (contact) => {
    setSelectedContact(contact);
    handleAddContactOpen();
  };
  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };
  const handleAddContactClose = () => {
    onSetIsAddContact(false);
    onShowDetail(false);
    setSelectedContact(null);
    setDeleteDialogOpen(false);
  };
  const onUpdateContact = (contact) => {
    setSelectedContact(contact);
    handleAddContactClose();
  };
  const onSelectContactsForDelete = (contactIds) => {
    setToDeleteContacts(contactIds);
    setDeleteDialogOpen(true);
  };

  const onDeleteSelectedContacts = () => {
    dispatch(onDeleteContact(toDeleteContacts));
    setDeleteDialogOpen(false);
    setCheckedContacts([]);
  };

  return (
    <>
      <AppsHeader>
        <ContactHeader onAddContactModalOpen={handleAddContactOpen} />
      </AppsHeader>
      <AppsContent>
        <div className='contact-list-desktop'>
          <AppList
            data={contactList}
            animation={AppAnimates.SLIDEUPIN}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                content={<Empty />}
                actionTitle={<IntlMessages id='contactApp.createContact' />}
                onClick={handleAddContactOpen}
                placeholder={<ContactListSkeleton />}
              />
            }
            renderItem={(contact, index) => (
              <ContactListItem
                index={index + 1}
                key={contact.id}
                contact={contact}
                // onChangeCheckedContacts={onChangeCheckedContacts}
                // checkedContacts={checkedContacts}
                onSelectContactsForDelete={onSelectContactsForDelete}
                onViewContactDetail={onViewContactDetail}
                onOpenEditContact={onOpenEditContact}
              />
            )}
          />
        </div>
      </AppsContent>
      {isShowDetail ? (
        <ContactDetail
          selectedContact={selectedContact}
          isShowDetail={isShowDetail}
          onShowDetail={onShowDetail}
          handleAddContactClose={handleAddContactClose}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      ) : null}

      {isAddContact ? (
        <CreateContact
          isAddContact={isAddContact}
          handleAddContactClose={handleAddContactClose}
          selectContact={selectedContact}
          onUpdateContact={onUpdateContact}
        />
      ) : null}

      {isDeleteDialogOpen ? (
        <AppConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={handleAddContactClose}
          onConfirm={onDeleteSelectedContacts}
          paragraph={<IntlMessages id='common.deleteItemParagraph' />}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </>
  );
};

export default ContactList;
