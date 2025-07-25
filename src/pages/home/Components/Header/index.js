import AppLanguageSwitcher from '@crema/core/AppLanguageSwitcher';
import {MenuOutlined} from '@ant-design/icons';
import IntlMessages from '@crema/utility/IntlMessages';
import {Layout, Menu, Row, Col, Drawer, Button, Space} from 'antd';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {menus} from 'util/letters';
import './header.style.less';

const {Header} = Layout;
const container = 18;
const xs = 24;
console.log('container', container, xs);
const LandingHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Header className='landing-header header-light'>
      <Row justify={'center'}>
        <Col xs={24} xl={18} xxl={14}>
          <div className='menu-wrapper'>
            <Link to={'/'}>
              <img
                src='/assets/images/logo.png'
                alt='logo'
                className='responsive-logo'
                style={{width: 87}}
              />
            </Link>
            <Menu
              style={{width: '100%', justifyContent: 'center'}}
              theme='light'
              mode='horizontal'
              items={menus}></Menu>
            <div className='lang'>
              <AppLanguageSwitcher />
            </div>
            <Link to={'/signin'} className='header-login'>
              <Button ghost>
                <IntlMessages id='common.login' />
              </Button>
            </Link>
            <div
              className='menu-icon'
              onClick={() => setDrawerVisible(!drawerVisible)}>
              <MenuOutlined />
            </div>
          </div>
          <Drawer
            placement='right'
            closable={true}
            onClose={() => setDrawerVisible(!drawerVisible)}
            open={drawerVisible}
            extra={
              <Space size={'middle'}>
                <AppLanguageSwitcher />
                <Link to={'/artist/signup'}>
                  <IntlMessages id='common.signup' />
                </Link>
                <Link to={'/signin'}>
                  <Button ghost type='primary'>
                    <IntlMessages id='common.login' />
                  </Button>
                </Link>
              </Space>
            }>
            <Menu theme='light' mode='vertical' items={menus}></Menu>
          </Drawer>
        </Col>
      </Row>
    </Header>
  );
};

export default LandingHeader;
