import React from 'react';
import {Card, Col, Divider, Row, Space} from 'antd';
import AboutUs from 'pages/extraPages/AboutUs';
// import KnowledgeBase from 'pages/extraPages/KnowledgeBase';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
import {useIntl} from 'react-intl';
import {BsMusicNoteList, BsMusicPlayerFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
// import NewsList from './NewsList';

const HomePage = () => {
  const {messages} = useIntl();

  return (
    <>
      <Row
        justify='center'
        gutter={24}
        style={{marginTop: -70, position: 'inherit'}}>
        <Col xs={24} md={9}>
          <Link to={'/artists'}>
            <Card hoverable className='basic-card card-hover'>
              <Meta
                title={
                  <Space size='middle'>
                    <BsMusicNoteList fontSize={32} />
                    <Title>{messages['home.artists']}</Title>
                  </Space>
                }
                description={messages['home.artists.description']}
              />
            </Card>
          </Link>
        </Col>
        <Col xs={24} md={9}>
          <Link to={'/music-users'}>
            <Card hoverable className='basic-card card-hover'>
              <Meta
                title={
                  <Space size='middle'>
                    <BsMusicPlayerFill fontSize={32} />
                    <Title>{messages['home.musicUsers']}</Title>
                  </Space>
                }
                description={messages['home.musicUsers.description']}
              />
            </Card>
          </Link>
        </Col>
      </Row>
      <Divider orientation='center' style={{marginTop: 50, marginBottom: 40}}>
        <Title>{messages['extra.aboutUs']}</Title>
      </Divider>
      <AboutUs />
      <Divider orientation='center' style={{marginTop: 50, marginBottom: 40}}>
        <Title>{messages['home.news']}</Title>
      </Divider>
      {/* <NewsList /> */}
    </>
  );
};

export default HomePage;
