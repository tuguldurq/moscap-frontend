import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AddArtistForm from './AddArtistForm';
import {Modal} from 'antd';
import './index.style.less';

const CreateArtist = ({
  isAddArtist,
  handleAddArtistClose,
  selectArtist,
  onUpdateArtist,
}) => {
  const [userImage, setUserImage] = useState(
    selectArtist && selectArtist.image
      ? selectArtist.image
      : '/assets/images/placeholder.jpg',
  );

  return (
    <Modal
      open={isAddArtist}
      onOk={isAddArtist}
      footer={false}
      onCancel={handleAddArtistClose}
      width={1000}
      className='artist-modal'>
      <AddArtistForm
        selectArtist={selectArtist}
        setUserImage={setUserImage}
        userImage={userImage}
        onUpdateArtist={onUpdateArtist}
        handleAddArtistClose={handleAddArtistClose}
      />
    </Modal>
  );
};

export default CreateArtist;

CreateArtist.defaultProps = {
  selectArtist: null,
};

CreateArtist.propTypes = {
  isAddArtist: PropTypes.bool.isRequired,
  handleAddArtistClose: PropTypes.func.isRequired,
  onUpdateArtist: PropTypes.func.isRequired,
  selectArtist: PropTypes.object,
};
