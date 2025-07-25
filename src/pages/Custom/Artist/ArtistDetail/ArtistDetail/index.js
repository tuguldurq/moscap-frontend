import React from 'react';
import './index.style.less';
import {Tabs} from 'antd';
import PersonalInfo from './PersonalInfo';
import ChangePassword from './ChangePassword';
import Contact from './Contact';
import SocialLink from './SocialLink';
import ArtistInfo from './ArtistInfo';
import Manager from './Manager';
import HeirInfo from './Heir';

import {HiUser} from 'react-icons/hi';
import {AiFillLock} from 'react-icons/ai';
import {FaNetworkWired, FaUserTie} from 'react-icons/fa';
import accountData from '@crema/services/db/account';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {BankFilled} from '@ant-design/icons';
import {RiParentFill, RiUserVoiceFill} from 'react-icons/ri';
import {MdPermContactCalendar} from 'react-icons/md';
import BankInformation from './BankInformation';

const UserProfile = ({item}) => {
  const TabPane = Tabs.TabPane;

  return (
    <div className='user-profile-container'>
      <Tabs
        className='user-profile-tabs'
        defaultActiveKey='1'
        tabPosition='left'>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <HiUser className='icon' />
              <span>
                <IntlMessages id='userProfile.personalInfo' />
              </span>
            </span>
          }
          key='1'>
          <PersonalInfo userData={item.user} />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <BankFilled className='icon' />
              <span>
                <IntlMessages id='common.bankInformation' />
              </span>
            </span>
          }
          key='6'>
          <BankInformation bank={item.user.bank} />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <MdPermContactCalendar className='icon' />
              <span>
                <IntlMessages id='common.emergencyContactShort' />
              </span>
            </span>
          }
          key='7'>
          <Contact contactData={item} />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <RiUserVoiceFill className='icon' />
              <span>
                <IntlMessages id='common.signup.affiliationInfo' />
              </span>
            </span>
          }
          key='8'>
          <ArtistInfo data={item} />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <FaUserTie className='icon' />
              <span>
                <IntlMessages id='common.managerInfo' />
              </span>
            </span>
          }
          key='9'>
          <Manager data={item} />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <RiParentFill className='icon' />
              <span>
                <IntlMessages id='userProfile.heirInfo' />
              </span>
            </span>
          }
          key='102'>
          <HeirInfo />
        </TabPane>
        {/* <TabPane
          tab={
            <span className='user-profile-icon'>
              <FaBandcamp className='icon' />
              <span>
                <IntlMessages id='userProfile.information' />
              </span>
            </span>
          }
          key='3'>
          <Information />
        </TabPane> */}
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <FaNetworkWired className='icon' />
              <span>
                <IntlMessages id='userProfile.social' />
              </span>
            </span>
          }
          key='4'>
          <SocialLink socialLink={accountData.member} />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <AiFillLock className='icon' />
              <span>
                <IntlMessages id='userProfile.changePassword' />
              </span>
            </span>
          }
          key='2'>
          <ChangePassword />
        </TabPane>
        {/* <TabPane
          tab={
            <span className='user-profile-icon'>
              <IoMdNotifications className='icon' />
              <span>
                <IntlMessages id='userProfile.notification' />
              </span>
            </span>
          }
          key='5'>
          <Notification notification={accountData.notification} />
        </TabPane> */}
      </Tabs>
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  item: PropTypes.any,
};
