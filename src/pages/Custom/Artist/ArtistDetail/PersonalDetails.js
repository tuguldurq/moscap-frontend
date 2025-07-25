import React from 'react';
// import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';

// import {FiMail, FiPhone} from 'react-icons/fi';
// import {AiOutlineGlobal, AiOutlineShopping} from 'react-icons/ai';
import {Descriptions} from 'antd';
import {name} from '../../../../util/basic';

const PersonalDetails = ({artist}) => {
  return (
    <Descriptions
      title={
        <>
          Хувийн мэдээлэл <hr />
        </>
      }
      column={1}>
      <Descriptions.Item label='Овог,Нэр'>{name(artist)}</Descriptions.Item>
      <Descriptions.Item label='Регистрийн дугаар'>
        {artist?.user?.register_number}
      </Descriptions.Item>
      <Descriptions.Item label='И-мэйл'>
        {artist?.user?.email}
      </Descriptions.Item>
      <Descriptions.Item label='Утасны дугаар'>
        {artist?.user?.phone}
      </Descriptions.Item>
      <Descriptions.Item label='Хүйс'>
        {' '}
        {artist?.user?.sex === 'female' ? 'Эмэгтэй' : 'Эрэгтэй'}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default PersonalDetails;

PersonalDetails.propTypes = {
  artist: PropTypes.object,
};
