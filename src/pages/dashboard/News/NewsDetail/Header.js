import React from 'react';
import {useDispatch} from 'react-redux';
// import {onUpdateSelectedTask} from '../../../../redux/actions';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {BiArrowBack} from 'react-icons/bi';
import {useIntl} from 'react-intl';
import AppIconButton from '@crema/core/AppIconButton';
import AppsDeleteIcon from '@crema/core/AppsDeleteIcon';
// import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import {deleteNews} from 'redux/actions';

const NewsDetailHeader = (props) => {
  // const {selectedTask} = props;
  const {messages} = useIntl();
  const {id} = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  // const onChangeStarred = (checked) => {
  //   const task = selectedTask;
  //   // task.isStarred = checked;
  //   dispatch(onUpdateSelectedTask(task));
  // };

  const onDeleteTask = () => {
    dispatch(deleteNews(id));
    navigate(-1);
  };

  return (
    <>
      <AppIconButton
        className='todo-detail-arrow'
        title={messages['common.back']}
        onClick={onClickBackButton}
        icon={<BiArrowBack />}
      />
      <span>{messages['common.back']}</span>
      {/* <StatusToggleButton selected|ask={selectedTask} /> */}

      {/* <span className='todo-detail-header-star-icon'>
        <AppsStarredIcon item={selectedTask} onChange={onChangeStarred} />
      </span> */}

      <div style={{marginLeft: 20}}>
        <AppsDeleteIcon
          deleteAction={onDeleteTask}
          deleteTitle={messages['todo.deleteMessage']}
          className='todo-detail-header-delete-icon'
        />
      </div>
    </>
  );
};

export default NewsDetailHeader;

NewsDetailHeader.propTypes = {
  id: PropTypes.number,
};
