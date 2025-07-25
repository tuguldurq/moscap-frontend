import ArtistInfo from 'pages/profile/UserProfile/ArtistInfo';
import BankInformation from 'pages/profile/UserProfile/BankInformation';
import ChangePassword from 'pages/profile/UserProfile/ChangePassword';
import Contact from 'pages/profile/UserProfile/Contact';
import Heirinfo from 'pages/profile/UserProfile/Heir';
import Manager from 'pages/profile/UserProfile/Manager';
import PersonalInfo from 'pages/profile/UserProfile/PersonalInfo';
import SocialLink from 'pages/profile/UserProfile/SocialLink';
import {RoutePermittedRole} from 'shared/constants/AppEnums';

export const artistConfig = [
  {
    path: '/profile/index',
    permittedRole: [RoutePermittedRole.artist, RoutePermittedRole.publisher],
    element: <PersonalInfo />,
  },
  {
    path: '/profile/bank',
    permittedRole: [RoutePermittedRole.artist, RoutePermittedRole.publisher],
    element: <BankInformation />,
  },
  {
    path: '/profile/contact',
    permittedRole: [RoutePermittedRole.artist, RoutePermittedRole.publisher],
    element: <Contact />,
  },
  {
    path: '/profile/manager',
    permittedRole: [RoutePermittedRole.artist],
    element: <Manager />,
  },
  {
    path: '/artist/main',
    permittedRole: [RoutePermittedRole.artist],
    element: <ArtistInfo />,
  },
  {
    path: '/profile/publisher',
    permittedRole: [RoutePermittedRole.publisher],
    element: <Manager />,
  },
  {
    path: '/profile/heir',
    permittedRole: [RoutePermittedRole.artist, RoutePermittedRole.publisher],
    element: <Heirinfo />,
  },
  {
    path: '/profile/heir',
    permittedRole: [RoutePermittedRole.artist, RoutePermittedRole.publisher],
    element: <Heirinfo />,
  },
  {
    path: '/profile/social',
    permittedRole: [RoutePermittedRole.artist, RoutePermittedRole.publisher],
    element: <SocialLink />,
  },
  {
    path: '/profile/password',
    permittedRole: [RoutePermittedRole.artist, RoutePermittedRole.publisher],
    element: <ChangePassword />,
  },
];

// profile -> huwiin medeelel
// artist info
