import {
  Form,
  Input,
  Select,
  InputNumber,
  Row,
  Col,
  Divider,
  Button,
} from 'antd';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import {banks, citizens, lettersmn} from 'util/letters';
import './styles.less';

const {Option} = Select;
const PersonalInfo = (props) => {
  const {admin} = props;
  const {messages} = useIntl();
  const [citizen, setCitezen] = useState('mongolia');
  const prefixPhone = (
    <Form.Item name={['user', 'phone', 'prefix']} noStyle initialValue={'+976'}>
      <Select style={{width: 100}}>
        <Option value='+976'>+976</Option>
        <Option value='+1'>+1</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      <Row gutter={8}>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'last_name']}
            className='form-field'
            label={messages['common.surname']}
            rules={[
              {required: true, message: messages['common.surname.required']},
            ]}>
            <Input placeholder={messages['common.surname']} />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'first_name']}
            className='form-field'
            label={messages['common.givenName']}
            rules={[
              {required: true, message: messages['common.givenname.required']},
            ]}>
            <Input placeholder={messages['common.givenName']} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col md={admin ? 8 : 12} xs={24}>
          <Form.Item
            name={['user', 'citizen']}
            required
            className='form-field'
            label={messages['common.citizen']}
            initialValue={citizen}>
            <Select style={{width: '100%'}} onChange={(e) => setCitezen(e)}>
              <Option value='mongolia'>Mongolia</Option>
              <Option value='us'>United States</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={admin ? 16 : 12} xs={24}>
          {citizen === 'mongolia' ? (
            <Form.Item label={messages['common.registerNumber']} required>
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
                <Form.Item
                  name={['user', 'register', 'number']}
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
                    className='register-width'
                    type='number'
                    placeholder={messages['common.registerNumber']}
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
          ) : (
            <Form.Item
              name={['user', 'passport_number']}
              className='form-field'
              label={messages['common.passportNumber']}
              rules={[
                {required: true, message: 'Please input Passport number!'},
              ]}>
              <Input placeholder={messages['common.passportNumber']} />
            </Form.Item>
          )}
        </Col>
      </Row>
      <Row gutter={8}>
        <Col md={admin ? 24 : 12} xs={24}>
          <Form.Item
            name={['user', 'email']}
            className='form-field'
            label={messages['common.email']}
            rules={[
              {type: 'email', message: messages['common.email.valid']},
              {required: true, message: messages['common.email.required']},
            ]}>
            <Input type='email' placeholder={messages['common.email']} />
          </Form.Item>
        </Col>
        <Col md={admin ? 24 : 12} xs={24}>
          <Form.Item
            name={['user', 'phone', 'number']}
            label={messages['common.phone']}
            className='form-field'
            rules={[
              {required: true, message: messages['common.phone.required']},
            ]}>
            <Input
              addonBefore={prefixPhone}
              type='number'
              placeholder={messages['common.phone']}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.sex']}
            name={['user', 'sex']}
            className='form-field'
            rules={[
              {required: true, message: messages['common.sex.required']},
            ]}>
            <Select placeholder={messages['common.sex']}>
              <Select.Option value={'male'}>
                {messages['common.sex.male']}
              </Select.Option>
              <Select.Option value={'female'}>
                {messages['common.sex.female']}
              </Select.Option>
              <Select.Option value={'other'}>
                {messages['common.sex.other']}
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'facebook']}
            className='form-field'
            label={messages['common.facebook']}>
            <Input
              type='url'
              style={{width: '100%'}}
              placeholder={'https://www.facebook.com/name'}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'instagram']}
            className='form-field'
            label={messages['common.instagram']}>
            <Input
              type='url'
              style={{width: '100%'}}
              placeholder={'https://www.instagram.com/name'}
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation='left'>{messages['common.bankInformation']}</Divider>
      <Form.Item label={messages['common.bank']} required={true}>
        <Input.Group compact>
          <Form.Item
            noStyle
            name={['user', 'bank', 'name']}
            rules={[
              {required: true, message: messages['validation.bankname']},
            ]}>
            <Select
              placeholder={messages['common.bank']}
              className='bank-name'
              options={banks}></Select>
          </Form.Item>
          <Form.Item
            noStyle
            name={['user', 'bank', 'account']}
            rules={[
              {
                required: true,
                message: messages['validation.bankAccountNumber'],
              },
            ]}>
            <InputNumber
              className='bank-account'
              placeholder={messages['common.bankAccount']}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Divider orientation='left'>
        {messages['common.emergencyContact']}
      </Divider>
      <Form.List name={['user', 'emergency']}>
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
                        {...field}
                        label={messages['common.emergencyName']}
                        name={[field.name, 'name']}>
                        <Input
                          size='large'
                          placeholder={messages['common.emergencyName']}
                          style={{width: '100%'}}
                        />
                      </Form.Item>
                    </Col>
                    <Col sm={8} xs={24}>
                      <Form.Item
                        {...field}
                        label={messages['common.whosYour']}
                        name={[field.name, 'type']}>
                        <Select
                          style={{width: '100%'}}
                          placeholder={messages['common.whosYour']}
                          options={citizens}></Select>
                      </Form.Item>
                    </Col>
                    <Col sm={8} xs={24}>
                      <Form.Item
                        {...field}
                        label={messages['common.phone']}
                        name={[field.name, 'phone']}>
                        <InputNumber
                          style={{width: '100%'}}
                          placeholder={messages['common.phone']}
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
                {messages['common.addContact']}
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Row gutter={8}>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'password']}
            label={messages['common.password']}
            rules={[
              {
                required: true,
                message: messages['common.password.required'],
              },
              {
                min: 6,
                message: messages['common.password.minLength'],
              },
            ]}
            hasFeedback>
            <Input.Password />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'password-confirm']}
            label={messages['common.retypePassword']}
            dependencies={['user', 'password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: messages['validation.reTypePassword'],
              },
              {
                min: 6,
                message: messages['common.password.minLength'],
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue(['user', 'password']) === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(messages['common.password.notMatch']),
                  );
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default PersonalInfo;

PersonalInfo.propTypes = {
  admin: PropTypes.bool,
};
