import {
  FooterType,
  LayoutType,
  MenuStyle,
  NavStyle,
  ThemeDirection,
  ThemeMode,
  ThemeStyle,
} from '../../../shared/constants/AppEnums';

export const DarkSidebar = {
  sidebarBgColor: '#313541',
  sidebarTextColor: '#fff',
  sidebarHeaderColor: '#313541',
  sidebarMenuSelectedBgColor: '#F4F7FE',
  sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
  mode: ThemeMode.DARK,
};
export const LightSidebar = {
  sidebarBgColor: '#fff',
  sidebarTextColor: 'rgba(0, 0, 0, 0.60)',
  sidebarHeaderColor: '#fff',
  sidebarMenuSelectedBgColor: '#001529',
  sidebarMenuSelectedTextColor: '#fff',
  mode: ThemeMode.LIGHT,
};
const defaultConfig = {
  sidebar: {
    borderColor: '#757575',
    menuStyle: MenuStyle.ROUNDED,
    isSidebarBgImage: false,
    sidebarBgImage: 1,
    colorSet: LightSidebar,
  },

  locale: {
    languageId: 'mongolian',
    locale: 'mn',
    name: 'Mongolia',
    icon: 'mn',
  },
  themeStyle: ThemeStyle.MODERN,
  direction: ThemeDirection.LTR,
  themeMode: ThemeMode.LIGHT,
  footerType: FooterType.FLUID,
  navStyle: NavStyle.MINI_SIDEBAR_TOGGLE,
  layoutType: LayoutType.FULL_WIDTH,
  footer: false,
  rtlLocale: ['ar'],
};
export default defaultConfig;
