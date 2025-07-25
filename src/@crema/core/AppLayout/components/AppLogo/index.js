import React from 'react';
import './index.style.less';
import PropTypes from 'prop-types';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';
import {Link} from 'react-router-dom';

const AppLogo = ({hasSidebarColor}) => {
  const {sidebarColorSet} = useSidebarContext();
  return (
    <Link to={'/'}>
      <div className='app-logo'>
        {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
          <img src='/assets/images/logo.png' alt='crema-logo' />
        ) : (
          <img
            src='/assets/images/logo.png'
            alt='crema-logo'
            style={{height: 46, width: 47}}
          />
        )}
      </div>
    </Link>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
