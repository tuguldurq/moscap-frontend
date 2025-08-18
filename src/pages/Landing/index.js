import React, {useEffect} from 'react';
import {Layout, Row, Col, Card, Typography, Button, Space} from 'antd';
import './index.style.less';
import MyCarousel from './Carousel';
import {useIntl} from 'react-intl';
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  FacebookFilled,
} from '@ant-design/icons';
import {Link, useNavigate} from 'react-router-dom';
import LandingHeader from 'pages/home/Components/Header';
import IntlMessages from '@crema/utility/IntlMessages';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import CustomFooter from './Footer';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {onGetNewsList} from 'redux/actions';
// import MyCarousel from './Carousel';
const {Content} = Layout;
// const {Title} = Typography;
const xs = 24;

const LandingPage = () => {
  const {messages} = useIntl();
  const dispatch = useDispatch();
  const {newsList} = useSelector(({news}) => news);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(onGetNewsList());
  }, [dispatch]);

  return (
    <Layout>
      <AppPageMetadata title='MOSCAP' />
      <LandingHeader />
      {/* carousel images */}
      <MyCarousel />

      {/* contect */}
      <Content className='content'>
        <Row gutter={{md: 40}} justify={'center'} style={{marginTop: -100}}>
          <Col sm={24} md={12} lg={10} xl={9} xxl={7} xs={xs}>
            <Link to={'/artists'}>
              <Card
                style={{
                  borderRadius: 20,
                  padding: 20,
                  textAlign: 'center',
                }}
                hoverable
                headStyle={{border: 'none'}}
                title={
                  <Typography.Title>
                    {messages['home.artists']}
                  </Typography.Title>
                }>
                <Typography.Paragraph style={{lineHeight: 2}}>
                  {messages['home.artists.description']}
                </Typography.Paragraph>
                <Button
                  type='primary'
                  shape='circle'
                  icon={<ArrowRightOutlined />}
                />
              </Card>
            </Link>
          </Col>
          <Col sm={24} md={12} lg={10} xl={9} xxl={7} xs={xs}>
            <Link to={'/music-users'}>
              <Card
                style={{
                  borderRadius: 20,
                  padding: 20,
                  textAlign: 'center',
                }}
                hoverable
                headStyle={{border: 'none'}}
                title={
                  <Typography.Title>
                    {messages['home.musicUsers']}
                  </Typography.Title>
                }>
                <Typography.Paragraph style={{lineHeight: 2}}>
                  {messages['home.musicUsers.description']}
                </Typography.Paragraph>
                <Button
                  type='primary'
                  shape='circle'
                  style={{background: '#BA5948', borderColor: '#BA5948'}}
                  icon={<ArrowRightOutlined />}
                />
              </Card>
            </Link>
          </Col>
        </Row>
        <center style={{marginTop: 60}}>
          <Button
            className='scroll-bottom'
            style={{height: 55, width: 55}}
            type='ghost'
            shape='circle'
            icon={<ArrowDownOutlined style={{fontSize: '26px'}} />}></Button>
        </center>

        <Row
          gutter={{md: 40}}
          justify={'center'}
          align='middle'
          style={{marginTop: 60, marginBottom: 120}}>
          <Col sm={24} md={12} lg={11} xl={9} xxl={7} xs={xs}>
            <Space direction='vertical' size='large'>
              <Typography.Title>
                <IntlMessages id='about.supportCompany.oug' />
              </Typography.Title>
              <Typography.Paragraph style={{textAlign: 'justify'}}>
                <IntlMessages id='about.supportCompany.ougDescription' />
              </Typography.Paragraph>
              <Link to={'/page/1'}>
                <Button type='primary' className='home-button-primary'>
                  {messages['common.readmore']} <ArrowRightOutlined />
                </Button>
              </Link>
            </Space>
          </Col>
          <Col sm={24} md={12} lg={11} xl={9} xxl={7} xs={24}>
            <div className='container-image'>
              <div className='image1'></div>
              <div className='image2'></div>
            </div>
          </Col>
        </Row>

        <Row
          gutter={{md: 40}}
          justify={'center'}
          align='middle'
          style={{marginBottom: 120}}>
          <Col
            sm={{span: 24, order: 1}}
            md={{span: 12, order: 1}}
            lg={{span: 11, order: 1}}
            xl={{span: 9, order: 1}}
            xxl={{span: 7, order: 1}}
            xs={{span: 24, order: 2}}>
            <div className='container-image1'>
              <div className='image1'></div>
              <div className='image2'></div>
            </div>
          </Col>
          <Col
            sm={{span: 24, order: 2}}
            md={{span: 12, order: 2}}
            lg={{span: 11, order: 2}}
            xl={{span: 9, order: 2}}
            xxl={{span: 7, order: 2}}
            xs={{span: xs, order: 1}}>
            <Space direction='vertical' size='large'>
              <Typography.Title>
                <IntlMessages id='about.supportCompany.cisac' />
              </Typography.Title>
              <Typography.Paragraph style={{textAlign: 'justify'}}>
                <IntlMessages id='about.supportCompany.cisacDescription' />
              </Typography.Paragraph>
              <Link to={'/page/2'}>
                <Button type='primary' className='home-button-secondary'>
                  {messages['common.readmore']} <ArrowRightOutlined />
                </Button>
              </Link>
            </Space>
          </Col>
        </Row>
        <Row
          gutter={{md: 40}}
          justify={'center'}
          align='middle'
          style={{marginTop: 60}}>
          <Col sm={24} md={12} lg={11} xl={9} xxl={7} xs={xs}>
            <Space direction='vertical' size='middle'>
              <Typography.Title>
                <IntlMessages id='about.supportCompany.meta' />
              </Typography.Title>
              <Space>
                <FacebookFilled style={{fontSize: 32, color: '#1877F2'}} />
                <img
                  src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png'
                  width={29}
                />
              </Space>
              <Typography.Paragraph style={{textAlign: 'justify'}}>
                <IntlMessages id='about.supportCompany.metaDescription' />
              </Typography.Paragraph>
              <Link to={'/page/3'}>
                <Button type='primary' className='home-button-primary'>
                  {messages['common.readmore']} <ArrowRightOutlined />
                </Button>
              </Link>
            </Space>
          </Col>
          <Col sm={24} md={12} lg={11} xl={9} xxl={7} xs={24}>
            <div className='container-image2'>
              <div className='image1'></div>
              <div className='image2'></div>
            </div>
          </Col>
        </Row>
        <center style={{marginTop: 120}}>
          <Typography.Title style={{fontSize: 34}} underline>
            Мэдээ & Арга хэмжээ
          </Typography.Title>
        </center>
        <Row gutter={32} justify={'center'} style={{marginTop: 50}}>
          {newsList?.map((item, index) => (
            <Col key={'col-' + index}>
              <div
                className='news-cisac'
                key={'image-i' + index}
                onClick={() => navigate('/news/d/' + item.id)}
                style={{
                  background: `linear-gradient(
                    179.84deg,
                    rgba(0, 0, 0, 0) 22.64%,
                    rgba(0, 0, 0, 0.8) 80.33%,
                    #000000 99.86%
                  ), url(${process.env.REACT_APP_STORAGE_URL}/${item?.images[0]['path']})`,
                  backgroundSize: `100%`,
                  backgroundRepeat: `no-repeat`,
                }}>
                <p>{item?.title}</p>
              </div>
            </Col>
          ))}
        </Row>
        <center style={{textDecoration: 'underline'}}>
          <Typography.Title level={4}>Бусад мэдээ</Typography.Title>
        </center>
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default LandingPage;
