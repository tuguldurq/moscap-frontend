import React from 'react';
// import {MdLabelOutline} from 'react-icons/md';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ItemMenu from './ItemMenu';
// import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {Avatar, Checkbox} from 'antd';
import ActionBtnHover from './ActionBtnHover';
import {name} from '../../../../../util/basic';

const ArtistListItem = ({
  artist,
  // labelList,
  onChangeCheckedArtists,
  checkedArtists,
  onChangeStarred,
  onSelectArtistsForDelete,
  onViewArtistDetail,
  onOpenEditArtist,
}) => {
  return (
    <>
      <div
        key={artist.id}
        className={clsx('artist-list-item item-hover', {
          rootCheck: checkedArtists.includes(artist.id),
        })}
        onClick={() => onViewArtistDetail(artist)}>
        <span
          className='artist-list-item-checkbox-view'
          onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedArtists.includes(artist.id)}
            onChange={(event) => onChangeCheckedArtists(event, artist.id)}
            color='primary'
          />
        </span>
        {/* <span
          className='artist-list-item-star'
          onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon item={artist} onChange={onChangeStarred} />
        </span> */}
        <span className='artist-list-item-avatar-view'>
          {artist.image ? (
            <Avatar size={36} src={artist.image} />
          ) : (
            <Avatar size={36} className='artist-list-item-avatar'>
              {artist.user.last_name[0].toUpperCase()}
            </Avatar>
          )}
        </span>
        <span className='text-truncate artist-list-item-title'>
          {name(artist)}
        </span>

        <span className='text-truncate artist-list-item-col artist-list-item-email'>
          <span className='text-truncate'>
            {artist.user.email ? artist.user.email : null}
          </span>
        </span>
        <span className='text-truncate artist-list-item-col'>
          <span className='text-truncate'>{artist.user.phone}</span>
        </span>
        <span className='text-truncate artist-list-item-col artist-list-item-company'>
          <span className='text-truncate'>
            {artist.stage_name ? artist.stage_name : null}
          </span>
        </span>

        <span className='artist-list-item-action'>
          {/* <MdLabelOutline
            className='artist-list-export-icon'
            style={{color: onGetLabelColor(artist.label)}}
          /> */}

          <span
            className='artist-list-item-menu-view'
            onClick={(event) => event.stopPropagation()}>
            <ItemMenu
              onSelectArtistsForDelete={onSelectArtistsForDelete}
              artist={artist}
              onChangeStarred={onChangeStarred}
              onOpenEditArtist={onOpenEditArtist}
            />
          </span>
        </span>

        <ActionBtnHover
          artist={artist}
          onChangeStarred={onChangeStarred}
          onSelectArtistsForDelete={onSelectArtistsForDelete}
          onOpenEditArtist={onOpenEditArtist}
        />
      </div>
    </>
  );
};

export default ArtistListItem;

ArtistListItem.defaultProps = {
  labelList: [],
  checkedArtists: [],
};

ArtistListItem.propTypes = {
  artist: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  onChangeCheckedArtists: PropTypes.func,
  checkedArtists: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectArtistsForDelete: PropTypes.func,
  onViewArtistDetail: PropTypes.func,
  onOpenEditArtist: PropTypes.func,
};
