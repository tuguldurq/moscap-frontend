import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ItemMenu from './ItemMenu';
import {Button} from 'antd';
import ActionBtnHover from './ActionBtnHover';

const ContactListItem = ({
  index,
  contact,
  // onChangeCheckedContacts,
  checkedContacts,
  onSelectContactsForDelete,
  onViewContactDetail,
  onOpenEditContact,
}) => {
  return (
    <>
      <div
        key={contact.id}
        className={clsx('contact-list-item item-hover', {
          rootCheck: checkedContacts.includes(contact.id),
        })}
        onClick={() => onViewContactDetail(contact)}>
        <span className='contact-list-item-star'>{index}</span>
        {/* <span
          className='contact-list-item-checkbox-view'
          onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedContacts.includes(contact.id)}
            onChange={(event) => onChangeCheckedContacts(event, contact.id)}
            color='primary'
          />
        </span> */}

        <span className='text-truncate contact-list-item-title'>
          {contact.name}
        </span>

        <span className='text-truncate contact-list-item-col contact-list-item-email'>
          <span className='text-truncate'>
            {contact.phone ? contact.phone : null}
          </span>
        </span>
        <span className='text-truncate contact-list-item-col'>
          <span className='text-truncate'>
            <Button ghost type='primary' size='small'>
              {contact.type.name}
            </Button>
          </span>
        </span>
        <span className='contact-list-item-action'>
          <span
            className='contact-list-item-menu-view'
            onClick={(event) => event.stopPropagation()}>
            <ItemMenu
              onSelectContactsForDelete={onSelectContactsForDelete}
              contact={contact}
              onOpenEditContact={onOpenEditContact}
            />
          </span>
        </span>

        <ActionBtnHover
          contact={contact}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      </div>
    </>
  );
};

export default ContactListItem;

ContactListItem.defaultProps = {
  labelList: [],
  checkedContacts: [],
};

ContactListItem.propTypes = {
  index: PropTypes.number,
  contact: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  // onChangeCheckedContacts: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
