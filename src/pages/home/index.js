import React from 'react';
import Contact from './Contact';
const HomePage = React.lazy(() => import('./Components'));
const AboutPage = React.lazy(() => import('./About'));
const Artist = React.lazy(() => import('./Artist'));
const MusicUsers = React.lazy(() => import('./MusicUsers'));
const Repertory = React.lazy(() => import('./Repertory'));

export const HomePageConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/music-users',
    element: <MusicUsers />,
  },
  {
    path: '/artists',
    element: <Artist />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/repertory',
    element: <Repertory />,
  },
];
