import {Carousel, Typography} from 'antd';
import {useIntl} from 'react-intl';

const MyCarousel = () => {
  const {messages} = useIntl();

  return (
    <Carousel dots={false}>
      <div className='background'>
        <Typography.Title ellipsis={false}>
          {messages['common.moscap.title']}
        </Typography.Title>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
