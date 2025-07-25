import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppTableContainer from '../../../@crema/core/AppTableContainer';
import {useDispatch, useSelector} from 'react-redux';
import OrderActions from './ArtistDetail/OrderActions';
import AppsHeader from '../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/core/AppsContainer/AppsContent';
import AppsPagination from '../../../@crema/core/AppsPagination';
import AppInfoView from '../../../@crema/core/AppInfoView';
import {Input, Button, Modal} from 'antd';
import {getArtists} from '../../../redux/actions';
import AddArtistModal from './AddArtist';
import './index.style.less';
import {PlusCircleFilled} from '@ant-design/icons';

const ArtistList = () => {
  const {messages} = useIntl();
  const dispatch = useDispatch();
  const {artists} = useSelector(({artist}) => artist);
  const {loading} = useSelector(({common}) => common);
  const [page, setPage] = useState(0);
  const [per_page, setPageSize] = useState(10);
  const [search, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    dispatch(getArtists(search, page, per_page));
  }, [dispatch, search, page, per_page]);
  const onChange = (current, pageSize) => {
    setPage(current);
    setPageSize(pageSize);
  };
  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: messages['common.name'],
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: messages['common.phone'],
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: messages['common.ipiCode'],
      dataIndex: 'ipi_code',
      key: 'ipi_code',
    },
    {
      title: messages['common.mglCode'],
      dataIndex: 'mgl_code',
      key: 'mgl_code',
    },
    // {
    //   title: 'Rating',
    //   dataIndex: 'rating',
    //   key: 'rating',
    //   render: (rating) => (
    //     <span className='badge'>
    //       {rating} <StarFilled style={{fontSize: 12, marginLeft: 2}} />
    //     </span>
    //   ),
    // },
    {
      title: messages['common.stageName'],
      dataIndex: 'stage_name',
      key: 'stage_name',
    },
    {
      title: messages['common.createdDate'],
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: messages['common.action'],
      dataIndex: 'id',
      key: 'id',
      className: 'customer-table-actions',
      fixed: 'right',
      render: (id) => <OrderActions id={id} />,
    },
  ];
  return (
    <>
      <AppsHeader key={'wrap'}>
        <div className='customer-header'>
          <div className='customer-header-input-view'>
            <Input
              id='user-name'
              placeholder={messages['common.searchHere']}
              type='search'
              onChange={onSearchOrder}
            />
          </div>
          <div className='customer-header-right'>
            <Button
              type='primary'
              icon={<PlusCircleFilled />}
              onClick={() => setIsModalVisible(true)}>
              {messages['artist.add']}
            </Button>

            <AppsPagination
              className='customer-header-pagination'
              pageSize={artists?.meta?.per_page}
              count={artists?.meta?.total}
              page={artists?.meta?.current_page}
              onChange={onChange}
            />
          </div>
        </div>
      </AppsHeader>

      <AppsContent
        key={'wrap1'}
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <AppTableContainer
          className='customer-table'
          hoverColor
          data={artists.data}
          columns={columns}
          loading={loading}
          scroll={{x: 'auto'}}
        />
      </AppsContent>
      <Modal
        title={messages['artist.add']}
        open={isModalVisible}
        onOk={handleOk}
        footer={false}
        width={1000}
        onCancel={() => setIsModalVisible(false)}>
        <AddArtistModal />
      </Modal>

      <AppInfoView />
    </>
  );
};

export default ArtistList;

ArtistList.defaultProps = {
  customers: [],
};

ArtistList.propTypes = {
  customers: PropTypes.array,
  loading: PropTypes.bool,
};
