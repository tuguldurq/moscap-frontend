import {
  CopyrightCircleOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from '@ant-design/icons';
import './index.style.less';
import {Col, Row, Space} from 'antd';
import {footerMenus} from 'util/letters';
import {Link} from 'react-router-dom';

const CustomFooter = () => {
  return (
    <div className='custom-footer'>
      <div className='footer-menu'>
        <Row gutter={{md: 30}} justify={'space-around'}>
          {footerMenus.map((menu) => (
            <Col xs={24} sm={24} md={24} xl={5} key={`footer-menu-${menu.key}`}>
              <h4>{menu.label}</h4>
              <br />
              {menu?.children?.map((subMenu) => (
                <p key={`footer-sub-menu-${menu.key}`}>{subMenu.label}</p>
              ))}
            </Col>
          ))}
          <Col xs={24} sm={24} md={24} xl={4}>
            <Link to={'/'} style={{display: 'flex'}}>
              <img
                src='/assets/images/logo-mini.png'
                alt='logo'
                style={{width: 27}}
              />
              <h2 className='footer-logo-text'>MOSCAP</h2>
            </Link>
            <Space size='large' style={{marginTop: 16}}>
              <Link
                to={'https://www.facebook.com/profile.php?id=100086697694032'}
                target='_blank'>
                <FacebookFilled style={{fontSize: 20, color: '#292929'}} />
              </Link>
              <Link to={'https://www.instagram.com/moscap.mn/'} target='_blank'>
                <InstagramFilled style={{fontSize: 20, color: '#292929'}} />
              </Link>
              <Link
                to={'https://www.youtube.com/@moscapmongolia'}
                target='_blank'>
                <YoutubeFilled style={{fontSize: 25, color: '#292929'}} />
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
      <div className='copy-right'>
        <CopyrightCircleOutlined /> MOSCAP 2023 - Зохиогчийн эрхээр
        хамгаалагдсан.
      </div>
    </div>
  );
};

export default CustomFooter;
