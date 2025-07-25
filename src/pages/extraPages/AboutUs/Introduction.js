import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {Button, Card} from 'antd';
import './index.style.less';
import {Link} from 'react-router-dom';

const Introduction = () => {
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
          <h2>
            <IntlMessages id='extra.aboutUs' />
          </h2>
          <p>
            <IntlMessages id='extra.aboutContent' />
          </p>
          <div className='about-btn-view'>
            <Link to={'/contact'}>
              <Button type='primary' className='btn'>
                <IntlMessages id='extra.contactUs' />
              </Button>
            </Link>
            <Link to={'/about'}>
              <Button className='btn about-read-btn'>
                <IntlMessages id='dashboard.readMore' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Introduction;
