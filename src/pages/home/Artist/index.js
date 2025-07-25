import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col, Row, Typography, Layout, Collapse, Space} from 'antd';
import CarouselArtist from 'pages/Landing/Carousel/Artist';
import LandingHeader from '../Components/Header';
// import FAQ from './FAQ';
import './index.style.less';

const {Title, Paragraph} = Typography;
const {Content} = Layout;
const {Panel} = Collapse;

import {moscap} from '@crema/services/db/extraPages/faqList/moscap';

const Artist = () => {
  return (
    <>
      <Layout>
        <AppPageMetadata title='Artist' />
        <LandingHeader />
        <CarouselArtist />
        <Content className='artist-content'>
          <center style={{marginTop: 50}}>
            <Title>Хэрвээ та уран бүтээлч бол</Title>
          </center>
          <Row
            justify={'center'}
            align='middle'
            gutter={40}
            style={{
              marginTop: 70,
              marginBottom: 70,
              marginLeft: 0,
              marginRight: 0,
            }}>
            <Col sm={24} md={6}>
              <Title style={{fontSize: 36}}>Бидний үнэ цэнэ.</Title>
              <Paragraph style={{fontWeight: 300, fontSize: 20}}>
                <ul>
                  <li>Лицензийн төлбөр</li>
                  <li>Уран бүтээлчдэд зориулсан сургалт, семинар</li>
                  <li>Олон улсын стандарт уран бүтээлийн код</li>
                  <li>Олон улсын стандарт уран бүтээлчийн хувийн код</li>
                </ul>
              </Paragraph>
            </Col>
            <Col sm={24} md={8}>
              <div
                style={{
                  backgroundColor: '#0270BD',
                  borderRadius: 40,
                  padding: 60,
                }}>
                <Title style={{color: '#fff', marginBottom: 40, fontSize: 36}}>
                  Бидний давуу тал
                </Title>
                <Paragraph
                  style={{fontWeight: 300, color: '#fff', fontSize: 20}}>
                  {' '}
                  Бид уран бүтээлчдийн Оюуны өмчийн эрх ашгийг хамгаалдаг ба
                  уран бүтээлч болон бизнес эрхлэгчдийн хоорондын гүүр болж
                  тэдэнд уран бүтээлийнхээ үр шимийг хүртэх бололцоог олгодог.
                </Paragraph>
              </div>
            </Col>
          </Row>
          <div className='artist-image-bg-1'></div>
          <center style={{marginBottom: 50}}>
            <Title>Түгээмэл асуулт & хариулт</Title>
          </center>
          <Row justify={'center'}>
            <Col md={12} xs={24}>
              <Space direction='vertical'>
                {moscap.map((item) => {
                  return (
                    <Collapse
                      defaultActiveKey={['1']}
                      collapsible='header'
                      key={`collapse-${item.id}`}
                      size={'large'}>
                      <Panel header={item.ques} key={item.id}>
                        <p>{item.ans}</p>
                      </Panel>
                    </Collapse>
                  );
                })}
              </Space>
              {/* <FAQ /> */}
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Artist;
