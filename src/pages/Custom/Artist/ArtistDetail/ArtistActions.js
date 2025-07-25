import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import AppIconButton from '../../../../@crema/core/AppIconButton';

const ArtistActions = (props) => {
  const {onDeleteArtist, onOpenEditArtist, artist} = props;

  return (
    <div className='artist-action'>
      <div className='artist-action-hover'>
        <AppIconButton
          icon={<AiOutlineEdit />}
          onClick={() => onOpenEditArtist(artist)}
        />
        {/* <AppsStarredIcon item={artist} onChange={onChangeStarred} /> */}
      </div>
      <AppIconButton icon={<AiOutlineDelete />} onClick={onDeleteArtist} />
    </div>
  );
};

export default ArtistActions;

ArtistActions.propTypes = {
  onDeleteArtist: PropTypes.func,
  artist: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditArtist: PropTypes.func,
};
