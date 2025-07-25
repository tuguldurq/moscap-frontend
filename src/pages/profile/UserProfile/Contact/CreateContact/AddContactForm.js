import React from 'react';
import {useDispatch} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import AppScrollbar from '@crema/core/AppScrollbar';
import {Avatar, Button, Form, Input, Select} from 'antd';
import {
  onCreateContact,
  onUpdateSelectedEmergencyContact,
} from '../../../../../redux/actions/Artist';
import {citizens, prefixPhone} from 'util/letters';

const AddContactForm = (props) => {
  const {
    userImage,
    selectContact,
    setUserImage,
    handleAddContactClose,
    onUpdateContact,
  } = props;

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const {messages} = useIntl();

  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (selectContact) {
      const newContact = {
        id: selectContact.id,
        user_id: selectContact.user_id,
        image: userImage,
        ...values,
      };
      dispatch(onUpdateSelectedEmergencyContact(newContact));
      newContact.phone =
        newContact.phone.prefix + ' ' + newContact.phone.number;
      if (onUpdateContact) onUpdateContact(newContact);
    } else {
      const newContact = {
        ...values,
      };
      dispatch(onCreateContact(newContact));
      handleAddContactClose();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  console.log('selectContact: ', selectContact);
  return (
    <Form
      className='contact-form'
      name='basic'
      layout='vertical'
      initialValues={
        selectContact
          ? {
              ...selectContact,
              phone: selectContact.phone
                ? {
                    prefix: selectContact.phone.split(' ')[0],
                    number: selectContact.phone.split(' ')[1],
                  }
                : '',
            }
          : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <div className='contact-form-header'>
        <Form.Item {...getRootProps({className: 'dropzone'})}>
          <input disabled {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            <Avatar className='contact-form-avatar' src={userImage} />
          </label>
        </Form.Item>
        {selectContact ? (
          <h4 className='contact-form-header-title'>{selectContact.name}</h4>
        ) : null}
      </div>

      <AppScrollbar className='contact-modal-scrollbar'>
        <div className='contact-form-content'>
          <div className='contact-form-content-item'>
            <div className='contact-form-content-field'>
              <Form.Item
                className='form-field'
                label='Нэр'
                name='name'
                rules={[
                  {
                    required: true,
                    message: messages['common.givenname.required'],
                  },
                ]}>
                <Input placeholder={messages['common.name']} />
              </Form.Item>

              <Form.Item className='form-field' label='Утасны дугаар' required>
                <Input.Group compact style={{display: 'flex'}}>
                  <Form.Item
                    name={['phone', 'prefix']}
                    noStyle
                    initialValue={'+976'}>
                    <Select
                      style={{minWidth: 80}}
                      options={prefixPhone}></Select>
                  </Form.Item>
                  <Form.Item
                    noStyle
                    name={['phone', 'number']}
                    rules={[
                      {
                        required: true,
                        message: messages['common.phone.required'],
                      },
                    ]}>
                    <Input
                      size='large'
                      style={{width: '100%'}}
                      placeholder={messages['common.phone']}
                    />
                  </Form.Item>
                </Input.Group>
              </Form.Item>

              <Form.Item
                className='form-field'
                name={['type', 'id']}
                label='Хэн болох'
                rules={[
                  {
                    required: true,
                    message: messages['common.heirWhos'],
                  },
                ]}>
                <Select options={citizens}></Select>
              </Form.Item>
            </div>
          </div>
        </div>

        <div className='contact-form-footer'>
          <Button
            type='primary'
            ghost
            className='contact-form-btn'
            onClick={handleAddContactClose}>
            <IntlMessages id='common.cancel' />
          </Button>
          <Button type='primary' className='contact-form-btn' htmlType='submit'>
            <IntlMessages id='common.save' />
          </Button>
        </div>
      </AppScrollbar>
    </Form>
  );
};

export default AddContactForm;

AddContactForm.propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddContactClose: PropTypes.func,
  selectContact: PropTypes.object,
  onUpdateContact: PropTypes.any,
};
