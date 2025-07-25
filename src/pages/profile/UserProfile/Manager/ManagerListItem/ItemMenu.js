import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Dropdown, Menu} from 'antd';
import {MoreOutlined} from '@ant-design/icons';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const ItemMenu = (props) => {
  const {onSelectManagersForDelete, manager, onOpenEditManager} = props;

  const onDeleteManager = () => {
    onSelectManagersForDelete([manager.id]);
  };

  const onClickEditOption = () => {
    onOpenEditManager(manager);
  };

  const menuLabel = (
    <Menu>
      <Menu.Item onClick={onClickEditOption}>
        <IntlMessages id='common.edit' />
      </Menu.Item>
      <Menu.Item onClick={onDeleteManager}>
        <IntlMessages id='common.delete' />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menuLabel} trigger={['click']}>
      <AppIconButton
        icon={<MoreOutlined />}
        title={<IntlMessages id='common.more' />}
      />
    </Dropdown>
  );
};

export default ItemMenu;

ItemMenu.propTypes = {
  onSelectManagersForDelete: PropTypes.func,
  manager: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditManager: PropTypes.func,
};
