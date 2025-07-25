import React from 'react';
import {Button, Form, Input} from 'antd';
import IntlMessages from '@crema/utility/IntlMessages';
import {tailFormItemLayout} from 'util/basic';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';

const ChangePassword = () => {
  const {updatePasword} = useAuthMethod();
  const {messages} = useIntl();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    updatePasword(values);
    form.setFieldsValue({
      old_password: null,
      password: null,
      password_confirmation: null,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AppsContainer
      title={<IntlMessages id='userProfile.changePassword' />}
      fullView>
      <div style={{padding: 20}}>
        <Form
          form={form}
          layout='horizontal'
          className='user-profile-form'
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{xs: 24, md: 8}}
          wrapperCol={{xs: 24, md: 8}}>
          <Form.Item
            name='old_password'
            label={messages['common.oldPassword']}
            rules={[
              {
                required: true,
                message: messages['validation.enterOldPassword'],
              },
              {
                min: 6,
                message: messages['common.password.minLength'],
              },
            ]}>
            <Input.Password
              placeholder={messages['validation.enterOldPassword']}
            />
          </Form.Item>
          <Form.Item
            name='password'
            label={messages['common.newPassword']}
            rules={[
              {
                required: true,
                message: messages['validation.enterNewPassword'],
              },
              {
                min: 6,
                message: messages['common.password.minLength'],
              },
            ]}>
            <Input.Password
              placeholder={messages['validation.enterNewPassword']}
            />
          </Form.Item>
          <Form.Item
            name='password_confirmation'
            label={messages['common.confirmPassword']}
            rules={[
              {
                required: true,
                message: messages['validation.enterConfirmpassword'],
              },
              {
                min: 6,
                message: messages['common.password.minLength'],
              },
              ({getFieldValue}) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    messages['validation.passwordMisMatch'],
                  );
                },
              }),
            ]}>
            <Input.Password
              placeholder={messages['validation.enterConfirmpassword']}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className='user-profile-group-btn'>
            <Button type='primary' htmlType='submit'>
              {messages['common.save']}
            </Button>
            <Button htmlType='cancel'>{messages['common.cancel']}</Button>
          </Form.Item>
        </Form>
      </div>
    </AppsContainer>
  );
};

export default ChangePassword;
