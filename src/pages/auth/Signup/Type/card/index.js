import React from 'react';
import './index.style.less';
import {ArrowRightOutlined, CheckOutlined} from '@ant-design/icons';
import {Button, List} from 'antd';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ItemCard = ({pricing}) => {
  return (
    <div className='pricing-wrapper'>
      <div className='pricing-one-card'>
        <div className='pricing-one-card-header'>
          <h3 className='pricing-one-card-header-title'>{pricing.title}</h3>
        </div>
        <div className='pricing-one-btn-view'>
          <Link to={`${pricing.link}`}>
            <Button
              className='pricing-one-btn'
              style={{borderColor: pricing.tagColor}}>
              Үргэлжлүүлэх <ArrowRightOutlined style={{marginLeft: 17}} />
            </Button>
          </Link>
        </div>

        <p className='requirment-text'>Дараах зүйлс шаардлагатай: </p>
        <List className='pricing-one-card-list'>
          {pricing.pricingList.map((data, index) => (
            <List.Item key={index}>
              <CheckOutlined className='icon' />
              <p>{data.title}</p>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  pricing: PropTypes.object,
};
