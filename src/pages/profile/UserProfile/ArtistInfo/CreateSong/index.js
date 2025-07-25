import React from 'react';
import PropTypes from 'prop-types';
import AddSongForm from './addSongForm';
import {Modal} from 'antd';

const CreateSong = ({isAddSong, handleClose, onAddSong}) => {
  return (
    <Modal
      open={isAddSong}
      onOk={isAddSong}
      footer={false}
      onCancel={handleClose}
      title='Уран бүтээл нэмэх'>
      <AddSongForm onAddSong={onAddSong} />
      {/* 
        selectSong={selectSong}
        onUpdateSong={onUpdateSong}
        handleClose={handleClose}
       */}
    </Modal>
  );
};

export default CreateSong;

CreateSong.propTypes = {
  isAddSong: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onUpdateSong: PropTypes.func,
  onAddSong: PropTypes.object,
};
