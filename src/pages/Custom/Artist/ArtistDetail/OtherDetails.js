import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {RiFoldersLine} from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai';
import {FiFacebook, FiTwitter} from 'react-icons/fi';

const OtherDetails = (props) => {
  const {artist} = props;

  return (
    <div className='artist-detail-modal-item'>
      <h6 className='artist-detail-modal-item-title'>
        <IntlMessages id='common.otherDetails' />
      </h6>

      <div className='artist-detail-modal-item-content'>
        <div className='artist-other-detail-item'>
          <RiFoldersLine className='artist-other-detail-item-icon' />
          <div className='artist-other-detail-item-content'>
            {artist?.company ? (
              artist?.company
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className='artist-other-detail-item'>
          <AiOutlineHome className='artist-other-detail-item-icon' />
          <div className='artist-other-detail-item-content'>
            {artist?.address ? (
              artist?.address
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
        <div className='artist-other-detail-item'>
          <FiFacebook className='artist-other-detail-item-icon' />
          <div className='artist-other-detail-item-content'>
            {artist?.facebookId ? (
              artist?.facebookId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className='artist-other-detail-item'>
          <FiTwitter className='artist-other-detail-item-icon' />
          <div className='artist-other-detail-item-content'>
            {artist?.twitterId ? (
              artist?.twitterId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;

OtherDetails.propTypes = {
  artist: PropTypes.object.isRequired,
};
