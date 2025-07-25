import React from 'react';
import {MdLabelOutline} from 'react-icons/md';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {Avatar} from 'antd';
import {CheckOutlined} from '@ant-design/icons';

const ArtistListItemMobile = ({
  artist,
  labelList,
  checkedArtists,
  onChangeStarred,
  onViewArtistDetail,
  onChangeCheckedArtists,
}) => {
  const onGetLabelColor = (labelId) => {
    if (labelId) {
      return (
        labelList.length > 0 &&
        labelList.find((label) => label.id === labelId).color
      );
    }
  };

  return (
    <>
      <div
        key={artist.id}
        className={clsx('artist-list-item-mobile item-hover', {
          rootCheck: checkedArtists.includes(artist.id),
        })}
        onClick={() => onViewArtistDetail(artist)}>
        <div className='artist-list-item-main-content-mobile'>
          <div
            className={clsx('artist-list-avatar-mobile-view', {
              checked: checkedArtists.includes(artist.id),
            })}
            onClick={(event) => {
              event.stopPropagation();
              onChangeCheckedArtists(
                !checkedArtists.includes(artist.id),
                artist.id,
              );
            }}>
            {checkedArtists.includes(artist.id) ? (
              <CheckOutlined />
            ) : (
              <span className='artist-list-item-avatar-view'>
                {artist.image ? (
                  <Avatar size={36} src={artist.image} />
                ) : (
                  <Avatar size={36} className='artist-list-item-avatar'>
                    {artist?.user?.first_name.length > 0 &&
                      artist?.user?.first_name[0].toUpperCase()}
                  </Avatar>
                )}
              </span>
            )}
          </div>

          <div className='artist-list-item-content-mobile'>
            <span className='text-truncate artist-list-item-mobile-title'>
              {artist.user.first_name}
            </span>

            <span className='text-truncate'>{artist.stage_name}</span>
          </div>
        </div>
        <div className='artist-list-item-action-mobile'>
          <MdLabelOutline
            className='artist-list-export-mobile-icon'
            style={{color: onGetLabelColor(artist.label)}}
          />

          <span
            className='artist-list-item-star-mobile'
            onClick={(event) => event.stopPropagation()}>
            <AppsStarredIcon item={artist} onChange={onChangeStarred} />
          </span>
        </div>
      </div>
    </>
  );
};

export default ArtistListItemMobile;

ArtistListItemMobile.defaultProps = {
  labelList: [],
  checkedArtists: [],
};

ArtistListItemMobile.propTypes = {
  artist: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedArtists: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onViewArtistDetail: PropTypes.func,
  onChangeCheckedArtists: PropTypes.func,
};
