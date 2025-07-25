import {LogoutOutlined} from '@ant-design/icons';
import './index.style.less';
import {Menu} from 'antd';
import {useIntl} from 'react-intl';
import {useAuthMethod} from '@crema/utility/AuthHooks';

const AppVerticalNavFooter = () => {
  const {messages} = useIntl();
  const {logout} = useAuthMethod();

  return (
    <div className='menu-footer-fixed'>
      <Menu
        mode='inline'
        items={[
          {
            key: 'logout',
            danger: true,
            label: messages['common.logout'],
            icon: <LogoutOutlined />,
            onClick: () => logout(),
          },
        ]}
      />
    </div>
  );
};

export default AppVerticalNavFooter;
