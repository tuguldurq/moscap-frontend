import {InfoCircleOutlined} from '@ant-design/icons';
import {Form, Input, Row, Col, Divider, Select, InputNumber} from 'antd';
import {useIntl} from 'react-intl';
import {banks} from 'util/letters';
import '../styles.less';
const companyTypes = [
  {label: 'ХХК (хязгаарлагдмал хариуцлагатай компани)', value: 'llc'},
  {label: 'ХК (хувьцаат компани)', value: 'lc'},
];
const activityTypes = [
  {label: 'Телевиз, Кабель, IPTV', value: 'tv'},
  {label: 'FM', value: 'fm'},
  {label: 'Караоке', value: 'karaoke'},
  {label: 'Концерт, Театр, Шоу', value: 'concert'},
  {label: 'Entertainment Organizer', value: 'entertainment '},
  {label: 'Кино, Видео, Реклам', value: 'movie'},
  {label: 'Ресторант, Лаунж, Паб, Баар', value: 'restaurant'},
  {label: 'Зочид буудал', value: 'hotel'},
  {label: 'Film', value: 'film'},
];
const positions = [
  {label: 'Үүсгэн байгуулагч', value: 'founder'},
  {label: 'Гүйцэтгэх захирал', value: 'ceo'},
  {label: 'Ерөнхий захирал', value: 'coo'},
  {label: 'Менежер', value: 'manager'},
  {label: 'Санхүүч', value: 'cfo'},
];
const CompanyInfo = () => {
  const {messages} = useIntl();

  return (
    <>
      <Row gutter={8}>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyName']}
            name={['company', 'surname']}
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.company.englishName'],
              },
            ]}>
            <Input
              type='text'
              placeholder={messages['common.signup.companyName']}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.englishName']}
            name={['company', 'english_name']}
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.company.englishName'],
              },
            ]}>
            <Input
              type='text'
              placeholder={messages['common.signup.englishName']}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            name={['company', 'type']}
            label={messages['common.signup.companyType']}
            rules={[
              {required: true, message: messages['validation.company.type']},
            ]}
            className='form-field'>
            <Select
              options={companyTypes}
              placeholder={messages['common.signup.companyType']}></Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.activityType']}
            name={['company', 'activity_type']}
            className='form-field'>
            <Select
              options={activityTypes}
              placeholder={messages['common.signup.activityType']}></Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.certificateNumber']}
            name={['company', 'certificate_number']}
            className='form-field'>
            <Input placeholder={messages['common.signup.certificateNumber']} />
          </Form.Item>
        </Col>
        <Col md={24} xs={24}>
          <Form.Item
            label={messages['common.signup.companyAddress']}
            name={['company', 'address']}
            className='form-field'
            tooltip={{
              title: 'Албан ёсны хаяг байна.',
              icon: <InfoCircleOutlined />,
            }}>
            <Input placeholder={messages['common.signup.companyAddress']} />
          </Form.Item>
        </Col>
        <Divider orientation='left'>
          {messages['common.signup.companyPerson']}
        </Divider>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyPersonName']}
            name={['company', 'person_name']}
            className='form-field'>
            <Input placeholder={messages['common.signup.companyPersonName']} />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyPersonPosition']}
            name={['company', 'person_position']}
            className='form-field'>
            <Select
              options={positions}
              placeholder={
                messages['common.signup.companyPersonPosition']
              }></Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyPersonPhone']}
            name={['company', 'person_phone']}
            className='form-field'>
            <Select
              options={positions}
              placeholder={
                messages['common.signup.companyPersonPhone']
              }></Select>
          </Form.Item>
        </Col>
        <Divider orientation='left'>
          {messages['common.signup.companyFinance']}
        </Divider>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyFinanceName']}
            name={['company', 'finance', 'surname']}
            className='form-field'>
            <Input placeholder={messages['common.signup.companyFinanceName']} />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyFinancePosition']}
            name={['company', 'finance', 'position']}
            className='form-field'>
            <Select
              options={positions}
              placeholder={messages['common.signup.companyFinancePosition']}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyFinancePhone']}
            name={['company', 'finance', 'phone']}
            className='form-field'>
            <Input
              placeholder={messages['common.signup.companyFinancePhone']}
            />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label={messages['common.signup.companyFinanceEmail']}
            name={['company', 'finance', 'email']}
            className='form-field'
            tooltip={{
              title: 'Нэхэмжлэл хүлээн авах и-мэйл.',
              icon: <InfoCircleOutlined />,
            }}>
            <Input
              type='email'
              placeholder={messages['common.signup.companyFinanceEmail']}
            />
          </Form.Item>
        </Col>
        <Col md={24} xs={24}>
          <Form.Item label={messages['common.bank']} required={true}>
            <Input.Group compact>
              <Form.Item
                noStyle
                name={['company', 'finance', 'bank']}
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
                name={['company', 'finance', 'account_number']}
                rules={[
                  {
                    required: true,
                    message: messages['validation.bankAccountNumber'],
                  },
                ]}>
                <InputNumber
                  style={{width: '67%'}}
                  className='bank-account'
                  placeholder={messages['common.bankAccount']}
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default CompanyInfo;

// OtherInfo.propTypes = {
//   onChange: PropTyes.func,
// };
