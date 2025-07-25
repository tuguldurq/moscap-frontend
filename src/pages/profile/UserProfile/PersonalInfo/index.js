import {Col, Descriptions, Row} from 'antd';
import React from 'react';
import {useAuthUser} from '../../../../@crema/utility/AuthHooks';
import {artistProfileType, profileName} from '../../../../util/basic';
import './index.style.less';

const PersonalInfo = () => {
  const {user} = useAuthUser();
  console.log('user', user);
  const phoneNumber = user.phone.split(' ');
  user.phone = {prefix: phoneNumber[0], number: phoneNumber[1]};
  console.log('phoneNumber', phoneNumber, user.phone);
  // const [citizen, setCitezen] = useState(user?.citizen || 'mongolia');
  return (
    <Row justify={'center'}>
      <Col md={12}>
        <Descriptions title='Profile' bordered column={1}>
          <Descriptions.Item label='Овог, Нэр'>
            {profileName(user)}
          </Descriptions.Item>
          <Descriptions.Item label='Уран бүтээлчийн ангилал'>
            {artistProfileType(user)}
          </Descriptions.Item>
          <Descriptions.Item label='MOSCAP код'>
            {user?.artist?.mgl_code}
          </Descriptions.Item>
          <Descriptions.Item label='IPI код'>
            {user?.artist?.ipi_code}
          </Descriptions.Item>
          <Descriptions.Item label='Бүртгэгдсэн уран бүтээл'>
            {user?.artist?.composer_songs_count +
              user?.artist?.author_songs_count}
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
};

export default PersonalInfo;
