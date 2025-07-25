import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Avatar, Col, Layout, List, Row, Typography} from 'antd';
// import Team from 'pages/extraPages/AboutUs/Team';
// import StyledTimelineImage from '../../../thirdParty/timeLine/ReactImageTimeline/index';
import LandingHeader from '../../Components/Header/dark';
const {Content} = Layout;
const {Title, Paragraph} = Typography;
import {
  AL,
  AU,
  CA,
  CH,
  CN,
  CR,
  FR,
  GB,
  GR,
  HK,
  ID,
  JP,
  KR,
  KZ,
  MO,
  MY,
  PH,
  RU,
  SG,
  TH,
  TW,
  UA,
  US,
  VN,
} from 'country-flag-icons/react/3x2';

import '../index.style.less';
const data = [
  {title: 'Albania ALBAUTOR', flag: <AL />},
  {title: 'Australia APRA, AMCOS', flag: <AU />},
  {title: 'Britain PRS', flag: <GB />},
  {title: 'Canada SOCAN', flag: <CA />},
  {title: 'China MCSC', flag: <CN />},
  {title: 'Costa Rica ACAM', flag: <CR />},
  {title: 'France SACEM', flag: <FR />},
  {title: 'Greek AUTODIA', flag: <GR />},
  {title: 'Hong Kong CASH', flag: <HK />},
  {title: 'Indonesia WAMI', flag: <ID />},
  {title: 'Japan JASRAC', flag: <JP />},
  {title: 'Kazakhstan KAZAK', flag: <KZ />},
  {title: 'Macau MACA', flag: <MO />},
  {title: 'Malaysia MACP', flag: <MY />},
  {title: 'South Korea KOMCA', flag: <KR />},
  {title: 'Philippines FILSCAP', flag: <PH />},
  {title: 'Russia RAO', flag: <RU />},
  {title: 'Singapore COMPASS', flag: <SG />},
  {title: 'Switzerland SUISA', flag: <CH />},
  {title: 'Thailand MCT', flag: <TH />},
  {title: 'Taiwan MUST', flag: <TW />},
  {title: 'USA SESAC, HFA', flag: <US />},
  {title: 'Ukraine UACRR', flag: <UA />},
  {title: 'Vietnam VCPMC', flag: <VN />},
];
const About = () => {
  return (
    <Layout>
      <AppPageMetadata title='About us' />
      <LandingHeader />
      <Content style={{padding: 20}}>
        <Row justify={'center'} style={{marginTop: 140}}>
          <Col xs={24} md={8} key='a' className='article-body'>
            <center>
              <Title style={{fontFamily: 'Montserrat', fontSize: 34}}>
                Гадаад харилцаа
              </Title>
            </center>
            <Paragraph className='paragraph'>
              Монголын зохиолч, хөгжмийн зохиолч, нийтлэгчдийн нийгэмлэг
              (MOSCAP)-ийн Хамтын ажиллагааны гэрээтэй улс орнууд.
            </Paragraph>
            <List
              style={{marginTop: 70}}
              itemLayout='horizontal'
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.flag} />}
                    title={item.title}
                  />
                </List.Item>
              )}
            />
          </Col>
          {/* <Col key='e' xs={24} md={14}>
            <Team />
          </Col> */}
        </Row>
        {/* <Row justify={'center'}>
          <Col md={14} xs={24}>
            <StyledTimelineImage></StyledTimelineImage>
          </Col>
        </Row> */}
      </Content>
    </Layout>
  );
};
export default About;
