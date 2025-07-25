import React from 'react';
import './index.style.less';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import AppVerticalMenuFooter from '../components/AppVerticalNavFooter';

import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import MainSidebar from '../components/MainSidebar';

const AppSidebar = ({isCollapsed}) => {
  const {isSidebarBgImage} = useSidebarContext();

  return (
    <MainSidebar
      className={clsx('mini-sidebar-toggle', {
        'mini-sidebar-toggle-img-background': isSidebarBgImage,
      })}
      collapsible
      breakpoint='xl'
      collapsedWidth='0'
      collapsed={isCollapsed}>
      <UserInfo hasColor />
      <AppScrollbar className='app-mini-sidebar-scrollbar' scrolltotop='false'>
        <AppVerticalMenu />
      </AppScrollbar>
      <AppVerticalMenuFooter />
    </MainSidebar>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  isCollapsed: PropTypes.bool,
};
