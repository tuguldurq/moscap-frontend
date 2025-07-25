import React from 'react';
import {Layout} from 'antd';
import {AppSuspense} from '../../index';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../../../pages';
import AppErrorBoundary from '../AppErrorBoundary';
import './index.style.less';
import generateRoutes from '../../utility/RouteGenerator';
import {useAuthUser} from '../../utility/AuthHooks';

const {Content} = Layout;
const AppContentView = () => {
  const {user, isAuthenticated} = useAuthUser();
  return (
    <Content className='main-content-view'>
      <AppSuspense>
        <AppErrorBoundary>
          {generateRoutes({
            isAuthenticated: isAuthenticated,
            userRole: user?.role,
            unAuthorizedStructure,
            authorizedStructure,
            anonymousStructure,
          })}
        </AppErrorBoundary>
      </AppSuspense>
    </Content>
  );
};

export default AppContentView;
