import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ContactActions from './ContactActions';
// import PersonalDetails from './PersonalDetails';
// import OtherDetails from './OtherDetails';
import {Avatar, Modal, Button, Descriptions} from 'antd';
import AppScrollbar from '@crema/core/AppScrollbar';
// import {AppRowContainer} from '@crema';
import IntlMessages from '@crema/utility/IntlMessages';
import './index.style.less';

const ContactDetail = (props) => {
  const {
    isShowDetail,
    selectedContact,
    onShowDetail,
    onSelectContactsForDelete,
    onOpenEditContact,
  } = props;

  const [contact, setContact] = useState(selectedContact);

  useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
    onShowDetail(false);
  };

  const onContactDetailClose = () => {
    onShowDetail(false);
  };

  return (
    <>
      <Modal
        open={isShowDetail}
        onOk={isShowDetail}
        footer={false}
        onCancel={() => onShowDetail(false)}
        className='contact-detail-modal'>
        <div className='contact-detail-modal-header'>
          <ContactActions
            onDeleteContact={onDeleteContact}
            onOpenEditContact={onOpenEditContact}
            contact={contact}
          />
          <div className='contact-detail-modal-user'>
            {contact.image ? (
              <Avatar
                className='contact-detail-modal-user-avatar'
                src={contact.image}
              />
            ) : (
              <Avatar className='contact-detail-modal-user-avatar'>
                {contact.name[0].toUpperCase()}
              </Avatar>
            )}
            <h4>{contact.name}</h4>
          </div>
        </div>

        <AppScrollbar className='contact-detail-modal-scrollbar'>
          <div className='contact-detail-modal-content'>
            <Descriptions bordered>
              <Descriptions.Item span={24} label='Нэр'>
                {contact.name}
              </Descriptions.Item>
              <Descriptions.Item span={24} label='Утас'>
                {contact.phone}
              </Descriptions.Item>
              <Descriptions.Item span={24} label='Хэн болох'>
                {contact.type}
              </Descriptions.Item>
            </Descriptions>
          </div>

          <div className='contact-form-footer'>
            <Button
              type='primary'
              ghost
              className='contact-form-btn'
              onClick={onContactDetailClose}>
              <IntlMessages id='common.cancel' />
            </Button>
          </div>
        </AppScrollbar>
      </Modal>
    </>
  );
};

export default ContactDetail;

ContactDetail.propTypes = {
  isShowDetail: PropTypes.bool.isRequired,
  onShowDetail: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
