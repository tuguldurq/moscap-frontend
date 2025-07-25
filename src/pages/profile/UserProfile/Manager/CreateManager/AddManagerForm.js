import React from 'react';
import {useDispatch} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import AppScrollbar from '@crema/core/AppScrollbar';
import {Avatar, Button, Form, Input, Select} from 'antd';
import {onCreateManager, onUpdateSelectedManager} from 'redux/actions/Artist';
import {prefixPhone} from 'util/letters';

const AddManagerForm = (props) => {
  const {
    userImage,
    selectManager,
    setUserImage,
    handleAddManagerClose,
    onUpdateManager,
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
    if (selectManager) {
      const newManager = {
        id: selectManager.id,
        ...values,
      };
      dispatch(onUpdateSelectedManager(newManager));
      newManager.phone =
        newManager.phone.prefix + ' ' + newManager.phone.number;
      if (onUpdateManager) onUpdateManager(newManager);
    } else {
      const newManager = {
        ...values,
      };
      dispatch(onCreateManager(newManager));
      handleAddManagerClose();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  console.log('selectManager: ', selectManager);
  return (
    <Form
      className='manager-form'
      name='basic'
      layout='vertical'
      initialValues={
        selectManager
          ? {
              ...selectManager,
              phone: selectManager.phone
                ? {
                    prefix: selectManager.phone.split(' ')[0],
                    number: selectManager.phone.split(' ')[1],
                  }
                : '',
            }
          : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <div className='manager-form-header'>
        <Form.Item {...getRootProps({className: 'dropzone'})}>
          <input disabled {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            <Avatar className='manager-form-avatar' src={userImage} />
          </label>
        </Form.Item>
        {selectManager ? (
          <h4 className='manager-form-header-title'>{selectManager.name}</h4>
        ) : null}
      </div>

      <AppScrollbar className='manager-modal-scrollbar'>
        <div className='manager-form-content'>
          <div className='manager-form-content-item'>
            <div className='manager-form-content-field'>
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
                    initialValue={'+976'}
                    noStyle>
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
              <Form.Item className='form-field' name='email' label='Е-мэйл'>
                <Input type='email' />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className='manager-form-footer'>
          <Button
            type='primary'
            ghost
            className='manager-form-btn'
            onClick={handleAddManagerClose}>
            <IntlMessages id='common.cancel' />
          </Button>
          <Button type='primary' className='manager-form-btn' htmlType='submit'>
            <IntlMessages id='common.save' />
          </Button>
        </div>
      </AppScrollbar>
    </Form>
  );
};

export default AddManagerForm;

AddManagerForm.propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddManagerClose: PropTypes.func,
  selectManager: PropTypes.object,
  onUpdateManager: PropTypes.any,
};
