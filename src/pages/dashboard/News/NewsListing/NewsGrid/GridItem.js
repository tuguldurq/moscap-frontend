import React, {useState} from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
// import {useDispatch} from 'react-redux';
// import {setCurrentProduct} from '../../../../../redux/actions/News';
import {useNavigate} from 'react-router-dom';
import {HeartFilled, HeartOutlined, StarOutlined} from '@ant-design/icons';
import './index.style.less';
import AppCard from '../../../../../@crema/core/AppCard';

const GridItem = (props) => {
  const {item} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <AppCard
      className='product-grid-card item-hover'
      onClick={() => navigate('/dashboard/pages/news/' + item.id)}>
      <div className='product-grid-card-header'>
        <span className='product-grid-card-header-badge'>
          {item.rating}
          <StarOutlined />
        </span>

        <div className='product-grid-card-header-thumb'>
          {item.images.length > 0 && (
            <div
              className='product-list-slider-thumb'
              key={item?.images[0]['path']}>
              <img
                src={`${process.env.REACT_APP_STORAGE_URL}/${item?.images[0]['path']}`}
                alt='watch'
              />
            </div>
          )}
        </div>

        <span className='product-list-favor-checked' onClick={OnFavorite}>
          {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </span>
      </div>

      <h3 className='text-truncate product-grid-card-title'>{item.title}</h3>

      <div className='product-grid-action'>
        <span className='product-grid-action-item'>
          $ {+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
        </span>
        <span className='product-grid-action-item cut'>${item.mrp}</span>
        <span className='product-grid-action-item green'>
          {item.discount}% <IntlMessages id='ecommerce.off' />
        </span>
      </div>
    </AppCard>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
