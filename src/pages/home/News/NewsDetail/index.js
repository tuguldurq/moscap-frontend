import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Layout, Row, Col, Typography} from 'antd';
import LandingHeader from 'pages/home/Components/Header/dark';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setCurrentNews} from 'redux/actions';

const {Content} = Layout;
const {Title, Paragraph} = Typography;

const NewsDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {newsItem} = useSelector(({news}) => news);

  useEffect(() => {
    dispatch(setCurrentNews(id));
  }, [dispatch, id]);
  return (
    <Layout>
      <AppPageMetadata title='News detail' />
      <LandingHeader />
      <Content style={{padding: 20}}>
        <Row justify={'center'} style={{marginTop: 140}}>
          <Col xs={24} md={8} key='a'>
            <center>
              <Title style={{fontFamily: 'Montserrat', fontSize: 34}}>
                {newsItem?.title}
              </Title>
            </center>
            <Paragraph className='paragraph'>
              <div
                dangerouslySetInnerHTML={{__html: newsItem?.description}}></div>
            </Paragraph>
            <div className='image-wrapper'>
              {newsItem?.images?.map((item, index) => (
                <img
                  src={item?.path}
                  alt='Image description'
                  key={'news-image-' + index}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default NewsDetail;
