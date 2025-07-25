import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ItemMenu from './ItemMenu';
import ActionBtnHover from './ActionBtnHover';
import {MailOutlined} from '@ant-design/icons';

const ManagerListItem = ({
  index,
  manager,
  checkedManagers,
  onSelectManagersForDelete,
  onViewManagerDetail,
  onOpenEditManager,
}) => {
  return (
    <>
      <div
        key={manager.id}
        className={clsx('manager-list-item item-hover', {
          rootCheck: checkedManagers.includes(manager.id),
        })}
        onClick={() => onViewManagerDetail(manager)}>
        <span
          className='manager-list-item-checkbox-view'
          onClick={(event) => event.stopPropagation()}>
          {index}
        </span>
        <span className='text-truncate manager-list-item-title'>
          {manager.name}
        </span>

        <span className='text-truncate manager-list-item-col manager-list-item-email'>
          <span className='text-truncate'>
            {manager.phone ? manager.phone : null}
          </span>
        </span>
        <span className='text-truncate manager-list-item-col'>
          <span className='text-truncate'>
            <MailOutlined /> {manager.email}
          </span>
        </span>
        <span className='manager-list-item-action'>
          <span
            className='manager-list-item-menu-view'
            onClick={(event) => event.stopPropagation()}>
            <ItemMenu
              onSelectManagersForDelete={onSelectManagersForDelete}
              manager={manager}
              onOpenEditManager={onOpenEditManager}
            />
          </span>
        </span>

        <ActionBtnHover
          manager={manager}
          onSelectManagersForDelete={onSelectManagersForDelete}
          onOpenEditManager={onOpenEditManager}
        />
      </div>
    </>
  );
};

export default ManagerListItem;

ManagerListItem.defaultProps = {
  labelList: [],
  checkedManagers: [],
};

ManagerListItem.propTypes = {
  index: PropTypes.number,
  manager: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedManagers: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectManagersForDelete: PropTypes.func,
  onViewManagerDetail: PropTypes.func,
  onOpenEditManager: PropTypes.func,
};
