import AppList from '@crema/core/AppList';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import ContactListSkeleton from '@crema/core/AppSkeleton/ContactListSkeleton';
import IntlMessages from '@crema/utility/IntlMessages';
import AppConfirmationModal from '@crema/core/AppConfirmationModal';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import {Empty} from 'antd';
import ManagerDetail from '../ManagerDetail/index';
import ManagerListItem from '../ManagerListItem/index';
import CreateManager from '../CreateManager/index';
import {AppAnimates} from 'shared/constants/AppEnums';
import {onGetManagerList} from 'redux/actions/Artist';
import {onDeleteManager} from 'redux/actions/Artist';
import ManagerHeader from './ManagerHeader';
import './index.style.less';

const ManagerList = () => {
  const dispatch = useDispatch();
  const managerList = useSelector(({artist}) => artist.managerList);
  useEffect(() => {
    dispatch(onGetManagerList());
  }, [dispatch]);
  const loading = useSelector(({common}) => common.loading);
  const [selectedManager, setSelectedManager] = useState(null);
  const [isShowDetail, onShowDetail] = useState(false);
  const [isAddManager, onSetIsAddManager] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toDeleteManagers, setToDeleteManagers] = useState(null);
  const [checkedManagers, setCheckedManagers] = useState([]);

  console.log(toDeleteManagers, checkedManagers);
  const onViewManagerDetail = (manager) => {
    setSelectedManager(manager);
    onShowDetail(true);
  };
  const onOpenEditManager = (manager) => {
    setSelectedManager(manager);
    handleAddManagerOpen();
  };
  const handleAddManagerOpen = () => {
    onSetIsAddManager(true);
  };
  const handleAddManagerClose = () => {
    onSetIsAddManager(false);
    onShowDetail(false);
    setSelectedManager(null);
    setDeleteDialogOpen(false);
  };
  const onUpdateManager = (manager) => {
    setSelectedManager(manager);
    handleAddManagerClose();
  };
  const onSelectManagersForDelete = (managerIds) => {
    setToDeleteManagers(managerIds);
    setDeleteDialogOpen(true);
  };

  const onDeleteSelectedManagers = () => {
    dispatch(onDeleteManager(toDeleteManagers));
    setDeleteDialogOpen(false);
    setCheckedManagers([]);
  };

  return (
    <>
      <AppsHeader>
        <ManagerHeader onAddManagerModalOpen={handleAddManagerOpen} />
      </AppsHeader>
      <AppsContent>
        <div className='manager-list-desktop'>
          <AppList
            data={managerList}
            animation={AppAnimates.SLIDEUPIN}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                content={<Empty />}
                actionTitle={<IntlMessages id='contactApp.createContact' />}
                onClick={handleAddManagerOpen}
                placeholder={<ContactListSkeleton />}
              />
            }
            renderItem={(manager, index) => (
              <ManagerListItem
                index={index + 1}
                key={manager.id}
                manager={manager}
                // onChangeCheckedManagers={onChangeCheckedManagers}
                // checkedManagers={checkedManagers}
                onSelectManagersForDelete={onSelectManagersForDelete}
                onViewManagerDetail={onViewManagerDetail}
                onOpenEditManager={onOpenEditManager}
              />
            )}
          />
        </div>
      </AppsContent>
      {isShowDetail ? (
        <ManagerDetail
          selectedManager={selectedManager}
          isShowDetail={isShowDetail}
          onShowDetail={onShowDetail}
          handleAddManagerClose={handleAddManagerClose}
          onSelectManagersForDelete={onSelectManagersForDelete}
          onOpenEditManager={onOpenEditManager}
        />
      ) : null}

      {isAddManager ? (
        <CreateManager
          isAddManager={isAddManager}
          handleAddManagerClose={handleAddManagerClose}
          selectManager={selectedManager}
          onUpdateManager={onUpdateManager}
        />
      ) : null}

      {isDeleteDialogOpen ? (
        <AppConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={handleAddManagerClose}
          onConfirm={onDeleteSelectedManagers}
          paragraph={<IntlMessages id='common.deleteItemParagraph' />}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </>
  );
};

export default ManagerList;
