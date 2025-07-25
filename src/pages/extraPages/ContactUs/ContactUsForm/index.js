import React from 'react';
import {Form, Button, Col, Input} from 'antd';
import {AppRowContainer} from '../../../../@crema';
import {useIntl} from 'react-intl';

const ContactUsForm = () => {
  const {messages} = useIntl();
  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <AppRowContainer gutter={16}>
        <Col xs={24}>
          <Form.Item
            name='fullName'
            rules={[{required: true, message: messages['common.fullName']}]}>
            <Input placeholder={messages['common.fullName']} />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            name='email'
            rules={[
              {required: true, message: messages['common.email.required']},
            ]}>
            <Input type='text' placeholder={messages['common.email']} />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            name='message'
            rules={[
              {required: true, message: messages['common.message.required']},
            ]}>
            <Input.TextArea rows={3} placeholder={messages['common.message']} />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <Form.Item shouldUpdate>
            <Button type='primary' htmlType='submit'>
              {messages['common.send']}
            </Button>
          </Form.Item>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default ContactUsForm;
