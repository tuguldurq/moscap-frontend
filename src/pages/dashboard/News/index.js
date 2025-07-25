import AppPageMetadata from '@crema/core/AppPageMetadata';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import {useParams} from 'react-router-dom';
import NewsListing from './NewsListing';
import NewsDetail from './NewsDetail';

const News = () => {
  const {messages} = useIntl();
  const {id} = useParams();
  const component = () => {
    if (id) {
      return <NewsDetail />;
    } else {
      return <NewsListing />;
    }
  };
  return (
    <AppsContainer fullView title={messages['sidebar.pages.news']}>
      <AppPageMetadata title={'News List'} />
      {component()}
    </AppsContainer>
  );
};

export default News;
