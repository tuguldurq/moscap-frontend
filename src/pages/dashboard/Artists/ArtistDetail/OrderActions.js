import React from 'react';
import PropTypes from 'prop-types';
import {Button, Menu, Dropdown, Space} from 'antd';
import {DeleteTwoTone, EyeOutlined, MoreOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import {useIntl} from 'react-intl';

const OrderActions = ({id}) => {
  const navigate = useNavigate();
  const {messages} = useIntl();
  const menu = (
    <Menu>
      <Menu.Item
        style={{fontSize: 14}}
        onClick={() => navigate(`/dashboard/artists/${id}`)}>
        <Space size='small'>
          <EyeOutlined />
          {messages['common.view']}
        </Space>
      </Menu.Item>
      <Menu.Item style={{fontSize: 14}}>
        <Space size='small'>
          <DeleteTwoTone twoToneColor='#eb2f96' />
          {messages['common.delete']}
        </Space>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button type='circle'>
          <MoreOutlined />
        </Button>
      </Dropdown>
    </>
  );
};
export default OrderActions;

OrderActions.propTypes = {
  id: PropTypes.number,
};
