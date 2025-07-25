import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import {Button} from 'antd';
import {MoreOutlined} from '@ant-design/icons';
import '../index.style.less';

const OrderTable = ({recentUserData}) => {
  const getPaymentStatusColor = (role) => {
    switch (role) {
      case 'artist': {
        return '#43C888';
      }
      default: {
        return '#E2A72E';
      }
    }
  };

  const columns = [
    {
      title: 'Овог',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Нэр',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'РД',
      dataIndex: 'register_number',
      key: 'register_number',
    },
    {
      title: 'Утасны дугаар',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'role',
      key: 'role',
      render: (role) => (
        <span
          className='badgeRoot'
          style={{
            color: getPaymentStatusColor(role),
            backgroundColor: getPaymentStatusColor(role) + '44',
          }}>
          {role === 'artist' ? 'Уран бүтээлч' : ''}
        </span>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <Button key={id} shape='circle' icon={<MoreOutlined />} />
      ),
    },
  ];
  return (
    <AppTableContainer
      className='orderTable'
      data={recentUserData}
      columns={columns}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  recentUserData: [],
};

OrderTable.propTypes = {
  recentUserData: PropTypes.array,
};
