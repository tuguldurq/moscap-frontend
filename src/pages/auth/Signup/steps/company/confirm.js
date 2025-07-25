import {
  Button,
  Checkbox,
  Descriptions,
  Divider,
  Form,
  Modal,
  Select,
  Typography,
} from 'antd';
import PropType from 'prop-types';
import {useState} from 'react';
import {useIntl} from 'react-intl';
const companyTypes = [
  {label: 'ХХК (хязгаарлагдмал хариуцлагатай компани)', value: 'llc'},
  {label: 'ХК (хувьцаат компани)', value: 'lc'},
];
const Confirm = ({formData, setIsCheckedProps}) => {
  const {messages} = useIntl();
  const [isChecked, setIsChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  let user = null;
  let company = null;
  console.log('formData', formData);
  if (formData.user) {
    user = formData.user;
  }
  if (formData.company) {
    company = formData.company;
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
            {messages['common.signup.companyInfo']}
          </Typography.Title>
        }
        size='small'
        bordered
        column={1}>
        <Descriptions.Item label={messages['common.signup.companyName']}>
          {company?.name}({company?.english_name})
        </Descriptions.Item>
        <Descriptions.Item label={messages['common.signup.companyType']}>
          <Select
            options={companyTypes}
            value={company?.type}
            disabled
            bordered={false}
          />
        </Descriptions.Item>
        {/* <Descriptions.Item label='Manager name'>
            {`${company?.manager.name
              .charAt(0)
              .toUpperCase()}${company?.manager.name.slice(1)}`}
          </Descriptions.Item>
          <Descriptions.Item label='Manager Phone'>
            {company?.manager.phone}
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
