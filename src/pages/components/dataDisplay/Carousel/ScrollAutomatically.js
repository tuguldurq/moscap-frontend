import React from 'react';
import {Space, Carousel} from 'antd';

const ScrollAutomatically = () => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: `url('https://bmi.com/images/licensing/home-banner.jpg')`,
  };
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Carousel dotPosition='left'>
        <div>
          <div style={contentStyle}></div>
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

export default ScrollAutomatically;
