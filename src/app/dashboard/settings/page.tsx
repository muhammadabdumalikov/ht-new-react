import React from 'react';
import { UserOutlined, GlobalOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import Personal from './personal/page';
import AccountSettings from './account-settings/page'
import Profile from './profile/page'
import SocialLinks from './social-links/page'

const Settings: React.FC = () => {
  const tabParts = [{
    label: 'Personal',
    key: 'personal',
    children: <Personal />,
    icon: <UserOutlined />
  }, {
    label: 'Profile',
    key: 'profile',
    children: <Profile />,
    icon: <UserOutlined />
  }, {
    label: 'Social Links',
    key: 'social-links',
    children: <SocialLinks />,
    icon: <GlobalOutlined />
  }, {
    label: 'Account Settings',
    key: 'account-settings',
    children: <AccountSettings />,
    icon: <SettingOutlined />
  }];

  return <Tabs
    defaultActiveKey="personal"
    items={tabParts}
  />
}

export default Settings;