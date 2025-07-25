import React from 'react';
// import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';

// import {FiMail, FiPhone} from 'react-icons/fi';
// import {AiOutlineGlobal, AiOutlineShopping} from 'react-icons/ai';
import {Descriptions} from 'antd';
import {heirName} from '../../../../util/basic';

const HeirInfo = ({artist}) => {
  return (
    <Descriptions title='Өв залгамжлагчийн мэдээлэл' bordered column={3}>
      <Descriptions.Item label='Овог,Нэр'>
        {heirName(artist.user.heir)}
      </Descriptions.Item>
      <Descriptions.Item label='Регистрийн дугаар'>
        {artist.user.heir.register_number}
      </Descriptions.Item>
      <Descriptions.Item label='И-мэйл'>{artist.email}</Descriptions.Item>
      <Descriptions.Item label='Утасны дугаар'>
        {artist.user.heir.phone}
      </Descriptions.Item>
      <Descriptions.Item label='Хүйс'> {artist.sex}</Descriptions.Item>
    </Descriptions>
  );
};

export default HeirInfo;

HeirInfo.propTypes = {
  artist: PropTypes.object,
};
