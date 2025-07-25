import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import AppIconButton from '@crema/core/AppIconButton';

const ContactActions = (props) => {
  const {onDeleteContact, onOpenEditContact, contact} = props;

  return (
    <div className='contact-action'>
      <div className='contact-action-hover'>
        <AppIconButton
          icon={<AiOutlineEdit />}
          onClick={() => onOpenEditContact(contact)}
        />
      </div>
      <AppIconButton icon={<AiOutlineDelete />} onClick={onDeleteContact} />
    </div>
  );
};

export default ContactActions;

ContactActions.propTypes = {
  onDeleteContact: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onOpenEditContact: PropTypes.func,
};
