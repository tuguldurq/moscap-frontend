import React from 'react';
import {Button, Progress} from 'antd';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ListEmptyResult = ({
  loader,
  placeholder,
  loading,
  title,
  actionTitle,
  content,
  onClick,
}) => {
  if (loading || loader) {
    return (
      <React.Fragment>
        {placeholder ? (
          placeholder
        ) : (
          <div className={clsx('empty-list-container', 'flex-row')}>
            <Progress percent={30} />
            <span>Loading...</span>
          </div>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <div className='empty-list-container'>
        {title ? <h4>{title}</h4> : null}
        <p>{content}</p>

        {actionTitle ? (
          <Button
            type='primary'
            style={{marginTop: 30, minWidth: 150}}
            onClick={onClick}>
            {actionTitle}
          </Button>
        ) : null}
      </div>
    );
  }
};

export default ListEmptyResult;

ListEmptyResult.propTypes = {
  loader: PropTypes.bool,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  description: PropTypes.string,
  content: PropTypes.string,
  actionTitle: PropTypes.string,
  action: PropTypes.func,
  onClick: PropTypes.func,
};

ListEmptyResult.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  actionTitle: PropTypes.string,
  action: PropTypes.func,
};
