import React from 'react';
// import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
// import {FiFacebook, FiTwitter} from 'react-icons/fi';
import {Descriptions} from 'antd';

const SocialMedia = (props) => {
  const {artist} = props;

  return (
    <Descriptions
      title={
        <>
          Уран бүтээлчийн мэдээлэл <hr />
        </>
      }
      column={1}>
      <Descriptions.Item label='Уран бүтээлчийн төрөл'>
        {artist?.type}
      </Descriptions.Item>
      <Descriptions.Item label='Бүтээлийн төрөл'>
        {artist?.release_type}
      </Descriptions.Item>
      {artist?.stage_name && (
        <Descriptions.Item label='Тайзны нэр'>
          {artist?.stage_name}
        </Descriptions.Item>
      )}
      {artist?.band_name && (
        <Descriptions.Item label='Хамтлагын нэр'>
          {artist?.band_name}
        </Descriptions.Item>
      )}
    </Descriptions>
  );
};

export default SocialMedia;

SocialMedia.propTypes = {
  artist: PropTypes.object.isRequired,
};
