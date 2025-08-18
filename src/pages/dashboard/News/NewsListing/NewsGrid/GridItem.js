import React from 'react';
import PropTypes from 'prop-types';
// import {useDispatch} from 'react-redux';
// import {setCurrentProduct} from '../../../../../redux/actions/News';
import {useNavigate} from 'react-router-dom';
import './index.style.less';
import AppCard from '../../../../../@crema/core/AppCard';
import {Typography} from 'antd';

const GridItem = (props) => {
  const {item} = props;
  const navigate = useNavigate();
  const {Paragraph} = Typography;

  return (
    <AppCard
      className='product-grid-card item-hover'
      onClick={() => navigate('/dashboard-news/' + item.id)}>
      <div className='product-grid-card-header'>
        <div className='product-grid-card-header-thumb'>
          {item.images.length > 0 && (
            <div
              className='product-list-slider-thumb'
              key={item?.images[0]['path']}>
              <img
                src={`${process.env.REACT_APP_STORAGE_URL}/${item?.images[0]['path']}`}
                alt='watch'
                style={{height: 250}}
              />
            </div>
          )}
        </div>
      </div>

      <h3 className='text-truncate product-grid-card-title'>{item.title}</h3>
      <p className='product-list-card-content-para'>
        <Paragraph ellipsis>
          <div dangerouslySetInnerHTML={{__html: item?.description}} />
          {/* <div>{item?.description}</div> */}
        </Paragraph>
      </p>
      {/* <div className='product-grid-action'>
        <span className='product-grid-action-item'>
          $ {+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
        </span>
        <span className='product-grid-action-item cut'>${item.mrp}</span>
        <span className='product-grid-action-item green'>
          {item.discount}% <IntlMessages id='ecommerce.off' />
        </span>
      </div> */}
    </AppCard>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
