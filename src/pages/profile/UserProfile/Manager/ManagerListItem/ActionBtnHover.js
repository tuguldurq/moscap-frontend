import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';

const ActionBtnHover = (props) => {
  const {onSelectManagersForDelete, manager, onOpenEditManager} = props;

  const onDeleteManager = () => {
    onSelectManagersForDelete([manager.id]);
  };

  const onClickEditOption = () => {
    onOpenEditManager(manager);
  };

  return (
    <span className='manager-list-item-action-hover'>
      <AppIconButton
        onClick={onClickEditOption}
        title={<IntlMessages id='common.edit' />}
        icon={<AiOutlineEdit />}
      />
      <AppIconButton
        onClick={onDeleteManager}
        title={<IntlMessages id='common.delete' />}
        icon={<AiOutlineDelete />}
      />
    </span>
  );
};

export default ActionBtnHover;

ActionBtnHover.propTypes = {
  onSelectManagersForDelete: PropTypes.func,
  manager: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditManager: PropTypes.func,
};
