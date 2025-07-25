import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UpdateSongForm from './updateSongForm';
import {Button, Modal} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import './style.css';

const UpdateSong = ({
  isUpdateSong,
  handleClose,
  onUpdateSong,
  selectedSong,
}) => {
  const [disabled, setDisabled] = useState(true);
  console.log('selectedSong', selectedSong);
  return (
    <Modal
      open={isUpdateSong}
      onOk={isUpdateSong}
      footer={false}
      onCancel={handleClose}
      title='Уран бүтээл нэмэх'>
      <div style={{textAlign: 'right'}}>
        {!disabled && (
          <Button
            icon={<EditOutlined />}
            size='small'
            onClick={() => setDisabled(!disabled)}>
            Буцах
          </Button>
        )}
        {disabled && (
          <Button
            icon={<EditOutlined />}
            size='small'
            onClick={() => setDisabled(!disabled)}>
            Засах
          </Button>
        )}
      </div>
      <UpdateSongForm
        onUpdateSong={onUpdateSong}
        handleClose={handleClose}
        song={selectedSong}
        changeDisable={disabled}
      />
    </Modal>
  );
};

export default UpdateSong;

UpdateSong.propTypes = {
  isUpdateSong: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  selectedSong: PropTypes.any,
  onUpdateSong: PropTypes.func,
};
