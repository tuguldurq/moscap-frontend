import React, {useState} from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Button, Card, Form, Steps} from 'antd';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import PersonalInfo from './steps/PersonalInfo';
import Confirm from './steps/company/confirm';
import CompanyInfo from './steps/company/CompanyInfo';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import LandingHeader from 'pages/home/Components/Header/dark';
import {useIntl} from 'react-intl';
import './index.style.less';

const {Step} = Steps;
const userFields = [
  ['user', 'last_name'],
  ['user', 'first_name'],
  ['user', 'facebook'],
  ['user', 'instagram'],
  ['user', 'citizen'],
  ['user', 'register', 'letter1'],
  ['user', 'register', 'letter2'],
  ['user', 'register', 'number'],
  ['user', 'email'],
  ['user', 'phone', 'prefix'],
  ['user', 'phone', 'number'],
  ['user', 'sex'],
  ['user', 'bank', 'name'],
  ['user', 'bank', 'account'],
  ['user', 'password'],
  ['user', 'password-confirm'],
];
const companyFields = [
  ['company', 'surname'],
  ['company', 'english_name'],
  ['company', 'type'],
  ['company', 'activity_type'],
  ['company', 'certificate_number'],
  ['company', 'address'],
  ['company', 'finance', 'surname'],
  ['company', 'finance', 'position'],
  ['company', 'finance', 'phone'],
  ['company', 'finance', 'email'],
  ['company', 'finance', 'bank'],
  ['company', 'finance', 'account_number'],
];

const SignupPublisher = () => {
  const {signUpUser} = useAuthMethod();
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [form] = Form.useForm();
  const {messages} = useIntl();
  const [isChecked, setIsCheckedProps] = useState(false);

  const steps = [
    {
      title: 'common.signup.personalInfo',
      component: <PersonalInfo />,
      fields: userFields,
    },
    {
      title: 'common.signup.companyInfo',
      component: <CompanyInfo />,
      fields: companyFields,
    },
    {
      title: 'common.signup.confirm',
      component: (
        <Confirm formData={data} setIsCheckedProps={setIsCheckedProps} />
      ),
      fields: [['terms']],
    },
  ];
  const next = async () => {
    try {
      await form
        .validateFields(steps[current].fields)
        .then((values) => {
          setCurrent(current + 1);
          setData({...data, ...values});
          if (isChecked === true) {
            signUpUser({type: 'artist', requestData: data});
          }
        })
        .catch((errr) => {
          console.log(errr);
          return false;
        });
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = async () => {
    try {
      await signUpUser({type: 'publisher', requestData: data});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <LandingHeader />
      <div className='user-pages'>
        <AppAnimateGroup type='left'>
          <AppPageMetadata title='Signup' />
          <div className='user-container' key='a'>
            <Card className='user-card'>
              <div className='user-card-header'>
                <div className='user-card-logo'>
                  <img
                    src={'/assets/images/logo-blue.png'}
                    alt='moscap'
                    title='moscap'
                  />
                </div>
                <h3 style={{textTransform: 'uppercase'}}>
                  <IntlMessages id='common.signup' />
                </h3>
              </div>
              <Steps current={current}>
                {steps.map((step) => (
                  <Step key={step.title} title={messages[`${step.title}`]} />
                ))}
              </Steps>
              <div className='steps-content'>
                <Form
                  form={form}
                  scrollToFirstError
                  layout='vertical'
                  name='artist-registration'>
                  {steps[current].component}
                </Form>
              </div>
              <div className='steps-action'>
                {current > 0 && (
                  <Button
                    type='secondary'
                    onClick={() => setCurrent(current - 1)}>
                    {messages['common.signup.previous']}
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button type='primary' onClick={() => next()}>
                    {messages['common.signup.next']}
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button type='primary' htmlType='button' onClick={onFinish}>
                    <IntlMessages id='common.signup' />
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </AppAnimateGroup>
      </div>
    </>
  );
};

export default SignupPublisher;
