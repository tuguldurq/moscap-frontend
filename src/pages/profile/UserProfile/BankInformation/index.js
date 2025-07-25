import {Divider, Form, InputNumber, Select} from 'antd';
import {useEffect} from 'react';
import {useIntl} from 'react-intl';
import {banks} from 'util/letters';
import {useAuthUserBankData} from '@crema/utility/AuthHooks';
import AppsContainer from '../../../../@crema/core/AppsContainer';

const BankInformation = () => {
  const {bank} = useAuthUserBankData();
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
    <AppsContainer fullView title={'Банкны мэдээлэл'}>
      <div style={{margin: 24}}>
        <Form
          form={form}
          className='user-profile-form'
          initialValues={{remember: true}}
          onFinish={onFinish}
          labelCol={{xs: 24, md: 8}}
          wrapperCol={{xs: 24, md: 8}}
          layout='horizontal'
          onFinishFailed={onFinishFailed}>
          <Form.Item name={'name'} label={messages['common.bank']}>
            <Select
              placeholder={messages['common.bank']}
              options={banks}
              disabled></Select>
          </Form.Item>
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
              disabled
              style={{width: '100%'}}
              placeholder={messages['common.bankAccount']}
            />
          </Form.Item>
          {/* <Form.Item {...tailFormItemLayout} className='user-profile-group-btn'>
        <Button type='primary' htmlType='submit'>
          {messages['common.saveChanges']}
        </Button>
        <Button htmlType='cancel'>Cancel</Button>
      </Form.Item> */}
          <Divider orientation='left'>Гүйлгээний түүх</Divider>
        </Form>
      </div>
    </AppsContainer>
  );
};
export default BankInformation;
