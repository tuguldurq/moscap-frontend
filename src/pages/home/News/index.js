import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col, Layout, Row, Typography} from 'antd';
import LandingHeader from '../Components/Header/dark';
const {Content} = Layout;

const News = () => {
  return (
    <Layout>
      <AppPageMetadata title='News' />

      <LandingHeader />
      <Content>
        <center style={{marginTop: 120}}>
          <Typography.Title style={{fontSize: 34}} underline>
            Мэдээ & Арга хэмжээ
          </Typography.Title>
        </center>
        <Row
          gutter={32}
          justify={'center'}
          style={{marginRight: 0, marginLeft: 0, marginTop: 50}}>
          <Col>
            <div className='news-nsug'>
              <p>
                {' '}
                Нийслэлийн соёл, урлагийн газар болон MOSCAP нь хөгжмийн
                зохиолч, яруу найрагчдын дуу хөгжмийг сурталчлах, олон нийтэд
                түгээх, хууль бус үйл ажиллагааг таслан зогсоох, уран
                бүтээлчдийн дуу хөгжмийн бүтээлийн биет болон биет бус
                борлуулалт, хэрэглээний төрөл, орлогыг нэмэгдүүлэх замаар
                зохиогчийн эрхийг хамгаалах, бэхжүүлэх, Нийслэлийн оюун соёлыг
                дээшлүүлэх зорилгоор хамтын ажиллагааг хэрэгжүүлж байна.
              </p>
            </div>
          </Col>
          <Col>
            <div className='news-cisac'>
              <p>
                {' '}
                CISAC-ийн Ази Номхон далайн бүсийн ээлжит хурал нь 2023 оны 5
                сарын 10-наас 12-ний өдрүүдэд Тайланд улсын Бангкок хотод зохион
                байгуулагдахаар гишүүн нийгэмлэгүүдэд урилга тараагдсан.
              </p>
            </div>
          </Col>
          <Col>
            <div className='news-pantasia'>
              <p>
                {' '}
                Fantasia Studio нь Пиксар-н уран бүтээлүүдээр оркестрын тоглолт
                зохион байгуулж уг тоглолтод тоглогдох бүтээлүүдийн онцгой
                эрхийг MOSCAP-аас авч хамтран ажилласан.
              </p>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default News;
