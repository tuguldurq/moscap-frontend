import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppSelect from '../../../../@crema/core/AppSelect';
import AppCircularProgress from '../../../../@crema/core/AppCircularProgress';
import RegisteredUsersChart from './RegisteredUsersChart';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import PropTypes from 'prop-types';

import './index.style.less';

const RegisteredUsersStat = ({data}) => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  return (
    <AppCard
      title={messages['dashboard.registeredUsers']}
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <AppRowContainer>
        <Col xs={24} md={18}>
          <RegisteredUsersChart data={data?.registeredUsers} />
        </Col>
        <Col xs={24} md={6}>
          <div className='chartContainerView'>
            <div className='chartContainer'>
              <AppCircularProgress
                className='appCircularProgress'
                strokeColor='#0A8FDC'
                trailColor='#F44D50'
                percent={data?.progress?.musicUserCount}
                strokeWidth={5}
                format={() => (
                  <img
                    alt='icon'
                    style={{
                      borderRadius: '50%',
                      boxShadow: '0px 10px 20px rgba(160, 165, 185, 0.2)',
                    }}
                    src={'/assets/images/dashboard/profile_icon.png'}
                  />
                )}
              />
            </div>
            <div className='chartContainerAction'>
              <div className='chart-action-item'>
                <span className='dot' style={{backgroundColor: '#0A8FDC'}} />
                <p>Хөгжим хэрэглэгч</p>
              </div>
              <div className='chart-action-item'>
                <span className='dot' style={{backgroundColor: '#F44D50'}} />
                <p>Уран бүтээлч</p>
              </div>
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default RegisteredUsersStat;

RegisteredUsersStat.propTypes = {
  data: PropTypes.any,
};
