import React from 'react';
import PropTypes from 'prop-types';
import {MdLabelOutline} from 'react-icons/md';
import {NavLink} from 'react-router-dom';

const LabelItem = ({label}) => {
  return (
    <div key={label.id}>
      <NavLink
        to={`/apps/artist/label/${label.alias}`}
        className='artist-sidebar-label-item'>
        <span className='artist-sidebar-label-icon'>
          <MdLabelOutline style={{color: `${label.color}`}} />
        </span>
        {label.name}
      </NavLink>
    </div>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};
