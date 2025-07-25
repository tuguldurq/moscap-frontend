import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import CheckBox from './CheckBox';
import ArtistCheckedActions from './ArtistCheckedActions';
import ViewSelectButtons from './ViewSelectButtons';
import AppsPagination from '../../../../../@crema/core/AppsPagination';
import {Button, Input} from 'antd';
import {PlusCircleFilled} from '@ant-design/icons';

const ArtistHeader = (props) => {
  const {
    checkedArtists,
    setCheckedArtists,
    filterText,
    onSetFilterText,
    onChangePageView,
    onSelectArtistsForDelete,
    onClickCreateArtist,
    // page,
    onChange,
    pageView,
  } = props;

  const {artistData, totalArtists} = useSelector(({artist}) => artist);
  const {messages} = useIntl();
  const {Search} = Input;

  return (
    <>
      <div className='artist-content-header'>
        <CheckBox
          checkedArtists={checkedArtists}
          setCheckedArtists={setCheckedArtists}
        />

        {checkedArtists.length > 0 ? (
          <ArtistCheckedActions
            onSelectArtistsForDelete={onSelectArtistsForDelete}
            checkedArtists={checkedArtists}
            // setCheckedArtists={setCheckedArtists}
          />
        ) : null}

        <Search
          className='artist-search'
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
          placeholder={messages['common.searchHere']}
        />

        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
        <Button
          type='primary'
          icon={<PlusCircleFilled />}
          onClick={() => onClickCreateArtist(true)}>
          {messages['artist.add']}
        </Button>
      </div>
      {artistData?.data?.length > 0 ? (
        <AppsPagination
          className='artist-header-pagination'
          pageSize={artistData?.meta?.per_page}
          count={artistData?.meta?.total}
          page={artistData?.meta?.current_page}
          total={totalArtists}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default ArtistHeader;

ArtistHeader.defaultProps = {
  checkedArtists: [],
  filterText: '',
  page: 0,
};

ArtistHeader.propTypes = {
  checkedArtists: PropTypes.array,
  setCheckedArtists: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  onSelectArtistsForDelete: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
  onClickCreateArtist: PropTypes.func,
};
