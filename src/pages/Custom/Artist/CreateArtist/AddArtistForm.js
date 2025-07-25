import React from 'react';
import {useDispatch} from 'react-redux';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Button, Col, Divider, Form, Row} from 'antd';
import {
  onAddArtist,
  onUpdateSelectedArtist,
} from '../../../../redux/actions/Artist';
import PersonalInfo from './Form/PersonalInfo';
import OtherInfo from './Form/OtherInfo';
const AddArtistForm = (props) => {
  const {selectArtist, handleAddArtistClose, onUpdateArtist} = props;

  const {messages} = useIntl();

  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (selectArtist) {
      dispatch(onUpdateSelectedArtist({...values}, selectArtist.id));
      if (onUpdateArtist) onUpdateArtist({...values});
    } else {
      dispatch(onAddArtist({...values}));
      handleAddArtistClose();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className='artist-form'
      name='basic'
      layout='vertical'
      initialValues={
        selectArtist
          ? {
              artist: {...selectArtist},
              user: {
                ...selectArtist.user,
                register: {
                  letter1:
                    selectArtist?.user?.register_number != null &&
                    selectArtist?.user?.register_number.charAt(0),
                  letter2:
                    selectArtist?.user?.register_number != null &&
                    selectArtist?.user?.register_number.charAt(1),
                  number:
                    selectArtist?.user?.register_number != null &&
                    selectArtist?.user?.register_number.substring(2),
                },
                phone: {
                  prefix:
                    selectArtist?.user?.phone !== null &&
                    selectArtist?.user?.phone.split(' ')[0],
                  number:
                    selectArtist?.user?.phone !== null &&
                    selectArtist?.user?.phone.split(' ')[1],
                },
              },
            }
          : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <div className='artist-form-header'>
        {selectArtist ? (
          <h4 className='artist-form-header-title'>Бүртгэл засах</h4>
        ) : (
          <h4 className='artist-form-header-title'>Бүртгэл үүсгэх</h4>
        )}
      </div>
      <Row gutter={{sm: 60}}>
        <Col span={12}>
          <PersonalInfo isUpdate={selectArtist != null ? true : false} />
        </Col>
        <Col span={12}>
          <OtherInfo />
        </Col>
      </Row>
      <Divider />
      <Form.Item style={{textAlign: 'right'}}>
        <Button type='primary' htmlType='submit'>
          {messages['common.saveChanges']}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddArtistForm;

AddArtistForm.propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddArtistClose: PropTypes.func,
  selectArtist: PropTypes.object,
  onUpdateArtist: PropTypes.any,
};
