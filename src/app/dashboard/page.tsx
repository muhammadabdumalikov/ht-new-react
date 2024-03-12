'use client'
import { Tabs } from 'antd';
import Settings from './settings/page';
import Overview from './overview/page';
import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons';

const Dashboard: React.FC = () => {
  const dashboardParts = [{
    label: 'Overview',
    key: 'overview',
    children: <Overview />,
    icon: <AppstoreOutlined />
  }, {
    label: 'Settings',
    key: 'settings',
    children: <Settings />,
    icon: <SettingOutlined />
  }];

  return (
    <div className='min-h-screen max-h-full overflow-y-auto w-full bg-white px-60'>
      <Tabs
        defaultActiveKey="settings"
        tabPosition='left'
        style={{ height: 220 }}
        items={dashboardParts}
      />
    </div>
  );
};

export default Dashboard;