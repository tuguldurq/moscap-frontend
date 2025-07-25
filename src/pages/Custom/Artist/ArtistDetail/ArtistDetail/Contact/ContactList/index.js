import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import ContactListSkeleton from '@crema/core/AppSkeleton/ContactListSkeleton';
import IntlMessages from '@crema/utility/IntlMessages';
import ContactDetail from '../ContactDetail/index';
import ContactListItem from '../ContactListItem/index';
import CreateContact from '../CreateContact/index';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {AppAnimates} from 'shared/constants/AppEnums';
import './index.style.less';
import AppConfirmationModal from '@crema/core/AppConfirmationModal';

const ContactList = ({list}) => {
  const loading = useSelector(({common}) => common.loading);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isShowDetail, onShowDetail] = useState(false);
  const [isAddContact, onSetIsAddContact] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toDeleteContacts, setToDeleteContacts] = useState([]);
  console.log(toDeleteContacts);
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
  };
  const onUpdateContact = (contact) => {
    setSelectedContact(contact);
    handleAddContactClose();
  };
  const onSelectContactsForDelete = (contactIds) => {
    setToDeleteContacts(contactIds);
    setDeleteDialogOpen(true);
  };
  return (
    <>
      <AppsContent>
        {/* <ContactViewContent
          list={list}
          loading={loading}
          pageView={'list'}
          handleAddContactOpen={handleAddContactOpen}
          // onChangeCheckedContacts={onChangeCheckedContacts}
          // onChangeStarred={onChangeStarred}
          // checkedContacts={checkedContacts}
          // onSelectContactsForDelete={onSelectContactsForDelete}
          onViewContactDetail={onViewContactDetail}
          onOpenEditContact={onOpenEditContact}
        /> */}
        <div className='contact-list-desktop'>
          <AppList
            data={list}
            animation={AppAnimates.SLIDEUPIN}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                actionTitle={<IntlMessages id='contactApp.createContact' />}
                onClick={handleAddContactOpen}
                placeholder={<ContactListSkeleton />}
              />
            }
            renderItem={(contact) => (
              <ContactListItem
                key={contact.id}
                contact={contact}
                // onChangeCheckedContacts={onChangeCheckedContacts}
                // checkedContacts={checkedContacts}
                // onSelectContactsForDelete={onSelectContactsForDelete}
                // onChangeStarred={onChangeStarred}
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
          onDeny={setDeleteDialogOpen}
          // onConfirm={onDeleteSelectedContacts}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  list: PropTypes.any,
};
