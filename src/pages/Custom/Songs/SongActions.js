import {MoreOutlined} from '@ant-design/icons';
import {Button, Dropdown} from 'antd';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
// import {useNavigate} from 'react-router-dom';
import {setCurrentSong} from 'redux/actions';

const SongActions = (props) => {
  const {item} = props;
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const onClick = ({key}) => {
    console.log(key);
    dispatch(setCurrentSong(item));
    // navigate();
  };
  const menuItems = [
    {
      key: 1,
      label: 'Засах',
    },
    {
      key: 2,
      label: 'Устгах',
    },
  ];
  return (
    <>
      <Dropdown menu={{items: menuItems, onClick}} trigger={['click']}>
        <Button type='circle'>
          <MoreOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

export default SongActions;

SongActions.propTypes = {
  item: PropTypes.any,
};
