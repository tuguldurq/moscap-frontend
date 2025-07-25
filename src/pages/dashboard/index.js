import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';
import Artist from 'pages/Custom/Artist';
import Songs from 'pages/Custom/Songs';

// const HealthCare = React.lazy(() => import('./HealthCare'));
const Dashboard = React.lazy(() => import('../Custom/Dashboard'));
// const CRM = React.lazy(() => import('./CRM'));
// const Crypto = React.lazy(() => import('./Crypto'));
// const Analytics = React.lazy(() => import('./Analytics'));
// const Academy = React.lazy(() => import('./Academy'));
// const Metrics = React.lazy(() => import('./Metrics'));
// const Widgets = React.lazy(() => import('./Widgets'));
// const Artists = React.lazy(() => import('./Artists'));
// const News = React.lazy(() => import('./News'));
// const CreateNews = React.lazy(() => import('./News/CreateNews'));
// const Artist = React.lazy(() => import('../Custom/Artist'));
export const dashboardConfig = [
  {
    path: '/dashboard',
    permittedRole: [RoutePermittedRole.admin],
    element: <Dashboard />,
  },
  {
    path: '/artist-list',
    permittedRole: [RoutePermittedRole.admin],
    element: <Artist />,
  },
  {
    permittedRole: [RoutePermittedRole.admin],
    path: '/dashboard-songs',
    element: <Songs />,
  },
  // {
  //   path: '/dashboard/users',
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <HealthCare />,
  // },
  // {
  //   path: '/dashboard/health-care',
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <HealthCare />,
  // },
  // {
  //   permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.artist], // ene 2 oos busad route haagdana.s
  //   path: '/dashboard/crypto',
  //   element: <Crypto />,
  // },
  // {
  //   path: '/dashboard/crm',
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <CRM />,
  // },
  // {
  //   path: '/dashboard/analytics',
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <Analytics />,
  // },

  // {
  //   path: '/dashboard/academy',
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <Academy />,
  // },

  // {
  //   path: '/dashboard/metrics',
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <Metrics />,
  // },

  // {
  //   path: '/dashboard/widgets',
  //   element: <Widgets />,
  // },
  // {
  //   path: ['/dashboard/pages/news', '/dashboard/pages/news/:id'],
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <News />,
  // },
  // {
  //   path: '/dashboard/pages/news/create',
  //   permittedRole: [RoutePermittedRole.admin],
  //   element: <CreateNews />,
  // },
];
