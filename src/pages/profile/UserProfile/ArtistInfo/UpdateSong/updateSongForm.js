import {useAuthUser} from '@crema/utility/AuthHooks';
import {Button, Col, DatePicker, Form, Input, Row, Select, Space} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import {useEffect} from 'react';

const UpdateSongForm = ({onUpdateSong, song, handleClose, changeDisable}) => {
  const {user} = useAuthUser();
  const [form] = Form.useForm();

  useEffect(() => {
    if (song) {
      song.year = moment(song);
      form.setFieldsValue(song);
    }
  }, [song]);
  return (
    <Form
      onFinish={onUpdateSong}
      layout='vertical'
      form={form}
      disabled={changeDisable}>
      <Form.Item name='origin_name' label={'Дууны нэр'}>
        <Input />
      </Form.Item>
      {user?.artist?.type === 'C' ? (
        <Form.Item label={'Яруу найрагч'} style={{width: '100%'}}>
          <Space.Compact style={{width: '100%'}}>
            <Form.Item style={{width: '100%'}} name={['author', 'first_name']}>
              <Input placeholder='Овог' />
            </Form.Item>
            <Form.Item style={{width: '100%'}} name={['author', 'last_name']}>
              <Input placeholder='Нэр' />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
      ) : (
        <Form.Item label={'Хөгжмийн зохиолч'} style={{width: '100%'}}>
          <Space.Compact style={{width: '100%'}}>
            <Form.Item
              style={{width: '100%'}}
              name={['composer', 'first_name']}>
              <Input placeholder='Овог' />
            </Form.Item>
            <Form.Item style={{width: '100%'}} name={['composer', 'last_name']}>
              <Input placeholder='Нэр' />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
      )}
      {/* <Form.Item name='english_name' label={'Дууны нэр/Латин/'}>
        <Input />
      </Form.Item> */}
      <Form.Item name='performer' label={'Хамтлаг дуучин'}>
        <Input />
      </Form.Item>
      <Row gutter={30}>
        <Col md={12} xs={24}>
          <Form.Item name='lang' label={'Хэлний төрөл'}>
            <Select>
              <Select.Option value=''> - Сонгох -</Select.Option>
              <Select.Option value='mon'>Монгол</Select.Option>
              <Select.Option value='eng'>Англи</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item name='year' label='Дуу төрсөн огноо'>
            <DatePicker size='large' style={{width: '100%'}} />
          </Form.Item>
        </Col>
      </Row>
      {!changeDisable && (
        <div style={{textAlign: 'right'}}>
          <Button
            type='secondary'
            onClick={() => handleClose()}
            style={{marginRight: 10}}>
            Буцах
          </Button>
          <Button type='primary' htmlType='submit'>
            Хадгалах
          </Button>
        </div>
      )}
    </Form>
  );
};

export default UpdateSongForm;

UpdateSongForm.propTypes = {
  onUpdateSong: PropTypes.func,
  song: PropTypes.any,
  handleClose: PropTypes.func,
  changeDisable: PropTypes.bool,
};
