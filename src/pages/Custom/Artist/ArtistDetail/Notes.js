import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Input} from 'antd';

const {TextArea} = Input;

const Notes = (props) => {
  const {artist} = props;
  const {messages} = useIntl();

  return (
    <div className='artist-note'>
      <h6 className='artist-detail-modal-item-title'>
        <IntlMessages id='common.notes' />
      </h6>

      <TextArea
        rows={4}
        placeholder={messages['common.notes']}
        name='notes'
        value={artist.notes}
      />
    </div>
  );
};

export default Notes;

Notes.propTypes = {
  artist: PropTypes.object.isRequired,
};
