import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import AppTableContainer from '@crema/core/AppTableContainer';
import AppsContainer from '@crema/core/AppsContainer';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import SongsColumns from './songsColumns';
import AppsFooter from '@crema/core/AppsContainer/AppsFooter';
import {useEffect, useState} from 'react';
import {getSongList, setCurrentSong} from 'redux/actions';
import SongHeader from './Header';
import './index.style.less';
import AppsPagination from '@crema/core/AppsPagination';
import SongCreate from './SongCreate';
import EditSong from './EditSong';

const Songs = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [createSongModal, setCreateSongModal] = useState(false);
  const {messages} = useIntl();
  const {songList, selectedSong} = useSelector(({song}) => song);
  const [filterText, onSetFilterText] = useState('');

  useEffect(() => {
    dispatch(getSongList(filterText, page, pageSize));
  }, [dispatch, filterText, page, pageSize]);

  const onChangePageView = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };
  const onCloseSongCreateModal = () => {
    setCreateSongModal(false);
  };
  const onOpenSongCreateModal = () => {
    setCreateSongModal(true);
  };

  const onCloseEditSongModal = () => {
    dispatch(setCurrentSong(null));
  };

  return (
    <AppsContainer title={messages['home.songs']} fullView>
      <AppPageMetadata title='Songs'></AppPageMetadata>
      <AppsHeader>
        <SongHeader
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onCreateSong={onOpenSongCreateModal}
        />
      </AppsHeader>
      <AppsContent>
        <AppTableContainer data={songList?.data} columns={SongsColumns} />
      </AppsContent>
      <AppsFooter>
        {songList?.data?.length > 0 ? (
          <AppsPagination
            pageSize={songList?.per_page}
            count={songList?.total}
            page={songList?.current_page}
            total={songList?.total}
            onChange={onChangePageView}
          />
        ) : null}
        {createSongModal ? (
          <SongCreate open={createSongModal} onClose={onCloseSongCreateModal} />
        ) : null}
        {selectedSong !== null ? (
          <EditSong
            song={selectedSong}
            open={selectedSong !== null ? true : false}
            onClose={onCloseEditSongModal}
          />
        ) : null}
      </AppsFooter>
    </AppsContainer>
  );
};

export default Songs;
