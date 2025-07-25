import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import {Button, Input} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

const ContactHeader = (props) => {
  const {filterText, onSetFilterText, onAddContactModalOpen} = props;

  const {messages} = useIntl();

  const {Search} = Input;

  return (
    <>
      <div className='contact-content-header'>
        <Search
          disabled
          className='contact-search'
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
          placeholder={messages['common.searchHere']}
        />
        <div className='contact-create-btn'>
          <Button
            type='primary'
            style={{width: 180, justifyContent: 'end'}}
            icon={<PlusCircleOutlined />}
            onClick={onAddContactModalOpen}>
            Бүртгэл үүсгэх
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;

ContactHeader.defaultProps = {
  checkedContacts: [],
  filterText: '',
  page: 0,
};

ContactHeader.propTypes = {
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  onAddContactModalOpen: PropTypes.func,
};
