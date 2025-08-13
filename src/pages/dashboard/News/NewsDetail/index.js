import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import {createRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import Slider from 'react-slick';
import {setCurrentNews} from 'redux/actions';
import Detail from './DetailInfo';
import Header from './Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const NewsDetail = () => {
  const contentRef = createRef();
  const dispatch = useDispatch();
  const {id} = useParams();
  const {newsItem} = useSelector(({news}) => news);

  useEffect(() => {
    dispatch(setCurrentNews(id));
  }, [dispatch, id]);
  return (
    <div ref={contentRef}>
      <AppsHeader>
        <Header id={id} />
      </AppsHeader>
      <AppsContent isDetailView>
        <div style={{padding: 50}}>
          <Slider {...settings}>
            {newsItem?.images?.map((img) => {
              return (
                <div
                  className='product-list-slider-thumb'
                  key={img.id}
                  style={{height: 200}}>
                  <img
                    src={`${process.env.REACT_APP_STORAGE_URL}/${img.path}`}
                    alt='watch'
                    style={{height: 300}}
                  />
                </div>
              );
            })}
          </Slider>
          <Detail item={newsItem} />
        </div>
      </AppsContent>
    </div>
  );
};

export default NewsDetail;
