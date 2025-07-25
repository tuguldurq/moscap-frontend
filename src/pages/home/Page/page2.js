import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col, Layout, Row, Typography} from 'antd';
import LandingHeader from '../Components/Header/dark';
const {Content} = Layout;
const {Title, Paragraph} = Typography;

import './index.style.less';

const Page2 = () => {
  return (
    <Layout>
      <AppPageMetadata title='About us' />
      <LandingHeader />
      <Content style={{padding: 20}}>
        <Row justify={'center'} style={{marginTop: 140}}>
          <Col xs={24} md={8} key='a' className='article-body'>
            <center>
              <Title style={{fontFamily: 'Montserrat', fontSize: 34}}>
                CISAC (International Confederation of Societies of Authors and
                Composers)
              </Title>
            </center>
            <Paragraph className='paragraph'>
              CISAC International Confederation of Societies of Authors and
              Composers буюу Олон улсын зохиолч, хөгжмийн зохиолчдын
              нийгэмлэгүүдийн холбоо нь зохиолчдын нийгэмлэгүүдийн дэлхийн
              тэргүүлэгч, гүүр байгууллага юм. CISAC нь дэлхийн 118 орны 227
              гишүүн нийгэмлэгтэй бөгөөд газарзүйн бүх бүс нутгаас 4 сая гаруй
              уран бүтээлчдийг төлөөлдөг юм. CISAC-ийг Шведийн дуу зохиогч,
              хөгжимчин, дуучин, гитарчин, продюсер, алдарт Шведийн ABBA
              хамтлагийн гишүүн Björn Ulvaeus нь тус байгууллагын ерөнхийлөгчөөр
              ажиллаж байна. Энэхүү байгууллага нь дэлхий даяар зохиогчдийн
              эрхийг хамгаалж, ашиг сонирхлыг нь дэмждэг.
            </Paragraph>
            <Paragraph className='paragraph2'>
              Мөн MOSCAP-тай адил үйл ажиллагаа явуулдаг Xамтын менежментийн
              байгууллагуудад дэлхийн өнцөг булан бүрт зохиогчдийг төлөөлөх
              боломжийг олгож, дэлхийн хаана ч зохиолчдод бүтэээлийг нь
              ашигласны төлбөр буюу роялти авах боломжийг олгодог. MOSCAP нь
              2014 оноос CISAC-д гишүүнээр элсэж CISAC-ийн Ази, Номхон далайн
              бүсэд харъяалагдан жилд хоёр удаа Олон улсад үйл ажиллагааны болон
              санхүүгийн тайлангаа хэлэлцүүлж, үнэлүүлж, хамтран ажилладаг
              Монголын цорын ганц Хамтын удирдлагын байгууллага болно. CISAC нь
              1926 онд үүсгэн байгуулагдсан бөгөөд төв оффис нь Франц улсад,
              харин Африк, Өмнөд Америк (Чили), Ази Номхон далайн (Хятад), Европ
              (Унгар) дахь бүс нутгуудад төлөөлөгчийн газартай, төрийн бус,
              ашгийн төлөө бус байгууллага юм.
            </Paragraph>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default Page2;
