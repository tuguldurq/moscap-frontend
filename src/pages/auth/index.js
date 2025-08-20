import About from 'pages/home/About';
import Managment from 'pages/home/About/Managment';
import Relation from 'pages/home/About/Relation';
import History from 'pages/home/About/History';
import Page1 from 'pages/home/Page/page1';
import Page2 from 'pages/home/Page/page2';
import Page3 from 'pages/home/Page/page3';
import Page4 from 'pages/home/Page/page4';
import Contact from 'pages/home/Contact';
import Artist from 'pages/home/Artist';
import MusicUsers from 'pages/home/MusicUsers';
import News from 'pages/home/News';
import LandingPage from 'pages/Landing';
import React from 'react';
import SignupPublisher from './Signup/SignupPublisher';
import Repertory from 'pages/home/Repertory';
import NewsDetail from 'pages/home/News/NewsDetail';

const Signin = React.lazy(() => import('./Signin'));
const SignupSongWriter = React.lazy(() => import('./Signup/SignupSongWriter'));
const Signup = React.lazy(() => import('./Signup'));
const ForgotPassword = React.lazy(() =>
  import('./ForgotPassword/ForgetPasswordCustom'),
);
const ConfirmSignupAwsCognito = React.lazy(() =>
  import('./ConfirmSignupAwsCognito'),
);
const ResetPasswordAwsCognito = React.lazy(() =>
  import('./ResetPasswordAwsCognito'),
);

// login hiigegu vyd ajillah route
export const authRouteConfig = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/page/1',
    element: <Page1 />,
  },
  {
    path: '/page/2',
    element: <Page2 />,
  },
  {
    path: '/page/3',
    element: <Page3 />,
  },
  {
    path: '/page/4',
    element: <Page4 />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/news/d/:id',
    element: <NewsDetail />,
  },
  {
    path: '/about/managment',
    element: <Managment />,
  },
  {
    path: '/about/relation',
    element: <Relation />,
  },
  {
    path: '/about/history',
    element: <History />,
  },
  {
    path: '/artists',
    element: <Artist />,
  },
  {
    path: '/music-users',
    element: <MusicUsers />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/repertory',
    element: <Repertory />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/artist/signup',
    element: <SignupSongWriter />,
  },
  {
    path: '/publisher/signup',
    element: <SignupPublisher />,
  },
  {
    path: '/forget-password',
    element: <ForgotPassword />,
  },
  {
    path: '/confirm-signup',
    element: <ConfirmSignupAwsCognito />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordAwsCognito />,
  },
];
