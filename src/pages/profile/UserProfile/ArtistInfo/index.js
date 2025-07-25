import AppsContainer from '@crema/core/AppsContainer';
import SongList from './SongList';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useState} from 'react';
import CreateSong from './CreateSong';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {AddSong, getAllSongList} from 'redux/actions';
import {useSelector} from 'react-redux';

const ArtistInfo = () => {
  const [isAddSong, setIsAddSong] = useState(false);
  const artistSongs = useSelector(({artist}) => artist.artistSongs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSongList());
  }, [dispatch]);

  const addSongButton = (
    <Button
      type='primary'
      size='medium'
      onClick={() => setIsAddSong(!isAddSong)}>
      <PlusOutlined /> Бүтээл нэмэх
    </Button>
  );

  const handleClose = () => {
    setIsAddSong(!isAddSong);
  };
  const onHandleAddSong = (values) => {
    dispatch(AddSong(values));
    handleClose();
  };
  return (
    <>
      <AppsContainer
        fullView
        title={'Уран бүтээлийн жагсаалт'}
        headerButton={addSongButton}>
        <SongList data={artistSongs} />
      </AppsContainer>
      {isAddSong ? (
        <CreateSong
          isAddSong={isAddSong}
          handleClose={handleClose}
          onAddSong={onHandleAddSong}
        />
      ) : null}
    </>
  );
};

export default ArtistInfo;
