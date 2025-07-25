import {Button, Form, Input, InputNumber, Select, Upload} from 'antd';
import {citizens, lettersmn} from 'util/letters';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import {InfoCircleOutlined, UploadOutlined} from '@ant-design/icons';
import {tailFormItemLayout} from 'util/basic';

const HeirForm = (props) => {
  const {onFinish, onFinishFailed, setEditForm, isEditForm} = props;
  const [form] = Form.useForm();
  const {messages} = useIntl();
  const prefixPhone = [
    {label: '+976', value: '+976'},
    {label: '+1', value: '+1'},
  ];
  return (
    <Form
      form={form}
      layout={'vertical'}
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      disabled={isEditForm}>
      <Form.Item
        label={messages['common.heirFirstName']}
        name={['first_name']}
        className='form-field'
        rules={[
          {
            required: true,
            message: messages['validation.input.required'],
          },
        ]}>
        <Input placeholder={messages['common.heirFirstName']} />
      </Form.Item>
      <Form.Item
        label={messages['common.heirName']}
        name={['last_name']}
        className='form-field'
        rules={[
          {
            required: true,
            message: messages['validation.input.required'],
          },
        ]}>
        <Input placeholder={messages['common.heirName']} />
      </Form.Item>
      <Form.Item label={messages['common.registerNumber']} required>
        <Input.Group compact>
          <Form.Item
            name={['register_number', 'letter1']}
            noStyle
            initialValue={'А'}>
            <Select options={lettersmn}></Select>
          </Form.Item>
          <Form.Item
            name={['register_number', 'letter2']}
            noStyle
            initialValue={'А'}>
            <Select options={lettersmn}></Select>
          </Form.Item>
          <Form.Item
            name={['register_number', 'number']}
            noStyle
            rules={[
              {
                required: true,
                message: messages['common.register.required'],
              },
            ]}>
            <InputNumber
              max={99999999}
              maxLength={8}
              style={{width: '50%', height: 36}}
              placeholder={messages['validation.input.required']}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item
        label={messages['common.heirWhos']}
        name={['type', 'id']}
        className='form-field'
        rules={[
          {
            required: true,
            message: messages['validation.select.required'],
          },
        ]}>
        <Select options={citizens}></Select>
      </Form.Item>
      <Form.Item label={messages['common.heirPhone']} required>
        <Input.Group compact>
          <Form.Item
            noStyle
            name={['phone', 'prefix']}
            initialValue={'+976'}
            className='form-field'>
            <Select options={prefixPhone}></Select>
          </Form.Item>
          <Form.Item noStyle name={['phone', 'number']} className='form-field'>
            <Input
              type='number'
              style={{width: '57%', height: 36}}
              placeholder={messages['common.heirPhone']}
              rules={[
                {
                  required: true,
                  message: messages['validation.input.required'],
                },
              ]}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        label={messages['common.heirEmail']}
        name={['email']}
        className='form-field'
        rules={[
          {
            required: true,
            message: messages['validation.input.required'],
          },
        ]}>
        <Input
          style={{width: '100%'}}
          placeholder={messages['common.heirEmail']}
        />
      </Form.Item>
      <Form.Item
        label={messages['common.heirFile']}
        name={['file_path']}
        tooltip={{
          title: 'Өв залгамжлагчийн нотариатын баталгаа Файлаар',
          icon: <InfoCircleOutlined />,
        }}
        className='form-field'
        rules={[
          {
            required: true,
            message: messages['validation.file.required'],
          },
        ]}>
        <Upload
          action={`${process.env.REACT_APP_API_URL}/upload`}
          valuePropName='file'>
          <Button icon={<UploadOutlined />}>
            {messages['common.heirFileUpload']}
          </Button>
        </Upload>
      </Form.Item>
      {!isEditForm && (
        <Form.Item {...tailFormItemLayout} className='user-profile-group-btn'>
          <Button type='primary' htmlType='submit'>
            {messages['common.save']}
          </Button>
          <Button htmlType='cancel' onClick={() => setEditForm(false)}>
            {messages['common.cancel']}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default HeirForm;

HeirForm.propTypes = {
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  setEditForm: PropTypes.func,
  isEditForm: PropTypes.bool,
};
