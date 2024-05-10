import { Layout, Menu, MenuProps } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Route } from 'src/router/enums';

const ProfileSettingsWithNavigation: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile' });
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems: MenuProps['items'] = useMemo(
    () => [
      {
        label: t('personalInfoButtonText'),
        key: Route.PERSONAL_INFO,
        onClick: () => navigate(Route.PERSONAL_INFO),
      },
      {
        label: t('skillsAndHobbiesButtonText'),
        key: Route.SKILLS_AND_HOBBIES,
        onClick: () => navigate(Route.SKILLS_AND_HOBBIES),
      },
      {
        label: t('changePasswordButtonText'),
        key: Route.CHANGE_PASSWORD,
        onClick: () => navigate(Route.CHANGE_PASSWORD),
      },
      {
        label: t('myResumeButtonText'),
        key: Route.MY_RESUME,
        onClick: () => navigate(Route.MY_RESUME),
      },
    ],
    [navigate, t],
  );

  return (
    <Layout
      hasSider
      className="profile-page-with-navigation-container"
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        zeroWidthTriggerStyle={{ color: 'black' }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          theme="dark"
          items={navigationItems}
          selectedKeys={[location.pathname]}
          className="profile-settings-navigation-menu"
        />
      </Sider>
      <Layout className="layout-content">
        <Content className="page-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfileSettingsWithNavigation;
