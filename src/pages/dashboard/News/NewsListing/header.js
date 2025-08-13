import React from 'react';
import {useDispatch} from 'react-redux';
import {setViewType} from '../../../../redux/actions/News';
import {VIEW_TYPE} from '../../../../redux/reducers/News';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {
  AppstoreOutlined,
  PlusCircleFilled,
  UnorderedListOutlined,
} from '@ant-design/icons';
import clsx from 'clsx';
import './header.style.less';
import {useIntl} from 'react-intl';
import {useNavigate} from 'react-router-dom';

const NewsHeader = ({viewType}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {messages} = useIntl();
  // const {Search} = Input;

  return (
    <div className='product-header'>
      <div className='product-header-left'>
        {/* <Search
          className='product-header-search'
          placeholder={messages['common.searchHere']}
          onChange={(e) => onChange(e.target.value)}
        /> */}
      </div>
      <div className='product-header-right'>
        <Button
          icon={<PlusCircleFilled />}
          style={{marginRight: 15}}
          onClick={() => navigate('/dashboard-news/create')}
          type='primary'>
          {messages['sidebar.pages.addNews']}
        </Button>

        <Button
          className={clsx('product-header-btn', {
            active: viewType === VIEW_TYPE.LIST,
          })}
          onClick={() => dispatch(setViewType(VIEW_TYPE.LIST))}>
          <UnorderedListOutlined />
        </Button>
        <Button
          className={clsx('product-header-btn', {
            active: viewType === VIEW_TYPE.GRID,
          })}
          onClick={() => dispatch(setViewType(VIEW_TYPE.GRID))}>
          <AppstoreOutlined />
        </Button>
      </div>
    </div>
  );
};

export default NewsHeader;

NewsHeader.propTypes = {
  viewType: PropTypes.any,
  onChange: PropTypes.func,
};
