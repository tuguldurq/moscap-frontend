import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import './index.style.less';

const GeneralStats = ({stats}) => {
  console.log('icon', stats.icon);
  return (
    <AppCard heightFull className='card-hover'>
      <div className='general-stats'>
        <Avatar
          className='general-stats-avatar'
          style={{backgroundColor: stats.bgcolor}}>
          {stats.icon}
        </Avatar>
        <div className='general-stats-content'>
          <div>
            <h3>{stats.title}</h3>
            <p className='text-truncate'>{stats.count}</p>
          </div>
          {/* <span
            style={{backgroundColor: stats.bgcolor, color: stats.badgeColor}}
            className='general-stats-badge'>
            Үзэх
          </span> */}
        </div>
      </div>
    </AppCard>
  );
};

export default GeneralStats;

GeneralStats.defaultProps = {};

GeneralStats.propTypes = {
  stats: PropTypes.object,
};
