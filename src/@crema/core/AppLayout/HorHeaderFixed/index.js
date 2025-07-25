import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import './index.style.less';
import {AppContentView} from '../../../index';
import AppFooter from '../components/AppFooter';
import clsx from 'clsx';
import {FooterType, LayoutType} from '../../../../shared/constants/AppEnums';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
// import ScrollAutomatically from 'pages/components/dataDisplay/Carousel/ScrollAutomatically';
// import {useLocation} from 'react-router-dom';
// import ArtistBanner from 'pages/components/dataDisplay/Carousel/ArtistBanner';
// import AboutBanner from 'pages/components/dataDisplay/Carousel/AboutBanner';
const HorHeaderFixed = () => {
  const [isVisible, setVisible] = useState(false);
  // const {pathname} = useLocation();
  const {footer, footerType, layoutType} = useLayoutContext();

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (layoutType === LayoutType.FRAMED) {
      document.body.classList.add('framedHorHeaderFixedLayout');
    } else {
      document.body.classList.remove('framedHorHeaderFixedLayout');
    }
  }, [layoutType]);

  return (
    <Layout
      className={clsx('app-layout-hor-header-fixed', {
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
      })}>
      <AppSidebar open={isVisible} onClose={onClose} />
      <AppHeader showDrawer={showDrawer} />
      <Layout className='app-layout-hor-header-fixed-main'>
        {/* {pathname === '/' && <ScrollAutomatically />}
        {pathname === '/artists' && <ArtistBanner />}
        {pathname === '/about' && <AboutBanner />} */}
        {/* pathname === '/about' ||
          pathname === '/music-users' ||
          pathname === '/artists' */}
        <div className='container'>
          <AppContentView />
          <AppFooter />
        </div>
      </Layout>
    </Layout>
  );
};

export default HorHeaderFixed;
