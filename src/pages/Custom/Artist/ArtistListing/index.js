import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {
  onDeleteArtists,
  onGetArtistList,
  onUpdateStarredStatusForArtist,
} from '../../../../redux/actions';
import ArtistHeader from './ArtistHeader';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import CreateArtist from '../CreateArtist';
import ArtistViewContent from './ArtistViewContent';
import ArtistDetail from '../ArtistDetail';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsFooter from '../../../../@crema/core/AppsContainer/AppsFooter';
import './index.style.less';
import ConfirmationModal from '../../../../@crema/core/AppConfirmationModal';

const ArtistListing = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const {artistData, totalArtists} = useSelector(({artist}) => artist);
  const [filterText, onSetFilterText] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [pageView, setPageView] = useState('list');
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [checkedArtists, setCheckedArtists] = useState([]);
  const [toDeleteArtists, setToDeleteArtists] = useState([]);
  const [isAddArtist, onSetIsAddArtist] = useState(false);
  const [isShowDetail, onShowDetail] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const loading = useSelector(({common}) => common.loading);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    dispatch(onGetArtistList(null, page, pageSize));
  }, [dispatch, pageView, page, pageSize, totalArtists]);

  const handleAddArtistOpen = () => {
    onSetIsAddArtist(true);
  };

  const handleAddArtistClose = () => {
    setSelectedArtist(null);
    onSetIsAddArtist(false);
  };

  const onViewArtistDetail = (artist) => {
    setSelectedArtist(artist);
    onShowDetail(true);
  };

  const onOpenEditArtist = (artist) => {
    setSelectedArtist(artist);
    handleAddArtistOpen();
  };

  const onChange = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  const onChangePageView = (view) => {
    setPageView(view);
  };

  const onChangeCheckedArtists = (checked, id) => {
    if (checked.target.checked) {
      setCheckedArtists(checkedArtists.concat(id));
    } else {
      setCheckedArtists(checkedArtists.filter((artistId) => artistId !== id));
    }
  };

  const onChangeStarred = (status, artist) => {
    const selectedIdList = [artist.id];
    const path = pathname.split('/');
    dispatch(
      onUpdateStarredStatusForArtist(
        selectedIdList,
        status,
        path[path.length - 1],
      ),
    );
  };

  const onUpdateArtist = (artist) => {
    setSelectedArtist(artist);
    handleAddArtistClose();
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return artistData?.data;
    } else {
      return (
        artistData?.data.length > 0 &&
        artistData?.data.filter((artist) =>
          artist.user.first_name
            .toUpperCase()
            .includes(filterText.toUpperCase()),
        )
      );
    }
  };

  const onDeleteSelectedArtists = () => {
    const path = pathname.split('/');
    dispatch(
      onDeleteArtists(
        path[path.length - 2],
        path[path.length - 1],
        toDeleteArtists,
        page,
      ),
    );
    setDeleteDialogOpen(false);
    setCheckedArtists([]);
  };

  const onSelectArtistsForDelete = (artistIds) => {
    setToDeleteArtists(artistIds);
    setDeleteDialogOpen(true);
  };

  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <ArtistHeader
          checkedArtists={checkedArtists}
          setCheckedArtists={setCheckedArtists}
          filterText={filterText}
          onSelectArtistsForDelete={onSelectArtistsForDelete}
          onSetFilterText={onSetFilterText}
          onChange={onChange}
          page={page}
          pageSize={pageSize}
          onClickCreateArtist={handleAddArtistOpen}
          onChangePageView={onChangePageView}
          pageView={pageView}
        />
      </AppsHeader>
      <AppsContent>
        <ArtistViewContent
          list={list}
          loading={loading}
          pageView={pageView}
          handleAddArtistOpen={handleAddArtistOpen}
          onChangeCheckedArtists={onChangeCheckedArtists}
          onChangeStarred={onChangeStarred}
          checkedArtists={checkedArtists}
          onSelectArtistsForDelete={onSelectArtistsForDelete}
          onViewArtistDetail={onViewArtistDetail}
          onOpenEditArtist={onOpenEditArtist}
        />
      </AppsContent>

      {artistData?.data?.length > 0 ? (
        <AppsFooter className='artist-footer'>
          <AppsPagination
            count={totalArtists}
            page={page}
            onChange={onChange}
          />
        </AppsFooter>
      ) : null}

      {isAddArtist ? (
        <CreateArtist
          isAddArtist={isAddArtist}
          handleAddArtistClose={handleAddArtistClose}
          selectArtist={selectedArtist}
          onUpdateArtist={onUpdateArtist}
        />
      ) : null}

      {isShowDetail ? (
        <ArtistDetail
          selectedArtist={selectedArtist}
          isShowDetail={isShowDetail}
          onShowDetail={onShowDetail}
          onSelectArtistsForDelete={onSelectArtistsForDelete}
          onOpenEditArtist={onOpenEditArtist}
        />
      ) : null}

      {isDeleteDialogOpen ? (
        <ConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteSelectedArtists}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </>
  );
};

export default ArtistListing;
