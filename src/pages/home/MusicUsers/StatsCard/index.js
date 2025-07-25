import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const StatsCard = ({icon, text, value}) => {
  return (
    <AppCard heightFull className='metrics-stats-card'>
      {icon}
      <h3>{text}</h3>
      <p>{value}</p>
    </AppCard>
  );
};

export default StatsCard;

StatsCard.defaultProps = {
  bgColor: '',
  value: '',
};

StatsCard.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
};
