import React from 'react';
import {Pagination} from 'antd';
import PropTypes from 'prop-types';

const AppsPagination = ({count, page, onChange, pageSize, className}) => {
  return (
    <Pagination
      component='div'
      total={count}
      pageSize={pageSize}
      className={className}
      current={page}
      backIconButtonProps={{'aria-label': 'Previous Page'}}
      nextIconButtonProps={{'aria-label': 'Next Page'}}
      onChange={onChange}
      showSizeChanger
      pageSizeOptions={[10, 30, 50, 100]}
    />
  );
};

export default AppsPagination;

AppsPagination.defaultProps = {
  className: '',
  pageSize: 15,
};

AppsPagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  pageSize: PropTypes.number,
};
