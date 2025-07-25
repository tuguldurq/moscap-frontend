import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import CreateArtist from '../CreateArtist';
import LabelItem from './LabelItem';
import AppsSideBarFolderItem from '../../../../@crema/core/AppsSideBarFolderItem';
import AppList from '../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '../../../../@crema/core/AppSkeleton/SidebarListSkeleton';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import {Button} from 'antd';
import './index.style.less';
import {AppAnimates} from 'shared/constants/AppEnums';
import {PlusOutlined} from '@ant-design/icons';

const SideBarContent = () => {
  const labelList = useSelector(({artistApp}) => artistApp.labelList);

  const folderList = useSelector(({artistApp}) => artistApp.folderList);

  const [isAddArtist, onSetIsAddArtist] = useState(false);

  const handleAddArtistOpen = () => {
    onSetIsAddArtist(true);
  };

  const handleAddArtistClose = () => {
    onSetIsAddArtist(false);
  };

  return (
    <>
      <div className='artist-sidebar-header'>
        <Button
          ghost
          type='primary'
          icon={<PlusOutlined style={{marginRight: 8}} />}
          onClick={handleAddArtistOpen}>
          <IntlMessages id='artistApp.createArtist' />
        </Button>
      </div>

      <AppScrollbar className='artist-sidebar-scrollbar'>
        <div className='artist-sidebar-content'>
          <div className='artist-sidebar-list'>
            <AppList
              animation={AppAnimates.SLIDELEFTIN}
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/artist/folder/${item.alias}`}
                />
              )}
            />
          </div>

          <h5 className='artist-sidebar-title'>
            <IntlMessages id='common.labels' />
          </h5>

          <AppList
            animation={AppAnimates.SLIDELEFTIN}
            data={labelList}
            ListEmptyComponent={
              <ListEmptyResult
                loading={true}
                placeholder={<SidebarPlaceholder />}
              />
            }
            renderItem={(label) => <LabelItem key={label.id} label={label} />}
          />

          {isAddArtist ? (
            <CreateArtist
              isAddArtist={isAddArtist}
              handleAddArtistClose={handleAddArtistClose}
            />
          ) : null}
        </div>
      </AppScrollbar>
    </>
  );
};

export default SideBarContent;
