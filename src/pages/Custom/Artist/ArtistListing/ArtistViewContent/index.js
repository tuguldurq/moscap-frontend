import React from 'react';
import ArtistListItem from './ArtistListItem';
import ArtistGridItem from './ArtistGridItem';
// import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import AppList from '../../../../../@crema/core/AppList';
import AppGrid from '../../../../../@crema/core/AppGrid';
import ListEmptyResult from '../../../../../@crema/core/AppList/ListEmptyResult';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import ArtistListSkeleton from '../../../../../@crema/core/AppSkeleton/ContactListSkeleton';
import {AppAnimates} from '../../../../../shared/constants/AppEnums';
import ArtistListItemMobile from './ArtistListItemMobile';

const ArtistViewContent = (props) => {
  const {
    list,
    pageView,
    loading,
    handleAddArtistOpen,
    onChangeStarred,
    onChangeCheckedArtists,
    checkedArtists,
    onSelectArtistsForDelete,
    onOpenEditArtist,
    onViewArtistDetail,
  } = props;
  // const labelList = useSelector(({artist}) => artist.labelList);

  return (
    <>
      {pageView === 'list' ? (
        <>
          <div className='artist-list-desktop'>
            <AppList
              data={list}
              animation={AppAnimates.SLIDEUPIN}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id='artistApp.createArtist' />}
                  onClick={handleAddArtistOpen}
                  placeholder={<ArtistListSkeleton />}
                />
              }
              renderItem={(artist) => (
                <ArtistListItem
                  key={artist.id}
                  artist={artist}
                  // labelList={labelList}
                  onChangeCheckedArtists={onChangeCheckedArtists}
                  checkedArtists={checkedArtists}
                  onSelectArtistsForDelete={onSelectArtistsForDelete}
                  onChangeStarred={onChangeStarred}
                  onViewArtistDetail={onViewArtistDetail}
                  onOpenEditArtist={onOpenEditArtist}
                />
              )}
            />
          </div>
          <div className='artist-list-mobile'>
            <AppList
              data={list}
              animation={AppAnimates.SLIDEUPIN}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id='artistApp.createArtist' />}
                  onClick={handleAddArtistOpen}
                  placeholder={<ArtistListSkeleton />}
                />
              }
              renderItem={(artist) => (
                <ArtistListItemMobile
                  key={artist.id}
                  artist={artist}
                  // labelList={labelList}
                  checkedArtists={checkedArtists}
                  onChangeStarred={onChangeStarred}
                  onViewArtistDetail={onViewArtistDetail}
                  onChangeCheckedArtists={onChangeCheckedArtists}
                />
              )}
            />
          </div>
        </>
      ) : (
        <div className='artist-grid-view'>
          <AppGrid
            responsive={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 3,
            }}
            data={list}
            renderItem={(artist) => (
              <ArtistGridItem
                key={artist.id}
                artist={artist}
                // labelList={labelList}
                onChangeCheckedArtists={onChangeCheckedArtists}
                checkedArtists={checkedArtists}
                onChangeStarred={onChangeStarred}
                onSelectArtistsForDelete={onSelectArtistsForDelete}
                onViewArtistDetail={onViewArtistDetail}
                onOpenEditArtist={onOpenEditArtist}
              />
            )}
          />
        </div>
      )}
    </>
  );
};

export default ArtistViewContent;

ArtistViewContent.defaultProps = {
  list: [],
  checkedArtists: [],
};

ArtistViewContent.propTypes = {
  list: PropTypes.array,
  pageView: PropTypes.string.isRequired,
  checkedArtists: PropTypes.array,
  onChangeCheckedArtists: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onSelectArtistsForDelete: PropTypes.func,
  onOpenEditArtist: PropTypes.func,
  onViewArtistDetail: PropTypes.func,
  handleAddArtistOpen: PropTypes.func,
  loading: PropTypes.bool,
};
