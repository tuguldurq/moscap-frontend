import React from 'react';
import {Button, Form, Input} from 'antd';
import ProfileConnection from './ProfileConnection';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {tailFormItemLayout} from 'util/basic';

const SocialLink = ({socialLink}) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      layout='horizontal'
      className='user-profile-form'
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{xs: 24, md: 8}}
      wrapperCol={{xs: 24, md: 8}}>
      <h3 className='user-profile-form-title'>
        <IntlMessages id='userProfile.socialLink' />
      </h3>
      <Form.Item name='twitter' label='Twitter'>
        <Input placeholder='Twitter' />
      </Form.Item>
      <Form.Item name='facebook' label='Facebook'>
        <Input placeholder='Facebook' />
      </Form.Item>
      <Form.Item name='google' label='Google'>
        <Input placeholder='Google' />
      </Form.Item>
      <Form.Item name='linkedIn' label='LinkedIn'>
        <Input placeholder='LinkedIn' />
      </Form.Item>
      <Form.Item name='instagram' label='Instagram'>
        <Input placeholder='Instagram' />
      </Form.Item>
      <Form.Item {...tailFormItemLayout} className='user-profile-group-btn'>
        <Button type='primary' htmlType='submit'>
          Save Changes
        </Button>
        <Button htmlType='cancel'>Cancel</Button>
      </Form.Item>
      <ProfileConnection profileConnection={socialLink} />
    </Form>
  );
};

export default SocialLink;

SocialLink.propTypes = {
  socialLink: PropTypes.array,
};
