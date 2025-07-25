import React from 'react';
import {dashboardConfig} from './dashboard';
import {errorPagesConfigs} from './errorPages';
import {authRouteConfig} from './auth';
import {initialUrl} from '../shared/constants/AppConst';
import {ecommerceConfig} from './ecommerce';
import {extraPagesConfigs} from './extraPages';
import {thirdPartyConfigs} from './thirdParty';
import {userPagesConfig} from './userPages';
import {appsConfig} from './apps';
import {menuLevelConfig} from './menu';
import {userListConfig} from './userList';
import {componentsConfigs} from './components';
import {profileConfig} from './profile';
import {artistConfig} from './artist';
import Error403 from './errorPages/Error403';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...dashboardConfig,
    ...ecommerceConfig,
    ...extraPagesConfigs,
    ...componentsConfigs,
    ...thirdPartyConfigs,
    ...userPagesConfig,
    ...appsConfig,
    ...menuLevelConfig,
    ...userListConfig,
    ...profileConfig,
    // new
    ...artistConfig,
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs,
};

export {authorizedStructure, unAuthorizedStructure, anonymousStructure};
