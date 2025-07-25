import {Button, Form, Input, Modal, Select} from 'antd';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {createSong, onUserListOfAdmin} from 'redux/actions';

const SongCreate = (props) => {
  const {open, onClose} = props;
  const {usersList} = useSelector(({userList}) => userList);
  const {loading} = useSelector(({common}) => common);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(createSong(values));
    onClose(false);
  };

  useEffect(() => {
    dispatch(onUserListOfAdmin());
  }, []);
  return (
    <Modal
      open={open}
      title='Уран бүтээл бүртгэх'
      onCancel={() => onClose(false)}
      width={600}
      footer={false}>
      <Form labelCol={{span: 8}} onFinish={onFinish}>
        <Form.Item label='Дууны код' name='song_code'>
          <Input />
        </Form.Item>
        <Form.Item
          label='Бүтээлийн нэр'
          name='origin_name'
          rules={[
            {
              required: true,
              type: 'string',
              message: 'Бүтээлийн нэрээ оруулна уу!',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label='Бүтээлийн нэр (Латин)' name='english_name'>
          <Input />
        </Form.Item>
        {/* <Form.Item label='ISRC' name='isrc'>
          <Input />
        </Form.Item> */}
        <Form.Item label='Туурвисан огноо' name='year'>
          <Input />
        </Form.Item>
        <Form.Item label='Хөгжмийн зохиолч' name='composer_id'>
          <Select
            loading={loading}
            showSearch
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input)
            }
            options={usersList?.map((data) => ({
              value: data.id,
              label: data.first_name + ' ' + data.last_name,
            }))}
          />
        </Form.Item>
        <Form.Item label='Ая зохиогч' name='author_id'>
          <Select
            loading={loading}
            showSearch
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input)
            }
            options={usersList?.map((data) => ({
              value: data.id,
              label: data.first_name + ' ' + data.last_name,
            }))}
          />
        </Form.Item>
        <Form.Item label='Уран бүтээлч' name='performer'>
          <Input />
        </Form.Item>
        <div className='create-song-modal-footer'>
          <Button type='submit' htmlType='submit'>
            Хадгалах
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default SongCreate;

SongCreate.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
