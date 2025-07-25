import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import LandingHeader from 'pages/home/Components/Header/dark';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Card} from 'antd';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Type from './Type';
import './index.style.less';

const Signup = () => {
  return (
    <>
      <LandingHeader />
      <AppPageMetadata title='Signup' />
      {/* type shalgaad link usergene */}
      <div className='user-pages'>
        <AppAnimateGroup type='left'>
          <div className='user-container' key='a'>
            <Card className='user-card'>
              <div className='user-card-header'>
                <div className='user-card-logo'>
                  <img
                    src={'/assets/images/logo-blue.png'}
                    alt='moscap'
                    title='moscap'
                  />
                </div>
                <h3 style={{textTransform: 'uppercase'}}>
                  <IntlMessages id='common.signup' />
                </h3>
              </div>
              <div className='steps-content'>
                {/* <center style={{marginBottom: 25}}>
                  Энд ямар нэг тэкст байвал зүгээр юм уу
                </center> */}
                <Type />
              </div>
            </Card>
          </div>
        </AppAnimateGroup>
      </div>
    </>
  );
};

export default Signup;
