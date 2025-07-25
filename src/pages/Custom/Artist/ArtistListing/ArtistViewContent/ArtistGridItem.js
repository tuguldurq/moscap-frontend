import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import ItemMenu from './ItemMenu';
import {PhoneOutlined} from '@ant-design/icons';
import clsx from 'clsx';
import {Card, Checkbox, Avatar} from 'antd';
import ActionBtnHover from './ActionBtnHover';
import {MdOutlineEmail} from 'react-icons/md';
import {name} from 'util/basic';

const ArtistGridItem = (props) => {
  const {
    artist,
    onChangeCheckedArtists,
    checkedArtists,
    onChangeStarred,
    onSelectArtistsForDelete,
    onOpenEditArtist,
    onViewArtistDetail,
  } = props;

  return (
    <Card
      className={clsx('artist-grid-card card-hover')}
      onClick={() => onViewArtistDetail(artist)}>
      <div className='artist-grid-card-header'>
        <span
          className='artist-grid-card-header-checkbox'
          onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedArtists.includes(artist.id)}
            onChange={(event) => onChangeCheckedArtists(event, artist.id)}
            color='primary'
          />
        </span>

        {artist.image ? (
          <Avatar className='artist-grid-card-avatar' src={artist.image} />
        ) : (
          <Avatar className='artist-grid-card-avatar'>
            {artist.user.first_name[0].toUpperCase()}
          </Avatar>
        )}

        <span
          className='artist-grid-card-header-action'
          onClick={(event) => event.stopPropagation()}>
          <ItemMenu
            onSelectArtistsForDelete={onSelectArtistsForDelete}
            artist={artist}
            onChangeStarred={onChangeStarred}
            onOpenEditArtist={onOpenEditArtist}
          />
        </span>

        <ActionBtnHover
          artist={artist}
          onChangeStarred={onChangeStarred}
          onSelectArtistsForDelete={onSelectArtistsForDelete}
          onOpenEditArtist={onOpenEditArtist}
        />
      </div>

      <div className='artist-grid-card-content'>
        <h3 className='artist-grid-card-title'>{name(artist)}</h3>
        <p className='text-truncate'>
          {artist.stage_name ? artist.stage_name : null}
        </p>
      </div>

      <div className='artist-grid-card-action'>
        <div className='artist-grid-card-action-item'>
          <MdOutlineEmail
            lassName='artist-grid-card-icon'
            style={{marginRight: 10, fontSize: 16}}
          />
          <p className='text-truncate mb-0'>
            {artist.user.email ? (
              artist.user.email
            ) : (
              <IntlMessages id='common.na' />
            )}
          </p>
        </div>
        <div className='artist-grid-card-action-item'>
          <PhoneOutlined className='artist-grid-card-icon' />
          <p className='text-truncate mb-0'>{artist.user.phone}</p>
        </div>
      </div>
    </Card>
  );
};

export default ArtistGridItem;

ArtistGridItem.defaultProps = {
  checkedArtists: [],
};

ArtistGridItem.propTypes = {
  artist: PropTypes.object.isRequired,
  onChangeCheckedArtists: PropTypes.func,
  checkedArtists: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectArtistsForDelete: PropTypes.func,
  onOpenEditArtist: PropTypes.func,
  onViewArtistDetail: PropTypes.func,
};
