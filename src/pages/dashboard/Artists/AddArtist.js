import React from 'react';

import {Button, Form, Row, Col, Divider} from 'antd';
import PersonalInfo from '../../userPages/UserPages/steps/PersonalInfo';
import OtherInfo from '../../userPages/UserPages/steps/OtherInfo';
import {onAddArtist} from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import {useIntl} from 'react-intl';

const AddArtist = () => {
  const dispath = useDispatch();
  const {messages} = useIntl();

  const onFinish = async (values) => {
    try {
      const {data} = await dispath(onAddArtist(values));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className='edit-customer-form'
      name='basic'
      layout='vertical'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Row gutter={{sm: 60}}>
        <Col span={12}>
          <PersonalInfo admin={true} />
        </Col>
        <Col span={12}>
          <OtherInfo />
        </Col>
      </Row>
      <Divider />
      <Form.Item style={{textAlign: 'right'}}>
        <Button type='primary' htmlType='submit'>
          {messages['common.saveChanges']}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddArtist;
