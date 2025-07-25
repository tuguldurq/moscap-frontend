import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Layout, Col, Row} from 'antd';
import ContactUs from 'pages/extraPages/ContactUs';
import {useDispatch} from 'react-redux';
import {hideMessage} from '../../../redux/actions';
import LandingHeader from '../Components/Header/dark';

const {Content} = Layout;

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(hideMessage());
  return (
    <Layout>
      <AppPageMetadata title='Contact' />
      <LandingHeader />
      <Content>
        <Row style={{marginTop: 140}} justify={'center'}>
          <Col sm={24} md={14}>
            <ContactUs />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Contact;
