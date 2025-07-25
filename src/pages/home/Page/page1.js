import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col, Layout, Row, Typography} from 'antd';
// import Team from 'pages/extraPages/AboutUs/Team';
// import StyledTimelineImage from '../../../thirdParty/timeLine/ReactImageTimeline/index';
import LandingHeader from '../Components/Header/dark';
const {Content} = Layout;
const {Title, Paragraph} = Typography;

import './index.style.less';

const Page1 = () => {
  return (
    <Layout>
      <AppPageMetadata title='About us' />
      <LandingHeader />
      <Content style={{padding: 20}}>
        <Row justify={'center'} style={{marginTop: 140}}>
          <Col xs={24} md={8} key='a' className='article-body'>
            <center>
              <Title style={{fontFamily: 'Montserrat', fontSize: 34}}>
                Монгол Улсын Засгийн газрын хэрэгжүүлэгч агентлаг Оюуны өмчийн
                газар
              </Title>
            </center>
            <Paragraph className='paragraph'>
              Дуу хөгжмийн бүтээлийн зохиогчийн онцгой эрхийг хамгаалахгүйгээр
              оюуны өмч, зохиогчийн эрхийг тухай ярих боломжгүй юм.Тиймээс
              Монгол улсын “Оюуны өмчийн тухай хууль”, “Зохиогчийн эрхийн тухай
              хууль”-ийн зүйл заалтуудыг хэрэгжүүлэхийн тулд Хамтын удирдлагын
              байгууллагын үйл ажиллагааг төрөөс дэмжих хууль эрх зүйн тогтолцоо
              нэгэнт бүрдсэн билээ.
            </Paragraph>

            <Paragraph className='paragraph2'>
              Монголын зохиолч, хөгжмийн зохиолч, нийтлэгчдийн нийгэмлэг
              (MOSCAP) нь 2011 оноос Монгол Улсын Засгийн газрын хэрэгжүүлэгч
              агентлаг Оюуны өмчийн газартай “Зохиогчийн эрхийн тухай” хуулийн
              дагуу “Хамтран ажиллах гэрээ” байгуулан ажилласаар ирсэн байна.
              Мөн эдгээр хуулийн хэрэгжилтийн хүрээнд Монгол Улсын Оюуны өмчийн
              тухай хуулийн 17.3 дэх заалтын дагуу Засгийн газрын хэрэгжүүлэгч
              агентлаг Оюуны өмчийн газартай 2021 оны 08 дугаар сарын 09-ний
              өдөр 2021/06 тоот “Хамтран ажиллах гэрээ”-г шинэ хуулийн
              өөрчлөлтийн дагуу шинэчлэн байгуулан ажиллаж байна. Одоогийн
              байдлаар Монгол улсын хэмжээнд Оюуны өмч, Зохиогчийн эрхийн тухай
              хуулийн хүрээнд Оюуны өмчийн газартай хамтран ажиллах гэрээтэй
              цорын ганц Хамтын удирдлагын байгууллага нь MOCSAP болно.
            </Paragraph>
            {/* <div className='image-wrapper'>
              <img src='../assets/images/about.png' alt='Image description' />
              <div className='image-description'>CISAC APC Meeting 2022</div>
            </div> */}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default Page1;
