import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';

const CheckBox = ({checkedArtists, setCheckedArtists}) => {
  const artistData = useSelector(({artist}) => artist.artistData);

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const artistIds = artistData?.data?.map((artist) => artist.id);
      setCheckedArtists(artistIds);
    } else {
      setCheckedArtists([]);
    }
  };

  return (
    <div className='artist-header-checkbox-view'>
      <Checkbox
        color='primary'
        indeterminate={
          checkedArtists.length > 0 &&
          checkedArtists.length < artistData?.data?.length
        }
        checked={
          artistData?.data?.length > 0 &&
          checkedArtists.length === artistData?.data?.length
        }
        onChange={onHandleMasterCheckbox}
      />
    </div>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checkedArtists: PropTypes.array.isRequired,
  setCheckedArtists: PropTypes.func,
};
