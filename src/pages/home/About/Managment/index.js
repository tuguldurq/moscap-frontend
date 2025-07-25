import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col, Layout, Row, Typography} from 'antd';
import {Link} from 'react-router-dom';
// import Team from 'pages/extraPages/AboutUs/Team';
// import StyledTimelineImage from '../../../thirdParty/timeLine/ReactImageTimeline/index';
import LandingHeader from '../../Components/Header/dark';
const {Content} = Layout;
const {Title, Paragraph} = Typography;

import '../index.style.less';

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
                Бидний тухай
              </Title>
            </center>
            <Paragraph className='paragraph'>
              Монголын зохиолч, хөгжмийн зохиолч, нийтлэгчдийн нийгэмлэг
              (MOSCAP) нь 2011 оноос Монгол Улсын Засгийн газрын хэрэгжүүлэгч
              агентлаг Оюуны өмчийн газартай <i>“Зохиогчийн эрхийн тухай”</i>{' '}
              хуулийн дагуу <i>“Хамтран ажиллах гэрээ”</i> байгуулсан билээ.
              2014 оноос Олон улсын зохиолч, хөгжмийн зохиолчдын нийгэмлэгүүдийн
              холбоо{' '}
              <Link to={'https://www.cisac.org/'} target='_blank'>
                CISAC
              </Link>
              (International Confederation of Societies of Authors and
              Composers)-д гишүүнчлэлтэй болж CISAC-ийн Ази, Номхон далайн бүсэд
              харъяалагдан Олон улсын хэмжээнд үйл ажиллагаа тасралтгүй явуулж
              байна.
            </Paragraph>

            <Paragraph className='paragraph2'>
              Ингэснээр MOSCAP нь Монгол улсын нутаг дэвсгэрт монголын болон
              гадаадын дуу хөгжмийн бүтээлийн зохиогчийн онцгой эрхийг
              хамгаалах, Олон улсын хэмжээнд CISAC-ийн гишүүн орнуудын Хамтын
              удирдлагын байгууллагууд монголын хөгжмийн зохиолч, зохиолчдын
              бүтээлийн зохиогчийн эрхийг хамгаалах харилцан үүрэг хүлээн
              ажиллаж байна. MOSCAP нь Монгол улсын Оюуны өмчийн газарт улирал
              тутам, <b>CISAC-ийн хавар намрын бүсийн хуралд</b> тогтмол оролцож
              жилд хоёр удаа тус тус тайлангаа тавьж ил тод нээлттэй ажиллаж
              байна.
            </Paragraph>
            <div className='image-wrapper'>
              <img src='../assets/images/about.png' alt='Image description' />
              <div className='image-description'>CISAC APC Meeting 2022</div>
            </div>
            <Paragraph className='paragraph3'>
              Дуу хөгжмийн бүтээлийн зохиогчийн онцгой эрхийг хамгаалахгүйгээр
              оюуны өмч, зохиогчийн эрхийг тухай ярих боломжгүй юм. Тиймээс
              Монгол улсын Оюуны өмчийн тухай хууль, Зохиогчийн эрхийн тухай
              хуулийн зүйл заалтуудыг хэрэгжүүлэхийн тулд Хамтын удирдлагын
              байгууллагын үйл ажиллагааг төрөөс дэмжих хууль эрх зүйн тогтолцоо
              нэгэнт бүрдсэн билээ. Эдгээр хуулийн хэрэгжилтийн хүрээнд Монгол
              Улсын Оюуны өмчийн тухай хуулийн 17.3 дэх заалтын дагуу Засгийн
              газрын хэрэгжүүлэгч агентлаг Оюуны өмчийн газартай 2021 оны 08
              дугаар сарын 09-ний өдөр 2021/06 тоот “Хамтран ажиллах гэрээ”-г
              шинэ хуулийн өөрчлөлтийн дагуу шинэчлэн байгуулан ажиллаж байна.
              Одоогийн байдлаар Монгол улсын хэмжээнд Оюуны өмч, Зохиогчийн
              эрхийн тухай хуулийн хүрээнд Оюуны өмчийн газартай хамтран ажиллах
              гэрээтэй, олон улсын байгууллагын гишүүнчлэлтэй Монголын цорын
              ганц Хамтын удирдлагын байгууллага нь MOSCAP болно.
            </Paragraph>
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
