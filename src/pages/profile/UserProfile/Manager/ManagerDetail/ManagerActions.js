import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import AppIconButton from '@crema/core/AppIconButton';

const ManagerActions = (props) => {
  const {onDeleteManager, onOpenEditManager, manager} = props;

  return (
    <div className='manager-action'>
      <div className='manager-action-hover'>
        <AppIconButton
          icon={<AiOutlineEdit />}
          onClick={() => onOpenEditManager(manager)}
        />
      </div>
      <AppIconButton icon={<AiOutlineDelete />} onClick={onDeleteManager} />
    </div>
  );
};

export default ManagerActions;

ManagerActions.propTypes = {
  onDeleteManager: PropTypes.func,
  manager: PropTypes.object.isRequired,
  onOpenEditManager: PropTypes.func,
};
