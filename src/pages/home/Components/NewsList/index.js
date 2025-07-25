import AppRowContainer from '@crema/core/AppRowContainer';
import {Card, Col} from 'antd';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {onGetNewsList} from 'redux/actions';
import './index.style.less';

const NewsList = () => {
  const dispatch = useDispatch();
  const {newsList} = useSelector(({news}) => news);
  useEffect(() => {
    dispatch(onGetNewsList());
  }, [dispatch]);
  return (
    <>
      <AppRowContainer gutter={24} justify='center'>
        {newsList?.map((item, index) => (
          <Col xs={12} sm={24} md={4} key={`news-in-home-${index}`}>
            <Card
              hoverable
              cover={
                item.images.length > 0 && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${item?.images[0]['path']}`}
                  />
                )
              }>
              <Card.Meta style={{whiteSpace: 'initial'}} title={item?.title} />
            </Card>
          </Col>
        ))}
      </AppRowContainer>
    </>
  );
};

export default NewsList;
