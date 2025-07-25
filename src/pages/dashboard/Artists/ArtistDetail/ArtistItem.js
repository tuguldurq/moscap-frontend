import {createRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {onGetSelectedArtist, onNullifyArtist} from 'redux/actions';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import TodoListSkeleton from '@crema/core/AppSkeleton/TodoListSkeleton';
import TaskDetailHeader from 'pages/apps/ToDo/TaskDetail/TaskDetailHeader';
import ArtistDetail from 'pages/profile/ArtistDetail';
import './index.style.less';

const ArtistItem = () => {
  const contentRef = createRef();
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(onGetSelectedArtist(id));
    return () => {
      onNullifyArtist();
    };
  }, [dispatch, id]);
  const selectedArtist = useSelector(({artist}) => artist.selectedArtist);
  if (!selectedArtist) {
    return <TodoListSkeleton />;
  }
  return (
    <div className='artist-detail' ref={contentRef}>
      <AppsHeader>
        <TaskDetailHeader selectedTask={selectedArtist} />
      </AppsHeader>
      <AppsContent isDetailView>
        <ArtistDetail item={selectedArtist} key={'artist_Detail'} />
      </AppsContent>
    </div>
  );
};

export default ArtistItem;
