import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import {Button, Input} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

const ManagerHeader = (props) => {
  const {filterText, onSetFilterText, onAddManagerModalOpen} = props;

  const {messages} = useIntl();

  const {Search} = Input;

  return (
    <>
      <div className='manager-content-header'>
        <Search
          disabled
          className='manager-search'
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
          placeholder={messages['common.searchHere']}
        />
        <div className='manager-create-btn'>
          <Button
            type='primary'
            style={{width: 180, justifyContent: 'end'}}
            icon={<PlusCircleOutlined />}
            onClick={onAddManagerModalOpen}>
            Бүртгэл үүсгэх
          </Button>
        </div>
      </div>
    </>
  );
};

export default ManagerHeader;

ManagerHeader.defaultProps = {
  checkedManagers: [],
  filterText: '',
  page: 0,
};

ManagerHeader.propTypes = {
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  onAddManagerModalOpen: PropTypes.func,
};
