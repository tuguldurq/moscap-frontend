import {useEffect, useState} from 'react';
import {useIntl} from 'react-intl';
import {Form, Row, Col, Select, Switch, Input, Button} from 'antd';
import {releaseTypes} from '../../../../../../util/letters';
import PropTypes from 'prop-types';

const ArtistInfo = ({data}) => {
  const {messages} = useIntl();
  const [isBand, setIsBand] = useState(false);
  const [form] = Form.useForm();
  console.log('data', data);
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    const value = {
      affiliation: {
        type: data.type,
        release_type: data.release_type,
      },
    };
    form.setFieldsValue(value);
  }, [form]);
  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Row gutter={[32]}>
        <Col span={12}>
          <Form.Item
            label={messages['common.artistType']}
            name={['affiliation', 'type']}
            className='form-field'
            rules={[{required: true, message: 'Please input Type!'}]}>
            <Select placeholder={messages['common.artistType']}>
              <Select.Option value={'C'}>Шүлэг / Author </Select.Option>
              <Select.Option value={'A'}>Ая / Composer</Select.Option>
              <Select.Option value={'AC'}>Шүлэг, Ая / Both</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.releaseType']}
            name={['affiliation', 'release_type']}
            className='form-field'
            rules={[{required: true, message: 'Please input Release Type!'}]}>
            <Select
              placeholder={messages['common.releaseType']}
              mode='multiple'
              options={releaseTypes}></Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={['affiliation', 'stage_name']}
            label={messages['common.stageName']}
            className='form-field'>
            <Input placeholder={messages['common.stageName']} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.isBandMember']}
            name={['affiliation', 'is_band_member']}
            className='form-field'>
            <Switch
              checkedChildren={messages['common.yes']}
              unCheckedChildren={messages['common.no']}
              style={{width: 72}}
              onChange={(e) => setIsBand(e)}
            />
          </Form.Item>
        </Col>
        {isBand == true ? (
          <Col span={12}>
            <Form.Item
              label={messages['common.band']}
              name={['affiliation', 'band_name']}
              className='form-field'>
              <Input placeholder={messages['common.band']} value='' />
            </Form.Item>
          </Col>
        ) : (
          <></>
        )}
        <Col xs={24} md={24} style={{marginTop: 30}}>
          <Form.Item shouldUpdate className='user-profile-group-btn'>
            <Button type='primary' htmlType='submit'>
              Save Changes
            </Button>
            <Button htmlType='cancel'>Cancel</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ArtistInfo;
ArtistInfo.propTypes = {
  data: PropTypes.any,
};
