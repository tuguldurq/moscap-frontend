import {Button, Col, Descriptions, Table} from 'antd';
import {MdKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md';
import PropTypes from 'prop-types';

import './index.style.css';

const SongItem = ({list, onChangePagination, loading}) => {
  const columns = [
    {
      title: '№',
      width: '10%',
      key: 'no',
      render: (t, record, index) => {
        console.log(t, record);
        return <>{index + 1}</>;
      },
    },
    {title: 'Бүтээлийн нэр', dataIndex: 'origin_name', key: 'origin_name'},
    {
      title: 'Яруу найрагч',
      dataIndex: 'author',
      key: 'author',
      responsive: ['md'],
      render: (_, record) => {
        const last_name = record?.author?.user?.last_name;
        const first_name = record?.author?.user?.first_name;
        let name = null;
        if (first_name != null && last_name != null) {
          name = `${first_name.charAt(0)?.toUpperCase()}.${
            last_name.charAt(0)?.toUpperCase() + last_name.slice(1)
          }`;
        }
        return name;
      },
    },
    {
      title: 'Хөгжмийн зохиолч',
      dataIndex: 'composer',
      key: 'composer',
      responsive: ['md'],
      render: (_, record) => {
        const last_name = record?.composer?.user?.last_name;
        const first_name = record?.composer?.user?.first_name;
        let name = null;
        if (first_name != null && last_name != null) {
          name = `${first_name.charAt(0)?.toUpperCase()}.${
            last_name.charAt(0)?.toUpperCase() + last_name.slice(1)
          }`;
        }
        return name;
      },
    },
    {
      title: 'Туурвисан огноо',
      dataIndex: 'year',
      key: 'year',
      responsive: ['md'],
    },
    Table.EXPAND_COLUMN,
  ];

  return (
    <Col span={24}>
      <Table
        loading={loading}
        rowKey={(record) => record.id}
        pagination={{
          showSizeChanger: true,
          total: list?.total,
          onChange: (page, pageSize) => onChangePagination(page, pageSize),
        }}
        columns={columns}
        expandable={{
          expandIcon: ({expanded, onExpand, record}) => (
            <Button
              type='default'
              onClick={(e) => onExpand(record, e)}
              style={{display: 'flex', alignItems: 'center'}}>
              <span style={{marginTop: 2}}>Дэлгэрэнгүй </span>
              {expanded ? (
                <MdKeyboardArrowDown fontSize={19} />
              ) : (
                <MdKeyboardArrowRight fontSize={19} />
              )}
            </Button>
          ),
          expandedRowRender: (record) => (
            <div className='expanded-item-detail'>
              {record?.composer?.user != null && (
                <Descriptions title='Хөгжмийн зохиолч'>
                  <Descriptions.Item label='Овог, Нэр'>
                    {record?.composer?.user.first_name}{' '}
                    {record?.composer?.user.last_name}
                  </Descriptions.Item>
                  <Descriptions.Item label='IPI код'>
                    {record?.composer?.ipi_code}
                  </Descriptions.Item>
                </Descriptions>
              )}
              {record?.author?.user != null && (
                <Descriptions title='Яруу найрагч'>
                  <Descriptions.Item label='Овог, Нэр'>
                    {record?.author?.user?.first_name}{' '}
                    {record?.author?.user?.last_name}
                  </Descriptions.Item>
                  <Descriptions.Item label='IPI код'>
                    {record?.author?.ipi_code}
                  </Descriptions.Item>
                </Descriptions>
              )}
              <Descriptions title='Хамтлаг, Дуучид'>
                <Descriptions.Item label='Нэр'>
                  {record?.performer}
                </Descriptions.Item>
              </Descriptions>
            </div>
          ),
        }}
        dataSource={list?.data}
      />
    </Col>
  );
};

export default SongItem;
SongItem.propTypes = {
  list: PropTypes.any,
  onChangePagination: PropTypes.func,
  loading: PropTypes.bool,
};
