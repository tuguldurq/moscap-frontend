import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Alert, Button, Card, Checkbox, Form, Input, Select, Space} from 'antd';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import LandingHeader from 'pages/home/Components/Header/dark';
import {Link} from 'react-router-dom';
import './index.style.less';
import {useSelector} from 'react-redux';
import {prefixPhone} from 'util/letters';
// import {AppInfoView} from '@crema';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Signin = () => {
  const {messages} = useIntl();
  const {signInUser} = useAuthMethod();
  const {loading, error} = useSelector(({common}) => common);
  return (
    <>
      <LandingHeader />
      <div className='user-pages'>
        <AppAnimateGroup type='bottom'>
          <AppPageMetadata title='Signin' />
          <div className='user-container' key='a'>
            <Card className='user-card-login'>
              <div className='user-card-header'>
                <div className='user-card-logo'>
                  <img
                    src={'/assets/images/logo-blue.png'}
                    alt='crema'
                    title='crema'
                  />
                </div>
                <h3>
                  <IntlMessages id='common.login' />
                </h3>
              </div>

              <Form
                className='user-form'
                name='basic'
                initialValues={{remember: true}}
                onFinish={signInUser}
                onFinishFailed={onFinishFailed}>
                <Form.Item style={{marginBottom: 30}}>
                  <Space.Compact style={{width: '100%'}}>
                    <Form.Item
                      noStyle
                      name={['phone', 'prefix']}
                      initialValue={'+976'}
                      style={{textAlign: 'center'}}>
                      <Select
                        options={prefixPhone}
                        style={{width: 120}}></Select>
                    </Form.Item>
                    <Form.Item
                      name={['phone', 'number']}
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: messages['common.phone.required'],
                        },
                      ]}>
                      <Input
                        placeholder={messages['common.phone']}
                        size='large'
                      />
                    </Form.Item>
                  </Space.Compact>
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
                  <Input
                    type='password'
                    placeholder={messages['common.password']}
                  />
                </Form.Item>

                <Form.Item
                  className='user-field-action'
                  name='remember'
                  valuePropName='checked'>
                  <>
                    <Checkbox>
                      <IntlMessages id='common.rememberMe' />
                    </Checkbox>
                    <Link to={'/forget-password'}>
                      <span className='user-field-action-link ml-auto'>
                        <IntlMessages id='common.forgetPassword' />
                      </span>
                    </Link>
                  </>
                </Form.Item>
                <p>
                  {error && <Alert message={error} showIcon type='error' />}
                </p>
                <Button
                  loading={loading}
                  type='primary'
                  htmlType='submit'
                  className='user-form-btn'>
                  <IntlMessages id='common.login' />
                </Button>
              </Form>

              <div className='sign-footer'>
                <span>
                  <IntlMessages id='common.dontHaveAccount' />
                </span>
                <Link to={'/signup'}>
                  <span className='user-card-footer-link'>
                    <IntlMessages id='common.signup' />
                  </span>
                </Link>
              </div>
            </Card>
            {/* <AppInfoView /> */}
          </div>
        </AppAnimateGroup>
      </div>
    </>
  );
};

export default Signin;
