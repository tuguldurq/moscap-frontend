import {Button, Input} from 'antd';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';
import {PlusCircleFilled} from '@ant-design/icons';

const SongHeader = (props) => {
  const {onSetFilterText, filterText, onCreateSong} = props;
  const {Search} = Input;
  const {messages} = useIntl();

  return (
    <div className='song-content-header'>
      <Search
        className='song-search'
        value={filterText}
        onChange={(event) => onSetFilterText(event.target.value)}
        placeholder={messages['common.searchHere']}
      />
      <Button type='primary' icon={<PlusCircleFilled />} onClick={onCreateSong}>
        Бүтээл нэмэх
      </Button>
    </div>
  );
};

export default SongHeader;

SongHeader.propTypes = {
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  onCreateSong: PropTypes.func,
};
