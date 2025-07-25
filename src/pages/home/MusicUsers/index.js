import {Col, Row, Space, Typography, Layout} from 'antd';
import academyData from '@crema/services/db/dashboard/academy';
import GeneralStats from 'pages/dashboard/Academy/GeneralStats';
import LandingHeader from '../Components/Header';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import './index.style.less';
import StatsCard from './StatsCard';
import MyCarousel from 'pages/Landing/Carousel/MusicUser';

const {Title, Paragraph} = Typography;
const {Content} = Layout;
const MusicUsers = () => {
  return (
    <Layout>
      <AppPageMetadata title='Music Users' />
      <LandingHeader />
      <MyCarousel />
      <Content>
        <Row justify={'center'}>
          <Col md={14}>
            <Space direction='vertical' size={'large'} style={{marginTop: 50}}>
              <center>
                <Title style={{fontSize: 22, fontWeight: 500}}>
                  Яагаад зохиогчийн эрх авах хэрэгтэй вэ?
                </Title>
              </center>
              <iframe
                style={{width: '100%', height: 450}}
                src='https://www.youtube.com/embed/4f8U_eKY9Ak'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen></iframe>
              <Row justify={'center'} gutter={60} style={{margin: 0}}>
                <Col md={12}>
                  <Title level={3} underline>
                    MOSCAP-ийн Бүтээл ашиглах зохиогчийн эрхийн зөвшөөрөл олгох
                    гэрээ хэрэгтэй юү?
                  </Title>
                  <Paragraph
                    ellipsis={{
                      rows: 3,
                      expandable: true,
                      symbol: 'дэлгэрэнгүй',
                    }}>
                    Концерт зохион байгуулах, хөгжмийн бүтээлийг олон нийтэд
                    хүргэх, хэвлэн нийтлэх, хуулбарлах болон бусад хэлбэрээр дуу
                    хөгжмийг өөрийн гэр бүл, найз нөхдийнхөө хүрээнээс гадна
                    ашигладаг хэн бүхэн автоматаар MOSCAP-ийн үйлчлүүлэгч болдог
                    бөгөөд Бүтээл ашиглах зохиогчийн эрхийн зөвшөөрөл авах
                    шаардлагатай юм.
                  </Paragraph>
                </Col>
                <Col md={12}>
                  <Title level={3} underline style={{marginBottom: 30}}>
                    Та бизнестээ хөгжим тоглуулж байна уу?
                  </Title>
                  <Paragraph
                    ellipsis={{
                      rows: 3,
                      expandable: true,
                      symbol: 'дэлгэрэнгүй',
                    }}>
                    Та бизнестээ дуу хөгжим ашиглаж ашиг олохын зэрэгцээ таны
                    ашиглаж байгаа бүтээлүүдийн зохиогчид мөн адил үр өгөөжөө
                    хүртэх эрхтэй юм. Иймээс дуу хөгжмийн бүтээлийг олон нийтэд
                    түгээх хэлбэрээр ашиглахын тулд бүтээл ашиглах зохиогчийн
                    зөвшөөрөл авах нь хуулийн дагуу зүй ёсны хэрэглээ болдог.
                  </Paragraph>
                </Col>
              </Row>
              <Row style={{marginLeft: 30}}>
                <Col style={{marginBottom: 0}}>
                  <Title>Зохиогчийн эрхийн зөвшөөрөл яаж авах вэ?</Title>
                  <Paragraph>
                    Бизнесийн төрлийг сонгох эсвэл{' '}
                    <a href='tel:+(976) 95054846'>+(976) 95054846</a> дугаар руу
                    залгаж нэмэлт мэдээлэл авна уу.
                  </Paragraph>
                </Col>
              </Row>

              {GeneralStats && (
                <Row justify={'center'} gutter={{md: 50, xs: 50}}>
                  {academyData.academicStats.map((item, index) => (
                    <Col xs={24} sm={12} lg={8} key={'a' + index}>
                      <StatsCard
                        text={item.title}
                        value={item.count}
                        bgColor={'#0A8FDC'}
                        icon={item.icon}
                      />
                    </Col>
                  ))}
                </Row>
              )}
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MusicUsers;
