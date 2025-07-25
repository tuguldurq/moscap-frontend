import PropTypes from 'prop-types';
import {Typography} from 'antd';

const {Text} = Typography;

const NewsDetail = ({item}) => {
  return (
    <Text>
      <h2>{item?.title}</h2>
      <div dangerouslySetInnerHTML={{__html: item?.description}}></div>
    </Text>
  );
};

export default NewsDetail;

NewsDetail.propTypes = {
  item: PropTypes.object,
};
