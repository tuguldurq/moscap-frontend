import {AppRowContainer} from '@crema';
import {Button, Col, Divider, Form, InputNumber, Row, Select} from 'antd';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useIntl} from 'react-intl';
import {banks} from 'util/letters';

const BankInformation = ({bank}) => {
  console.log('bank', bank);
  const {messages} = useIntl();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  useEffect(() => {
    form.setFieldsValue({...bank});
  }, [bank]);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      className='user-profile-form'
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item name={'name'} label={messages['common.bank']}>
            <Select
              placeholder={messages['common.bank']}
              options={banks}></Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={messages['common.bankAccount']}
            name={'account'}
            rules={[
              {
                required: true,
                message: messages['validation.bankAccountNumber'],
              },
            ]}>
            <InputNumber
              style={{width: '100%'}}
              placeholder={messages['common.bankAccount']}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item shouldUpdate className='user-profile-group-btn'>
            <Button type='primary' htmlType='submit'>
              {messages['common.saveChanges']}
            </Button>
            <Button htmlType='cancel'>Cancel</Button>
          </Form.Item>
        </Col>
      </AppRowContainer>
      <Divider orientation='left'>Гүйлгээний түүх</Divider>
      <Row></Row>
    </Form>
  );
};
export default BankInformation;

BankInformation.propTypes = {
  bank: PropTypes.object,
};
