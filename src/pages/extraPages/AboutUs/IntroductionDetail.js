import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {Card} from 'antd';
import './index.style.less';
import Title from 'antd/lib/typography/Title';

const IntroductionDetail = () => {
  return (
    <Card className='about-intro-card'>
      <div className='about-img-view'>
        <div className='about-img'>
          <img
            src={
              'https://moscap.mn/wp-content/uploads/2020/01/groupcrop00-850x430.png'
            }
            alt='about us'
            title='aboutUs'
          />
        </div>
        <div className='about-img-content'>
          <Title>
            <IntlMessages id='extra.aboutUs' />
          </Title>
          <p>
            <IntlMessages id='extra.aboutDetailContent' />
            <br />
          </p>
        </div>
      </div>
    </Card>
  );
};

export default IntroductionDetail;
