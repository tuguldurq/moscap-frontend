import React from 'react';
import {Space, Carousel, Row, Col, Typography} from 'antd';

const {Title, Text} = Typography;

const AboutBanner = () => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    background: `url('https://www.bmi.com/frontend/images/module1_bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#000',
  };
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Carousel dotPosition='left'>
        <div>
          <div style={contentStyle}>
            <Row
              align='middle'
              justify='space-evenly'
              style={{paddingTop: 160}}>
              <Col span={9} style={{textAlign: 'center'}}>
                <Title style={{color: '#fff'}}>
                  MOSCAP гэж ямар байгууллага вэ?
                </Title>
                <Text style={{color: '#fff'}}>
                  Бид Монголын болон гадаадын дуу зохиогч, хөгжмийн зохиолч,
                  хөгжмийн хэвлэн нийтлэгчдийн эрхийг олон улсад болон үндэсний
                  хэмжээнд хамгаалах, уран бүтээлийнхээ үр шимийг хүртэх
                  бололцоог бүрдүүлэхийг төлөө ажилладаг Оюуны өмчийн газрын
                  хамтын ажиллагааны ашгийн төлөө бус байгууллага юм.
                </Text>
              </Col>
              <Col span={9} style={{textAlign: 'center'}}>
                <Title style={{color: '#fff'}}>Яагаад MOSCAP гэж?</Title>
                <Text style={{color: '#fff'}}>
                  Бид Монголын болон гадаадын дуу зохиогч, хөгжмийн зохиолч,
                  хөгжмийн хэвлэн нийтлэгчдийн эрхийг олон улсад болон үндэсний
                  хэмжээнд үгтэй болон үгүй хөгжмийн бүтээлийн зохиогчийн эрхийг
                  хамгааладаг байгууллага.
                </Text>
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

export default AboutBanner;
