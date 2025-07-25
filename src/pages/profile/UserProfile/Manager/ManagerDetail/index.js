import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ManagerActions from './ManagerActions';
// import PersonalDetails from './PersonalDetails';
// import OtherDetails from './OtherDetails';
import {Avatar, Modal, Button, Descriptions} from 'antd';
import AppScrollbar from '@crema/core/AppScrollbar';
// import {AppRowContainer} from '@crema';
import IntlMessages from '@crema/utility/IntlMessages';
import './index.style.less';

const ManagerDetail = (props) => {
  const {
    isShowDetail,
    selectedManager,
    onShowDetail,
    onSelectManagersForDelete,
    onOpenEditManager,
    handleAddManagerClose,
  } = props;

  const [manager, setManager] = useState(selectedManager);

  useEffect(() => {
    setManager(selectedManager);
  }, [selectedManager]);

  const onDeleteManager = () => {
    onSelectManagersForDelete([manager.id]);
    onShowDetail(false);
  };

  const onManagerDetailClose = () => {
    handleAddManagerClose();
  };

  return (
    <>
      <Modal
        open={isShowDetail}
        onOk={isShowDetail}
        footer={false}
        onCancel={() => handleAddManagerClose()}
        className='manager-detail-modal'>
        <div className='manager-detail-modal-header'>
          <ManagerActions
            onDeleteManager={onDeleteManager}
            onOpenEditManager={onOpenEditManager}
            manager={manager}
          />
          <div className='manager-detail-modal-user'>
            {manager.image ? (
              <Avatar
                className='manager-detail-modal-user-avatar'
                src={manager.image}
              />
            ) : (
              <Avatar className='manager-detail-modal-user-avatar'>
                {manager.name[0].toUpperCase()}
              </Avatar>
            )}
            <h4>{manager.name}</h4>
          </div>
        </div>

        <AppScrollbar className='manager-detail-modal-scrollbar'>
          <div className='manager-detail-modal-content'>
            <Descriptions bordered>
              <Descriptions.Item span={24} label='Нэр'>
                {manager.name}
              </Descriptions.Item>
              <Descriptions.Item span={24} label='Утас'>
                {manager.phone}
              </Descriptions.Item>
              <Descriptions.Item span={24} label='Е-мэйл'>
                {manager.email}
              </Descriptions.Item>
            </Descriptions>
          </div>

          <div className='manager-form-footer'>
            <Button
              type='primary'
              ghost
              className='manager-form-btn'
              onClick={onManagerDetailClose}>
              <IntlMessages id='common.cancel' />
            </Button>
          </div>
        </AppScrollbar>
      </Modal>
    </>
  );
};

export default ManagerDetail;

ManagerDetail.propTypes = {
  isShowDetail: PropTypes.bool.isRequired,
  onShowDetail: PropTypes.func.isRequired,
  selectedManager: PropTypes.object.isRequired,
  onSelectManagersForDelete: PropTypes.func,
  onOpenEditManager: PropTypes.func,
  handleAddManagerClose: PropTypes.fn,
};
