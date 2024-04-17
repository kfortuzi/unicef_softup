import { BarsOutlined, ContainerOutlined, ProductOutlined, SolutionOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Route } from 'src/router/enums';

const ProfileSettingsWithNavigation: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile' });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === Route.ROOT) {
      navigate(`${Route.ROOT}${Route.HOME}`, { replace: true });
    }

    if (location.pathname === `${Route.ROOT}${Route.PROFILE_SETTINGS}`) {
      navigate(Route.PERSONAL_INFO, { replace: true });
    }
  }, [location.pathname, navigate]);

  const navigationItems: MenuProps['items'] = useMemo(
    () => [
      {
        label: t('personalInfoButtonText'),
        key: 'personalInfo',
        icon: <ProductOutlined />,
        onClick: () => navigate(Route.PERSONAL_INFO),
      },
      {
        label: t('skillsAndHobbiesButtonText'),
        key: 'skillsAndHobbies',
        icon: <SolutionOutlined />,
        onClick: () => navigate(Route.SKILLS_AND_HOBBIES),
      },
      {
        label: t('changePasswordButtonText'),
        key: 'changePassword',
        icon: <ContainerOutlined />,
        onClick: () => navigate(Route.CHANGE_PASSWORD),
      },
      {
        label: t('myResumeButtonText'),
        key: 'myResume',
        icon: <BarsOutlined />,
        onClick: () => navigate(Route.MY_RESUME),
      },
    ],
    [navigate, t],
  );

  return (
    <Layout
      hasSider
      className="page-with-navigation-container"
    >
      <Sider style={{ height: '100vh' }}>
        <Menu
          theme="dark"
          mode="inline"
          style={{ marginTop: '5vh' }}
          items={navigationItems}
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
