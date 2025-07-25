import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Form, Col, Input, Button, Select} from 'antd';
import {AppRowContainer} from '@crema';
import {useDropzone} from 'react-dropzone';
import {lettersmn} from 'util/letters';
// import {useAuthUser} from '@crema/utility/AuthHooks';

import './index.style.less';
import {useIntl} from 'react-intl';
const {Option} = Select;
const prefixRegister = (
  <>
    <Form.Item
      name={['user', 'register', 'letter1']}
      noStyle
      initialValue={'А'}>
      <Select style={{width: 70}}>
        {lettersmn.map((letter) => (
          <Select.Option key={`first-letter-${letter}`} value={`${letter}`}>
            {letter}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
    <Form.Item
      name={['user', 'register', 'letter2']}
      noStyle
      initialValue={'А'}>
      <Select style={{width: 90}}>
        {lettersmn.map((letter) => (
          <Select.Option key={`first-letter-${letter}`} value={`${letter}`}>
            {letter}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  </>
);
const prefixPhone = (
  <Form.Item name={['user', 'phone', 'prefix']} noStyle initialValue={'+976'}>
    <Select style={{width: 100}}>
      <Option value='+976'>+976</Option>
      <Option value='+1'>+1</Option>
    </Select>
  </Form.Item>
);
const PersonalInfo = ({userData}) => {
  const [citizen, setCitezen] = useState(userData.citizen || 'mongolia');
  console.log('userData', userData);
  // const {user} = useAuthUser();
  const {messages} = useIntl();
  const [form] = Form.useForm();
  const [userImage, setUserImage] = useState('/assets/images/placeholder.jpg');
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const onReset = () => {
    setUserImage('/assets/images/placeholder.jpg');
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  useEffect(() => {
    form.setFieldsValue({...userData});
  }, [userData]);
  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={{...userData}}
      layout='vertical'>
      <Form.Item className='info-upload'>
        <Avatar className='info-upload-avatar' src={userImage} />
        <div className='info-upload-content'>
          <div className='info-upload-btn-group'>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <label htmlFor='icon-button-file'>
                <Button type='primary'>Upload</Button>
              </label>
            </div>
            <Button onClick={onReset}>Reset</Button>
          </div>
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </div>
      </Form.Item>
      <AppRowContainer gutter={24}>
        <Col xs={24} md={12}>
          <Form.Item name='citizen' label={messages['common.citizen']}>
            <Select style={{width: '100%'}} onChange={(e) => setCitezen(e)}>
              <Option value='mongolia'>Mongolia</Option>
              <Option value='us'>United States</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          {citizen === 'mongolia' ? (
            <Form.Item
              name={['user', 'register', 'number']}
              label={messages['common.registerNumber']}
              rules={[
                {
                  required: true,
                  message: messages['common.register.required'],
                },
              ]}>
              <Input
                addonBefore={prefixRegister}
                max={99999999}
                maxLength={8}
                type='number'
                placeholder={messages['common.registerNumber']}
              />
            </Form.Item>
          ) : (
            <Form.Item
              name={'passport_number'}
              className='form-field'
              label={messages['common.passportNumber']}
              rules={[
                {required: true, message: 'Please input Passport number!'},
              ]}>
              <Input placeholder={messages['common.passportNumber']} />
            </Form.Item>
          )}
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={messages['common.surname']}
            name='last_name'
            rules={[
              {required: true, message: messages['common.surname.required']},
            ]}>
            <Input placeholder={messages['common.surname']} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={messages['common.givenName']}
            name='first_name'
            rules={[{required: true, message: 'Please input your Full Name!'}]}>
            <Input placeholder={messages['common.givenName']} />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label={messages['common.email']}
            name='email'
            rules={[
              {required: true, message: 'Please input your e-mail address!'},
            ]}>
            <Input type='text' placeholder={messages['common.email']} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name={'phone'}
            label={messages['common.phone']}
            rules={[
              {required: true, message: messages['common.phone.required']},
            ]}>
            <Input
              addonBefore={prefixPhone}
              type='text'
              placeholder={messages['common.phone']}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.sex']}
            name={'sex'}
            className='form-field'
            rules={[
              {required: true, message: messages['common.sex.required']},
            ]}>
            <Select placeholder={messages['common.sex']}>
              <Select.Option value={'male'}>Male</Select.Option>
              <Select.Option value={'female'}>Female</Select.Option>
              <Select.Option value={'other'}>Other</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <Form.Item shouldUpdate className='user-profile-group-btn'>
            <Button type='primary' htmlType='submit'>
              {messages['common.saveChanges']}
            </Button>
            <Button htmlType='cancel'>Cancel</Button>
          </Form.Item>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default PersonalInfo;

PersonalInfo.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    citizen: PropTypes.string,
    registerNumber: PropTypes.string,
  }),
};
