import React from 'react';
// import {useDispatch} from 'react-redux';
// import {onGetFolderListForArtist} from '../../../redux/actions/Artist';
import ArtistListing from './ArtistListing';
import {useIntl} from 'react-intl';
import AppsContainer from '../../../@crema/core/AppsContainer';
// import SideBarArtist from './ArtistSideBar';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {useParams} from 'react-router-dom';
import ArtistDetail from './ArtistDetail';

const Artist = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(onGetFolderListForArtist());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(onGetLabelListForArtist());
  // }, [dispatch]);

  const {id} = useParams();
  const getMainComponent = () => {
    if (id) return <ArtistDetail />;
    else return <ArtistListing />;
  };
  const {messages} = useIntl();
  return (
    <AppsContainer title={messages['artistApp.artist']} fullView>
      <AppPageMetadata title='Artist App' />
      {getMainComponent()}
    </AppsContainer>
  );
};

export default Artist;
