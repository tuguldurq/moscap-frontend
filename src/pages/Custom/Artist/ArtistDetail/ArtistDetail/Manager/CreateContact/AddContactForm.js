import React from 'react';
import {useDispatch} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import AppScrollbar from '@crema/core/AppScrollbar';
import {Avatar, Button, Form, Input} from 'antd';
import moment from 'moment';
import {
  onCreateContact,
  onUpdateSelectedContact,
} from '../../../../../../../redux/actions/ContactApp';

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
    if (values.birthday)
      values.birthday = moment(values.birthday).format('DD-MM-YYYY');
    if (selectContact) {
      const newContact = {
        id: selectContact.id,
        isStarred: selectContact.isStarred,
        isFrequent: selectContact.isFrequent,
        image: userImage,
        ...values,
      };
      dispatch(onUpdateSelectedContact(newContact));
      if (onUpdateContact) onUpdateContact(newContact);
    } else {
      const newContact = {
        id: Math.floor(Math.random() * 1000),
        isStarred: false,
        isFrequent: Math.random() > 0.5,
        image: userImage,
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
              birthday: selectContact.birthday
                ? moment(selectContact.birthday, 'YYYY-MM-DD')
                : '',
            }
          : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <div className='contact-form-header'>
        <Form.Item {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
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
              <Form.Item className='form-field' label='Нэр' name='name'>
                <Input placeholder={messages['common.name']} />
              </Form.Item>

              <Form.Item
                className='form-field'
                name='phone'
                label='Утасны дугаар'>
                <Input placeholder={messages['common.phone']} />
              </Form.Item>

              <Form.Item className='form-field' name='type' label='Е-мэйл'>
                <Input type='email' />
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
