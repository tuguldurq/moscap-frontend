import {Carousel, Typography} from 'antd';
const MyCarousel = () => {
  return (
    <Carousel dots={false}>
      <div className='background-music-user'>
        <Typography.Title ellipsis={false}>
          Та өөрийн бизнестээ хөгжим ашигладаг бол дуу хөгжим ашиглах зохиогчийн
          эрхийн зөвшөөрөл авах хэрэгтэй.
        </Typography.Title>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
