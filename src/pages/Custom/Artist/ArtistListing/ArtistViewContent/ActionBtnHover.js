import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';

const ActionBtnHover = (props) => {
  const {onSelectArtistsForDelete, artist, onChangeStarred, onOpenEditArtist} =
    props;

  const onDeleteArtist = () => {
    onSelectArtistsForDelete([artist.id]);
  };

  const onChangeStarredStatus = () => {
    onChangeStarred(!artist.isStarred, artist);
  };

  const onClickEditOption = () => {
    onOpenEditArtist(artist);
  };

  return (
    <span className='artist-list-item-action-hover'>
      <AppsStarredIcon item={artist} onChange={onChangeStarredStatus} />
      <AppIconButton
        onClick={onClickEditOption}
        title={<IntlMessages id='common.edit' />}
        icon={<AiOutlineEdit />}
      />
      <AppIconButton
        onClick={onDeleteArtist}
        title={<IntlMessages id='common.delete' />}
        icon={<AiOutlineDelete />}
      />
    </span>
  );
};

export default ActionBtnHover;

ActionBtnHover.propTypes = {
  onSelectArtistsForDelete: PropTypes.func,
  artist: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditArtist: PropTypes.func,
};
