import React from 'react';
import ItemCard from './card';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import './index.style.less';
const pricing = [
  {
    id: 1,
    title: 'Уран бүтээлч/ Songwriter',
    tagColor: '#11C15B',
    link: '/artist/signup',
    price: 69,
    pricingList: [
      {
        id: 1,
        title: 'Хүчинтэй имэйл хаяг',
      },
      {
        id: 2,
        title: 'Насанд хүрсэн',
      },
    ],
  },
  {
    id: 2,
    title: 'Нийтлэгч/ Publisher',
    price: 349,
    tagColor: '#FF8B26',
    link: '/publisher/signup',
    pricingList: [
      {
        id: 1,
        title: 'Хүчинтэй имэйл хаяг',
      },
      {
        id: 2,
        title: 'Албан ёсны бүртгэлтэй компани',
      },
      {
        id: 3,
        title: 'Банкинд бүртгэлтэй байх',
      },
    ],
  },
];
const Type = () => {
  return (
    <AppRowContainer>
      {pricing.map((data, index) => (
        <Col item xs={24} md={12} key={index}>
          <ItemCard pricing={data} />
        </Col>
      ))}
    </AppRowContainer>
  );
};

export default Type;
