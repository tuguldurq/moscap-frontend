import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import NewsHeader from './header';
import NewsList from './NewsList';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetNewsList} from 'redux/actions';
import {VIEW_TYPE} from 'redux/reducers/News';
import NewsGrid from './NewsGrid';
import './index.style.less';

const NewsListing = () => {
  const {viewType, newsList} = useSelector(({news}) => news);
  const {loading} = useSelector(({common}) => common);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetNewsList());
  }, [dispatch]);
  return (
    <div className='product-list-view'>
      <AppsHeader>
        <NewsHeader viewType={viewType} />
      </AppsHeader>
      <AppsContent>
        <div className='product-list-main-content'>
          {viewType === VIEW_TYPE.GRID ? (
            <NewsGrid newsList={newsList} loading={loading} />
          ) : (
            <NewsList newsList={newsList} loading={loading} />
          )}
        </div>
      </AppsContent>
    </div>
  );
};

export default NewsListing;
