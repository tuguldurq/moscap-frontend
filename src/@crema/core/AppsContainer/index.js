import React, {useState} from 'react';
import AppInfoView from '@crema/core/AppInfoView';
import PropTypes from 'prop-types';
import AppSidebar from './AppSidebar';
import clsx from 'clsx';
import {Card} from 'antd';
import './index.style.less';
import QueueAnim from 'rc-queue-anim';
import {useLayoutContext} from '../../utility/AppContextProvider/LayoutContextProvider';

const AppsContainer = (props) => {
  const [isAppDrawerOpen, setAppDrawerOpen] = useState(false);
  const {footer, navStyle} = useLayoutContext();
  const {
    title,
    headerButton,
    noContentAnimation,
    sidebarContent,
    fullView,
    children,
  } = props;
  return (
    <div className='apps-wrap'>
      <div
        className={clsx('apps-wrap-header', {
          appsWrapHeaderFull: fullView,
        })}>
        <QueueAnim style={{zIndex: 3, overflow: 'hidden'}} type='scale'>
          <h2 className='text-truncate' key='title'>
            {title}
          </h2>
        </QueueAnim>
        {headerButton ? headerButton : null}
      </div>

      <div className='apps-container'>
        {sidebarContent ? (
          <QueueAnim
            style={{zIndex: 3}}
            type={props.type ? props.type : 'left'}>
            <AppSidebar
              isAppDrawerOpen={isAppDrawerOpen}
              setAppDrawerOpen={setAppDrawerOpen}
              footer={footer}
              fullView={fullView}
              navStyle={navStyle}
              sidebarContent={sidebarContent}
              key='sidebar'
            />
          </QueueAnim>
        ) : null}
        <div
          className={clsx('apps-main-content', {
            appsMainContentFull: fullView,
          })}>
          {noContentAnimation ? (
            <Card
              bordered={false}
              key='content'
              className='apps-main-content-card'
              style={{
                ...props.cardStyle,
              }}>
              {children}
            </Card>
          ) : (
            <QueueAnim
              type={props.type ? props.type : 'right'}
              style={{minHeight: '100%'}}>
              <Card
                bordered={false}
                key='content'
                className='apps-main-content-card'
                style={{
                  ...props.cardStyle,
                }}>
                {children}
              </Card>
            </QueueAnim>
          )}

          <AppInfoView />
        </div>
      </div>
    </div>
  );
};

export default AppsContainer;

AppsContainer.defaultProps = {
  title: '',
  noContentAnimation: false,
};

AppsContainer.propTypes = {
  title: PropTypes.string,
  cardStyle: PropTypes.object,
  noContentAnimation: PropTypes.bool,
  sidebarContent: PropTypes.node,
  fullView: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.any,
  headerButton: PropTypes.node,
};
