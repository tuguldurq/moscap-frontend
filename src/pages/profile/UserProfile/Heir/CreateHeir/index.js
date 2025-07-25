import {Modal} from 'antd';
import HeirForm from './Form';
import PropTypes from 'prop-types';

const CreateHeir = (props) => {
  const {isOpenAddHeir, closeAddHeirModal, onFinish} = props;
  return (
    <Modal
      open={isOpenAddHeir}
      footer={false}
      title={'Өв залгамжлагч бүртгэх'}
      onCancel={() => closeAddHeirModal(false)}>
      <HeirForm
        layout={'vertical'}
        setEditForm={closeAddHeirModal}
        onFinish={onFinish}
      />
    </Modal>
  );
};

export default CreateHeir;

CreateHeir.propTypes = {
  isOpenAddHeir: PropTypes.bool,
  closeAddHeirModal: PropTypes.func,
  onFinish: PropTypes.func,
};
