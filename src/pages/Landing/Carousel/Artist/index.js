import IntlMessages from '@crema/utility/IntlMessages';
import {Button, Carousel, Col, Row, Typography} from 'antd';
import {Link} from 'react-router-dom';
const CarouselArtist = () => {
  return (
    <Carousel dots={false}>
      <div className='background-artist'>
        <Row justify={'space-between'}>
          <Col>
            <Typography.Title style={{textAlign: 'left'}} ellipsis={false}>
              Уран бүтээлч.
            </Typography.Title>
          </Col>
          <Col>
            <Link to={'/signup'} style={{marginBottom: 20}}>
              <Button block>
                <IntlMessages id='common.registerWidth' />
              </Button>
            </Link>
            <p style={{marginTop: 20}}>
              <span style={{color: '#ffffff', marginRight: 20}}>
                Та бүртгэлтээ юу?{' '}
              </span>
              <Link to={'/signin'}>
                <IntlMessages id='common.login' />
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default CarouselArtist;
