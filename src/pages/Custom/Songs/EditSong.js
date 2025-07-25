import {Button, Form, Input, Modal, Select} from 'antd';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {editSong, onUserListOfAdmin} from 'redux/actions';

const EditSong = (props) => {
  const {song, open, onClose} = props;
  const dispatch = useDispatch();
  const {usersList} = useSelector(({userList}) => userList);
  const {loading} = useSelector(({common}) => common);
  useEffect(() => {
    dispatch(onUserListOfAdmin());
  }, []);
  const onFinish = (values) => {
    let id = song.id;
    dispatch(editSong(values, id));
    onClose();
  };
  return (
    <Modal
      open={open}
      title='Уран бүтээл засах'
      onCancel={() => onClose()}
      width={600}
      footer={false}>
      <Form
        labelCol={{span: 8}}
        onFinish={onFinish}
        initialValues={{
          song_code: song?.song_code,
          origin_name: song?.origin_name,
          english_name: song?.english_name,
          year: song?.year,
          author_id: song?.author?.user?.id,
          composer_id: song?.composer?.user?.id,
          performer: song?.performer,
        }}>
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
        <Form.Item label='Ая зохиогч' name='author_id'>
          <Select
            showSearch
            loading={loading}
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
        <Form.Item label='Хөгжмийн зохиолч' name='composer_id'>
          <Select
            showSearch
            loading={loading}
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

export default EditSong;

EditSong.propTypes = {
  song: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
