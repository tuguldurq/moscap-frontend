import React from 'react';
import {Space, Carousel, Row, Col, Button} from 'antd';
import Title from 'antd/lib/typography/Title';

const ArtistBanner = () => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    background: `url('https://www.bmi.com/frontend/images/testbg_creators_news.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Carousel dotPosition='left'>
        <div>
          <div style={contentStyle}>
            <Row align='middle' justify='space-around'>
              <Col push={3} span={18} style={{paddingTop: 120}}>
                <Title style={{color: '#fff'}}>
                  Creators We Value Your Music.{' '}
                </Title>
                <Title level={4} style={{color: '#fff'}}>
                  Write On™.
                </Title>
              </Col>
              <Col span={4} style={{paddingTop: 120}}>
                <Button style={{width: '100%'}}>My Account</Button>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div style={contentStyle}></div>
        </div>
        <div>
          <div style={contentStyle}></div>
        </div>
        <div>
          <div style={contentStyle}></div>
        </div>
      </Carousel>
    </Space>
  );
};

export default ArtistBanner;
