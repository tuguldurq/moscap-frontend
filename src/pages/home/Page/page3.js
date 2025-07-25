import {FacebookFilled} from '@ant-design/icons';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col, Layout, Row, Space, Typography} from 'antd';
import LandingHeader from '../Components/Header/dark';
const {Content} = Layout;
const {Title, Paragraph} = Typography;

import './index.style.less';

const Page3 = () => {
  return (
    <Layout>
      <AppPageMetadata title='About us' />
      <LandingHeader />
      <Content style={{padding: 20}}>
        <Row justify={'center'} style={{marginTop: 140}}>
          <Col xs={24} md={8} key='a' className='article-body'>
            <center>
              <Title style={{fontFamily: 'Montserrat', fontSize: 34}}>
                Meta Platforms, Inc.{' '}
              </Title>
              <Space>
                <FacebookFilled style={{fontSize: 32, color: '#1877F2'}} />
                <img
                  src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png'
                  width={29}
                />
              </Space>
            </center>
            <Paragraph className='paragraph'>
              Meta Platforms, Inc. (Meta), буюу хуучнаар Facebook, Inc. нь
              нийгмийн сүлжээ, зар сурталчилгаа, бизнесийн шинэ шийдлүүдийн
              нийлүүлэгч юм. Тус компани нь Family of Apps (FoA) болон Reality
              Labs (RL) сегментүүдээр дамжуулан ажилладаг. FoA сегмент нь
              Facebook, Instagram, Messenger, WhatsApp болон бусад
              үйлчилгээнүүдээс бүрддэг.
            </Paragraph>

            <Paragraph className='paragraph2'>
              MOSCAP нь 2021 оноос эхлэн Facebook, Instagram, Whatsapp гэх дууны
              уран бүтээл ашигладаг аппликэйш нүүд дээр Meta-тай дууны лицэнз
              олгох хамтын ажиллагааны гэрээ байгуулан ажиллаж байна.
            </Paragraph>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default Page3;
