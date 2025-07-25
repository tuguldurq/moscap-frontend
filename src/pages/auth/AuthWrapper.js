import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import './AuthWrapper.style.less';
import {AppInfoView} from '../../@crema';
import {Link} from 'react-router-dom';
import {useIntl} from 'react-intl';

const AuthWrapper = ({children}) => {
  const {messages} = useIntl();
  return (
    <AppAnimateGroup
      type='scale'
      animateStyle={{flex: 1}}
      delay={0}
      interval={10}
      duration={200}>
      <div className='auth-wrap' key={'wrap'}>
        <Card className='auth-card'>
          <div className='auth-main-content'>
            <div className='auth-card-header'>
              <img
                src={'/assets/images/logo-blue.png'}
                alt='crema'
                title='crema'
              />
            </div>
            {children}
          </div>
          <div className='auth-wel-action'>
            <div className='auth-wel-content'>
              <h2>MOSCAP</h2>
              <p>
                * Бүртгүүлэхийн тулд и-мэйл хаяг хэрэг болохыг анхаарна уу.{' '}
              </p>
              <p>
                {' '}
                * 18 наснаас доош уран бүтээлчдэд асран хамгаалагчдын зөвшөөрөл
                хэрэг болно.{' '}
              </p>
              <div className='sign-footer'>
                <div className='form-field-action'>
                  <span className='sign-text-grey' style={{marginRight: 3}}>
                    <Link
                      to='/artist/signup'
                      className='underlineNone colorTextPrimary'>
                      {messages['common.registerWidth']}
                    </Link>
                  </span>
                </div>
                {/* <span className='sign-text sign-text-grey'>
                  <Link
                    to='/artist/signup'
                    className='underlineNone colorTextPrimary'>
                    {messages['common.registerWidth']}
                  </Link>
                </span> */}
                {/* <span className='sign-text sign-text-grey'>|</span>
                <div className='sign-socialLink'>
                  <Link
                    to='/artist/signup'
                    className='underlineNone colorTextPrimary'>
                    {messages['home.musicUsers']}
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <AppInfoView />
    </AppAnimateGroup>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
