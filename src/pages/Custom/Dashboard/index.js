import React, {useEffect} from 'react';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import SalesState from './SalesState';
import RegisteredUsersStat from './RegisteredUsersStat';
// import Application from './Application';
// import ReportCard from './ReportCard';
import RecentOrders from './RecentOrders';
// import Revenue from './Revenue';
// import MarketingCampaign from './MarketingCampaign';
// import NotificationsEcom from './Notifications';
// import NewCustomers from './NewCustomers';
// import PopularProducts from './PopularProducts';
// import SiteVisitors from './SiteVisitors';
// import Browser from './Browser';
import {AppInfoView} from '../../../@crema';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
// import ecommerceData from '@crema/services/db/dashboard/ecommerce';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {onGetDashboardData} from 'redux/actions/Dashboard';
import {MdMusicNote} from 'react-icons/md';
import {HiUser} from 'react-icons/hi';
import {BiBuilding} from 'react-icons/bi';
import {CgNotes} from 'react-icons/cg';
import IntlMessages from '@crema/utility/IntlMessages';
import analyticsData from '@crema/services/db/dashboard/analytics';
import TrafficSource from './TrafficSource';

const Dashboard = () => {
  const {dashboardData} = useSelector(({dashboard}) => dashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetDashboardData());
  }, []);
  console.log('dashboardData', dashboardData);
  return (
    <>
      <AppPageMetadata title='Хянах самбар' />
      {dashboardData ? (
        <AppRowContainer>
          <Col xs={24} sm={12} lg={6}>
            <SalesState
              icon={<HiUser fontSize={28} />}
              type={<IntlMessages id='dashboard.totalArtist' />}
              bgColor='#0A8FDC'
              value={dashboardData.totals?.artist}
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <SalesState
              icon={<MdMusicNote fontSize={28} />}
              type={<IntlMessages id='dashboard.totalSongs' />}
              bgColor='#49BD65'
              value={dashboardData.totals?.songs}
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <SalesState
              icon={<BiBuilding fontSize={28} />}
              type={<IntlMessages id='dashboard.totalMusicUsers' />}
              bgColor='#9E49E6'
              value={dashboardData.totals?.musicUser}
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <SalesState
              icon={<CgNotes fontSize={28} />}
              type={<IntlMessages id='dashboard.other' />}
              bgColor='#3A3849'
              value={dashboardData.totals?.other}
            />
          </Col>

          <Col xs={24} lg={24} key={'b'}>
            <RegisteredUsersStat data={dashboardData} />
          </Col>
          {/* <Col xs={24} lg={6} key={'c'}>
            <Application />
          </Col> */}

          {/* {ecommerceData.reportCards.map((reportVal) => (
            <Col xs={24} lg={8} key={'d' + reportVal.id + Math.random()}>
              <ReportCard data={reportVal} />
            </Col>
          ))} */}

          <Col xs={24} lg={18} key={'e'}>
            <RecentOrders recentUsers={dashboardData?.recentUsers} />
          </Col>
          <Col xs={24} lg={6} key={'f'}>
            <TrafficSource trafficData={analyticsData.trafficData} />
          </Col>

          {/* <Col xs={24} lg={12} key={'g'}>
            <MarketingCampaign
              marketingCampaign={ecommerceData.marketingCampaign}
            />
          </Col>
          <Col xs={24} lg={12} key={'h'}>
            <NotificationsEcom notifications={ecommerceData.notifications} />
          </Col>

          <Col xs={24} lg={12} key={'i'}>
            <NewCustomers newCustomers={ecommerceData.newCustomers} />
          </Col>
          <Col xs={24} lg={12} key={'j'}>
            <PopularProducts popularProducts={ecommerceData.popularProducts} />
          </Col>

          <Col xs={24} lg={18} key={'k'}>
            <SiteVisitors siteVisitorsData={ecommerceData.siteVisitors} />
          </Col>
          <Col xs={24} lg={6} key={'l'}>
            <Browser browserData={ecommerceData.browser} />
          </Col> */}
        </AppRowContainer>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default Dashboard;
