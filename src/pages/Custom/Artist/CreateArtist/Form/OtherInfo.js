import {
  InfoCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Divider,
  Button,
  Select,
  Switch,
  Upload,
} from 'antd';
import {useState} from 'react';
import {useIntl} from 'react-intl';
import {citizens, lettersmn, releaseTypes} from 'util/letters';
// import PropTyes from 'prop-types';
// import './styles.less';

const OtherInfo = () => {
  const [isBand, setIsBand] = useState(false);
  const {messages} = useIntl();

  const onChange = (e) => {
    setIsBand(e);
  };

  return (
    <>
      <Row gutter={8}>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.artistType']}
            name={['artist', 'type']}
            className='form-field'
            rules={[{required: true, message: 'Please input Type!'}]}>
            <Select placeholder={messages['common.artistType']}>
              <Select.Option value={'C'}>Шүлэг / Author </Select.Option>
              <Select.Option value={'A'}>Ая / Composer</Select.Option>
              <Select.Option value={'A/C'}>Шүлэг, Ая / Both</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.releaseType']}
            name={['artist', 'release_type']}
            className='form-field'
            rules={[{required: true, message: 'Please input Release Type!'}]}>
            <Select
              mode='multiple'
              placeholder={messages['common.releaseType']}
              options={releaseTypes}></Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            name={['artist', 'stage_name']}
            label={messages['common.stageName']}
            className='form-field'>
            <Input placeholder={messages['common.stageName']} />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.isBandMember']}
            name={['artist', 'is_band_member']}
            className='form-field'>
            <Switch
              checkedChildren={messages['common.yes']}
              unCheckedChildren={messages['common.no']}
              style={{width: 72}}
              onChange={onChange}
            />
          </Form.Item>
        </Col>
        {isBand == true ? (
          <Col md={12} xs={24}>
            <Form.Item
              label={messages['common.band']}
              name={['artist', 'band_name']}
              className='form-field'>
              <Input placeholder={messages['common.band']} value='' />
            </Form.Item>
          </Col>
        ) : (
          <></>
        )}
      </Row>
      <Divider orientation='left'>{messages['common.managerInfo']}</Divider>
      <Form.List name={['artist', 'manager-list']}>
        {(fields, {add, remove}) => (
          <>
            {fields.map((field) => (
              <div key={field.key}>
                <div
                  key={field.key}
                  style={{display: 'flex', alignItems: 'center'}}>
                  <Row gutter={12}>
                    <Col sm={8} xs={24}>
                      <Form.Item
                        label={'Нэр'}
                        name={[field.name, 'name']}
                        className='form-field'>
                        <Input placeholder={'Нэр'} />
                      </Form.Item>
                    </Col>
                    <Col sm={8} xs={24}>
                      <Form.Item
                        label={'И-мэйл'}
                        name={[field.name, 'email']}
                        className='form-field'
                        rules={[
                          {
                            type: 'email',
                            message: messages['common.email.valid'],
                          },
                        ]}>
                        <Input type='email' placeholder={'И-мэйл'} />
                      </Form.Item>
                    </Col>
                    <Col sm={8} xs={24}>
                      <Form.Item label={'Утас'} name={[field.name, 'phone']}>
                        <InputNumber
                          style={{width: '100%'}}
                          placeholder={'Утас'}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <MinusCircleOutlined
                    style={{marginLeft: 25}}
                    onClick={() => remove(field.name)}
                  />
                </div>
                {fields.length > 1 && (
                  <Divider style={{margin: '0px 0px 10px 0px'}} />
                )}
              </div>
            ))}
            <Form.Item>
              <Button
                type='dashed'
                onClick={() => add()}
                block
                icon={<PlusCircleOutlined />}>
                {messages['common.addManager']}
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Divider orientation='left'>{messages['common.heir']}</Divider>
      <Row gutter={8}>
        <Col sm={8} xs={24}>
          <Form.Item
            label={'Овог'}
            name={['artist', 'heir', 'first_name']}
            className='form-field'>
            <Input placeholder={'Овог'} />
          </Form.Item>
        </Col>
        <Col sm={8} xs={24}>
          <Form.Item
            label={'Нэр'}
            name={['artist', 'heir', 'last_name']}
            className='form-field'>
            <Input placeholder={'Нэр'} />
          </Form.Item>
        </Col>
        <Col sm={8} xs={24}>
          <Form.Item
            label={'Хэн болох'}
            name={['artist', 'heir', 'type']}
            className='form-field'>
            <Select options={citizens}></Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col md={24} xs={24}>
          <Form.Item label={messages['common.heirRegister']}>
            <Input.Group compact>
              <Form.Item
                name={['user', 'register', 'letter1']}
                noStyle
                initialValue={'А'}>
                <Select options={lettersmn}></Select>
              </Form.Item>
              <Form.Item
                name={['user', 'register', 'letter2']}
                noStyle
                initialValue={'А'}>
                <Select options={lettersmn}></Select>
              </Form.Item>
              <Form.Item name={['artist', 'heir', 'register_number']} noStyle>
                <InputNumber
                  max={99999999}
                  className='register-width'
                  maxLength={8}
                  type='number'
                  placeholder={messages['common.heirRegister']}
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.heirPhone']}
            name={['artist', 'heir', 'phone']}
            className='form-field'>
            <InputNumber
              style={{width: '100%'}}
              placeholder={messages['common.heirPhone']}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.heirEmail']}
            name={['artist', 'heir', 'email']}
            className='form-field'
            rules={[{type: 'email', message: messages['common.email.valid']}]}>
            <Input
              type='email'
              style={{width: '100%'}}
              placeholder={messages['common.heirEmail']}
            />
          </Form.Item>
        </Col>
        <Col md={8} xs={24}>
          <Form.Item
            label={messages['common.heirFile']}
            name={['artist', 'heir', 'file_path']}
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
      </Row>
    </>
  );
};

export default OtherInfo;

// OtherInfo.propTypes = {
//   onChange: PropTyes.func,
// };
