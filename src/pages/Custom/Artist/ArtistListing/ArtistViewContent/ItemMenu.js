import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Dropdown, Menu} from 'antd';
import {MoreOutlined} from '@ant-design/icons';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const ItemMenu = (props) => {
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

  const menuLabel = (
    <Menu>
      <Menu.Item onClick={onChangeStarredStatus}>
        {artist.isStarred ? (
          <IntlMessages id='common.unstarred' />
        ) : (
          <IntlMessages id='common.starred' />
        )}
      </Menu.Item>

      <Menu.Item onClick={onClickEditOption}>
        <IntlMessages id='common.edit' />
      </Menu.Item>
      <Menu.Item onClick={onDeleteArtist}>
        <IntlMessages id='common.delete' />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menuLabel} trigger={['click']}>
      <AppIconButton
        icon={<MoreOutlined />}
        title={<IntlMessages id='common.more' />}
      />
    </Dropdown>
  );
};

export default ItemMenu;

ItemMenu.propTypes = {
  onSelectArtistsForDelete: PropTypes.func,
  artist: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditArtist: PropTypes.func,
};
