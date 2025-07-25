import React from 'react';
import clsx from 'clsx';
import {Avatar, Badge} from 'antd';
import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
import {useAuthUser} from '../../../../utility/AuthHooks';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';
import PropTypes from 'prop-types';
import './index.style.less';

const UserInfo = ({hasColor}) => {
  const {themeMode} = useThemeContext();
  const {user} = useAuthUser();
  const {sidebarColorSet} = useSidebarContext();
  const {isSidebarBgImage} = useSidebarContext();

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  return (
    <>
      {hasColor ? (
        <div
          style={{
            backgroundColor: isSidebarBgImage
              ? ''
              : sidebarColorSet.sidebarHeaderColor,
            color: sidebarColorSet.sidebarTextColor,
          }}
          className={clsx('cr-user-info cr-user-info-hasColor', {
            light: themeMode === 'light',
          })}>
          <a className='cr-user-info-inner ant-dropdown-link'>
            {user.photoURL ? (
              <Avatar className='cr-user-info-avatar' src={user.photoURL} />
            ) : (
              <Avatar className='cr-user-info-avatar'>{getUserAvatar()}</Avatar>
            )}
            <span className='cr-user-info-content'>
              <span className='cr-user-name-info'>
                <h3
                  className={clsx('cr-user-name text-truncate', {
                    light: themeMode === 'light',
                  })}>
                  {user.displayName ? user.displayName : 'admin user '}
                </h3>
              </span>
              <span className='cr-user-designation text-truncate'>
                {user.role === 'artist' ? (
                  <Badge count={'Уран бүтээлч'} />
                ) : (
                  'admin user'
                )}
              </span>
            </span>
          </a>
        </div>
      ) : (
        <div
          className={clsx('cr-user-info', {
            light: themeMode === 'light',
          })}>
          <a className='cr-user-info-inner ant-dropdown-link'>
            {user.photoURL ? (
              <Avatar className='cr-user-info-avatar' src={user.photoURL} />
            ) : (
              <Avatar className='cr-user-info-avatar'>{getUserAvatar()}</Avatar>
            )}
            <span className='cr-user-info-content'>
              <span className='cr-user-name-info'>
                <h3
                  className={clsx('cr-user-name text-truncate', {
                    light: themeMode === 'light',
                  })}>
                  {user.role === 'artist' ? (
                    <Badge count={'Уран бүтээлч'} />
                  ) : (
                    'admin user '
                  )}
                </h3>
              </span>
            </span>
          </a>
        </div>
      )}
    </>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  hasColor: PropTypes.bool,
};
