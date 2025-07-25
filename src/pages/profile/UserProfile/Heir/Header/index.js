import React from 'react';
import {Button, Typography} from 'antd';
import PropTypes from 'prop-types';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import {EditOutlined} from '@ant-design/icons';
import {useIntl} from 'react-intl';
import './index.style.less';

const {Title} = Typography;

const AppComponentHeader = ({
  title,
  description,
  onClickUpdateForm,
  isShowUpdateButton,
}) => {
  const {messages} = useIntl();
  const onHandleEditForm = () => {
    onClickUpdateForm(false);
  };
  return (
    <AppAnimateGroup type='top' height='auto' interval={100} duration={450}>
      <div className='container-header-custom' key={'header'}>
        <div className='header-title'>
          <Title level={3} className='title-h3'>
            {title}
          </Title>
          {description ? (
            <Title level={5} className='text-base'>
              {description}
            </Title>
          ) : null}
        </div>
        {isShowUpdateButton ? (
          <div style={{height: 30}}>
            <Button
              type='primary'
              onClick={() => onHandleEditForm()}
              icon={<EditOutlined />}>
              {messages['common.edit']}
            </Button>
          </div>
        ) : null}
      </div>
    </AppAnimateGroup>
  );
};

export default AppComponentHeader;

AppComponentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClickUpdateForm: PropTypes.func,
  isShowUpdateButton: PropTypes.bool,
};
AppComponentHeader.defaultProps = {};
