import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AddManagerForm from './AddManagerForm';
import {Modal} from 'antd';
import './index.style.less';

const CreateManager = ({
  isAddManager,
  handleAddManagerClose,
  selectManager,
  onUpdateManager,
}) => {
  const [userImage, setUserImage] = useState(
    selectManager && selectManager.image
      ? selectManager.image
      : '/assets/images/placeholder.jpg',
  );

  return (
    <Modal
      open={isAddManager}
      onOk={isAddManager}
      footer={false}
      onCancel={handleAddManagerClose}
      className='manager-modal'>
      <AddManagerForm
        selectManager={selectManager}
        setUserImage={setUserImage}
        userImage={userImage}
        onUpdateManager={onUpdateManager}
        handleAddManagerClose={handleAddManagerClose}
      />
    </Modal>
  );
};

export default CreateManager;

CreateManager.defaultProps = {
  selectManager: null,
};

CreateManager.propTypes = {
  isAddManager: PropTypes.bool.isRequired,
  handleAddManagerClose: PropTypes.func.isRequired,
  onUpdateManager: PropTypes.func.isRequired,
  selectManager: PropTypes.object,
};
