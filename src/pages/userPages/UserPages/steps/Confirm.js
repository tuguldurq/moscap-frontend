import {
  Button,
  Checkbox,
  Descriptions,
  Divider,
  Form,
  Modal,
  Typography,
} from 'antd';
import PropType from 'prop-types';
import {useState} from 'react';
import {useIntl} from 'react-intl';

const Confirm = ({formData, setIsCheckedProps}) => {
  const {messages} = useIntl();
  const [isChecked, setIsChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  let user = null;
  let affiliation = null;
  console.log('formData', formData);
  if (formData.user) {
    user = formData.user;
  }
  if (formData.affiliation) {
    affiliation = formData.affiliation;
  }
  // const onChange = (checked) => {
  //   onChangeProps(checked);
  //   setChecked(checked);
  // };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleModalOk = () => {
    setVisible(false);
    setIsChecked(!isChecked);
    setIsCheckedProps(isChecked);
  };
  const handleAgreeClick = () => {
    setVisible(true);
  };
  const handleModalCancel = () => {
    setIsChecked(false);
    setVisible(false);
  };

  return (
    <>
      <Descriptions
        title={
          <Typography.Title level={2}>
            {messages['common.signup.personalInfo']}
          </Typography.Title>
        }
        size='small'
        column={1}
        bordered>
        <Descriptions.Item label={messages['common.surname']}>
          {user?.first_name}
        </Descriptions.Item>
        <Descriptions.Item label={messages['common.givenName']}>
          {user?.last_name}
        </Descriptions.Item>
        <Descriptions.Item label={messages['common.phone']}>
          {user?.phone?.prefix} {user?.phone?.number}
        </Descriptions.Item>
        {user?.citizen === 'mongolia' ? (
          <Descriptions.Item label={messages['common.registerNumber']}>
            {user?.register?.letter1}
            {user?.register?.letter1}
            {user?.register?.number}
          </Descriptions.Item>
        ) : (
          <Descriptions.Item label={messages['common.passportNumber']}>
            {user?.register?.letter1}
            {user?.register?.letter1}
            {user?.register?.number}
          </Descriptions.Item>
        )}
        <Descriptions.Item label={messages['common.email']}>
          {user?.email}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions
        title={
          <Typography.Title level={2}>
            {messages['common.signup.affiliationInfo']}
          </Typography.Title>
        }
        size='small'
        bordered
        column={1}>
        <Descriptions.Item label={messages['common.stageName']}>
          {affiliation?.stage_name}
        </Descriptions.Item>
        <Descriptions.Item label={messages['common.artistType']}>
          {affiliation?.type === 'A'
            ? 'Ая / Composer'
            : affiliation?.type === 'C'
            ? 'Шүлэг / Author'
            : 'Шүлэг, Ая / Both'}
        </Descriptions.Item>
        {/* <Descriptions.Item label='Manager name'>
            {`${affiliation?.manager.name
              .charAt(0)
              .toUpperCase()}${affiliation?.manager.name.slice(1)}`}
          </Descriptions.Item>
          <Descriptions.Item label='Manager Phone'>
            {affiliation?.manager.phone}
          </Descriptions.Item> */}
      </Descriptions>
      <Divider />

      <Form.Item
        className='user-field-action user-field-action-row'
        name={['terms']}
        rules={[
          {
            required: true,
            message: messages['validation.termsCondition'],
          },
        ]}>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
          I have read and agree to the{' '}
        </Checkbox>
        <a onClick={handleAgreeClick}>Terms and Conditions</a>
      </Form.Item>

      <Modal
        title='Terms and Conditions'
        visible={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        footer={[
          <Button key='cancel' onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key='ok' type='primary' onClick={handleModalOk}>
            Agree
          </Button>,
        ]}>
        <p>Here are the terms and conditions.</p>
      </Modal>
    </>
  );
};

export default Confirm;
Confirm.propTypes = {
  onChangeProps: PropType.func,
  formData: PropType.object,
  setIsCheckedProps: PropType.func,
};
