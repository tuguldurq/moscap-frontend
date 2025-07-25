import {useAuthUser} from '@crema/utility/AuthHooks';
import {Button, Col, DatePicker, Form, Input, Row, Select, Space} from 'antd';
import PropTypes from 'prop-types';

const AddSongForm = ({onAddSong}) => {
  const {user} = useAuthUser();
  return (
    <Form onFinish={onAddSong} layout='vertical'>
      <Form.Item
        name='origin_name'
        label={'Дууны нэр'}
        rules={[{required: true, message: 'Дууны нэрээ оруулна уу'}]}>
        <Input />
      </Form.Item>
      {user?.artist?.type === 'C' ? (
        <Form.Item label={'Яруу найрагч'} style={{width: '100%'}}>
          <Space.Compact style={{width: '100%'}}>
            <Form.Item
              style={{width: '100%'}}
              name={['author', 'first_name']}
              rules={[{required: true, message: 'Утга оруулна уу'}]}>
              <Input placeholder='Овог' />
            </Form.Item>
            <Form.Item
              style={{width: '100%'}}
              name={['author', 'last_name']}
              rules={[{required: true, message: 'Утга оруулна уу'}]}>
              <Input placeholder='Нэр' />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
      ) : (
        <Form.Item label={'Хөгжмийн зохиолч'} style={{width: '100%'}}>
          <Space.Compact style={{width: '100%'}}>
            <Form.Item
              style={{width: '100%'}}
              name={['composer', 'first_name']}
              rules={[{required: true, message: 'Утга оруулна уу'}]}>
              <Input placeholder='Овог' />
            </Form.Item>
            <Form.Item
              style={{width: '100%'}}
              name={['composer', 'last_name']}
              rules={[{required: true, message: 'Утга оруулна уу'}]}>
              <Input placeholder='Нэр' />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
      )}
      {/* <Form.Item name='english_name' label={'Дууны нэр/Латин/'}>
        <Input />
      </Form.Item> */}
      <Form.Item
        name='performer'
        label={'Хамтлаг дуучин'}
        rules={[{required: true, message: 'Хамтлаг дуучны нэрийг оруулна уу'}]}>
        <Input />
      </Form.Item>
      <Row gutter={30}>
        <Col md={12} xs={24}>
          <Form.Item
            name='lang'
            label={'Хэлний төрөл'}
            initialValue={''}
            rules={[{required: true, message: 'Сонгоно уу'}]}>
            <Select>
              <Select.Option value=''> - Сонгох -</Select.Option>
              <Select.Option value='mon'>Монгол</Select.Option>
              <Select.Option value='eng'>Англи</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            name='year'
            label='Дуу төрсөн огноо'
            rules={[{required: true, message: 'Дуу төрсөн огноог оруулна уу'}]}>
            <DatePicker size='large' style={{width: '100%'}} />
          </Form.Item>
        </Col>
      </Row>
      <div style={{textAlign: 'right'}}>
        <Button type='secondary' style={{marginRight: 10}}>
          Буцах
        </Button>
        <Button type='primary' htmlType='submit'>
          Хадгалах
        </Button>
      </div>
    </Form>
  );
};

export default AddSongForm;

AddSongForm.propTypes = {
  onAddSong: PropTypes.func,
};
