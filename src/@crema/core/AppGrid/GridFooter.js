import React from 'react';
import {Progress} from 'antd';
import './index.style.less';
import PropTypes from 'prop-types';
const GridFooter = ({loading, footerText}) => {
  if (loading) {
    return (
      <div className='loader-progress'>
        <Progress percent={30} />
        <span>Loading...</span>
      </div>
    );
  } else {
    return (
      <div className='list-footer'>
        <p>{footerText}</p>
      </div>
    );
  }
};

export default GridFooter;

GridFooter.propTypes = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};
