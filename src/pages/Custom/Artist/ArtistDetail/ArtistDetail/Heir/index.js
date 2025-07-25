import {useIntl} from 'react-intl';
import {Form, Row, Col, Select, Input, InputNumber, Upload, Button} from 'antd';
import {citizens, lettersmn} from 'util/letters';
import {InfoCircleOutlined, UploadOutlined} from '@ant-design/icons';

const prefixRegister = (
  <>
    <Form.Item
      name={['user', 'register', 'letter1']}
      noStyle
      initialValue={'А'}>
      <Select style={{width: 60}} options={lettersmn}></Select>
    </Form.Item>
    <Form.Item
      name={['user', 'register', 'letter2']}
      noStyle
      initialValue={'А'}>
      <Select style={{width: 70}} options={lettersmn}></Select>
    </Form.Item>
  </>
);

const Heirinfo = () => {
  const {messages} = useIntl();

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout='vertical'
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Row gutter={30}>
        <Col span={12}>
          <Form.Item
            label={messages['common.heirFirstName']}
            name={['affiliation', 'heir', 'first_name']}
            className='form-field'>
            <Input placeholder={messages['common.heirFirstName']} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.heirName']}
            name={['affiliation', 'heir', 'last_name']}
            className='form-field'>
            <Input placeholder={messages['common.heirName']} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.heirRegister']}
            name={['affiliation', 'heir', 'register_number']}
            className='form-field'>
            <Input
              addonBefore={prefixRegister}
              max={99999999}
              maxLength={8}
              type='number'
              placeholder={messages['common.heirRegister']}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.heirWhos']}
            name={['affiliation', 'heir', 'type']}
            className='form-field'>
            <Select options={citizens}></Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={messages['common.heirPhone']}
            name={['affiliation', 'heir', 'phone']}
            className='form-field'>
            <InputNumber
              style={{width: '100%'}}
              placeholder={messages['common.heirPhone']}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.heirEmail']}
            name={['affiliation', 'heir', 'email']}
            className='form-field'>
            <Input
              style={{width: '100%'}}
              placeholder={messages['common.heirEmail']}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={messages['common.heirFile']}
            name={['affiliation', 'heir', 'file_path']}
            tooltip={{
              title: 'Өв залгамжлагчийн нотариатын баталгаа Файлаар',
              icon: <InfoCircleOutlined />,
            }}
            className='form-field'>
            <Upload
              action={`${process.env.REACT_APP_API_URL}/upload`}
              valuePropName='file'>
              <Button icon={<UploadOutlined />}>
                {messages['common.heirFileUpload']}
              </Button>
            </Upload>
          </Form.Item>
        </Col>
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

export default Heirinfo;
