import {Modal} from 'antd';
import UpdateHeirForm from './UpdateForm';
import PropTypes from 'prop-types';

const UpdateHeir = (props) => {
  const {isOpenAddHeir, data, closeUpdateHeirModal, onFinish} = props;
  return (
    <Modal
      open={isOpenAddHeir}
      footer={false}
      title={'Өв залгамжлагч бүртгэх'}
      onCancel={() => closeUpdateHeirModal(false)}>
      <UpdateHeirForm
        formData={data}
        layout={'vertical'}
        setEditForm={closeUpdateHeirModal}
        onFinish={onFinish}
      />
    </Modal>
  );
};

export default UpdateHeir;

UpdateHeir.propTypes = {
  data: PropTypes.any,
  isOpenAddHeir: PropTypes.bool,
  closeUpdateHeirModal: PropTypes.func,
  onFinish: PropTypes.func,
};
