import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Input, Card, Form, Button} from 'antd';
import {useIntl} from 'react-intl';
import './forget-password.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import LandingHeader from 'pages/home/Components/Header/dark';
import {useAuthMethod} from '@crema/utility/AuthHooks';

const ForgetPasswordCustom = () => {
  const {forgetPassword} = useAuthMethod();
  const {messages} = useIntl();
  const onFinish = (values) => {
    forgetPassword(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <LandingHeader />
      <div className='user-pages'>
        <AppAnimateGroup type='bottom'>
          <AppPageMetadata title='Forgot Password' />
          <div className='user-container' key='a'>
            <Card className='user-card-custom user-card-lg-space'>
              <div className='user-card-header'>
                <div className='user-card-logo'>
                  <img src={'/assets/images/logo-blue.png'} alt='crema' />
                </div>
                <h3>
                  <IntlMessages id='common.forgetPassword' />
                </h3>
              </div>

              <div className='user-card-para'>
                <p className='mb-0'>
                  <IntlMessages id='common.forgetPasswordTextTwo' />
                </p>
              </div>

              <Form
                className='user-form mb-0'
                name='basic'
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                  name='email'
                  className='form-field-lg'
                  rules={[
                    {type: 'email', message: messages['common.email.valid']},
                    {
                      required: true,
                      message: messages['validation.emailRequired'],
                    },
                  ]}>
                  <Input placeholder={messages['common.emailAddress']} />
                </Form.Item>

                <Button
                  type='primary'
                  htmlType='submit'
                  className='user-form-btn'>
                  <IntlMessages id='common.sendNewPassword' />
                </Button>
              </Form>
            </Card>
          </div>
        </AppAnimateGroup>
      </div>
    </>
  );
};

export default ForgetPasswordCustom;
