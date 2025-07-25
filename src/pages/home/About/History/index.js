import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col, Layout, Row, Typography} from 'antd';
// import Team from 'pages/extraPages/AboutUs/Team';
import StyledTimelineImage from '../../../thirdParty/timeLine/ReactImageTimeline/index';
import LandingHeader from '../../Components/Header/dark';
const {Content} = Layout;
const {Title} = Typography;

import '../index.style.less';

const About = () => {
  return (
    <Layout>
      <AppPageMetadata title='About us' />
      <LandingHeader />
      <Content style={{padding: 20}}>
        <Row justify={'center'} style={{marginTop: 120}}>
          <Col md={14} xs={24}>
            <center>
              <Title style={{fontFamily: 'Montserrat', fontSize: 34}}>
                Түүхэн замнал
              </Title>
            </center>
            <StyledTimelineImage></StyledTimelineImage>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default About;
