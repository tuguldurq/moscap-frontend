import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useIntl} from 'react-intl';
import {Button, Checkbox, Form, Input} from 'antd';

import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useAuthMethod} from '../../../@crema/utility/AuthHooks';
import {useSelector} from 'react-redux';

const SignInJwtAuth = () => {
  const navigate = useNavigate();
  const {signInUser} = useAuthMethod();
  const {loading} = useSelector(({common}) => common);

  const {messages} = useIntl();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onGoToForgetPassword = () => {
    navigate('/forget-password', {tab: 'jwtAuth'});
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Form
          className='sign-form'
          name='basic'
          onFinish={signInUser}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='email'
            className='form-field'
            rules={[
              {required: true, message: messages['validation.emailRequired']},
              {type: 'email', message: messages['validation.emailFormat']},
            ]}>
            <Input placeholder={messages['common.email']} />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.passwordRequired'],
              },
            ]}>
            <Input.Password placeholder={messages['common.password']} />
          </Form.Item>
          <div className='rememberMe'>
            <Checkbox onChange={onRememberMe}>
              <IntlMessages id='common.rememberMe' />
            </Checkbox>

            <span className='sign-link' onClick={onGoToForgetPassword}>
              <IntlMessages id='common.forgetPassword' />
            </span>
          </div>

          <div className='form-btn-field'>
            <Button
              type='primary'
              htmlType='submit'
              className='sign-btn'
              loading={loading}>
              <IntlMessages id='common.login' />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInJwtAuth;
