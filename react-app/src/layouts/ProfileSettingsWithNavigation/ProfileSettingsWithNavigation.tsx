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
      navigate(`${Route.ROOT}${Route.YOUTH_CAREER_ORIENTATION}`, { replace: true });
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
        onClick: () => navigate(Route.RESUME),
      },
      {
        label: t('resetPasswordButtonText'),
        key: 'resetPassword',
        icon: <ContainerOutlined />,
        onClick: () => navigate(Route.COVER_LETTER),
      },
      {
        label: t('myResumeButtonText'),
        key: 'myResume',
        icon: <BarsOutlined />,
        onClick: () => navigate(Route.JOBS),
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
      <Layout className="page-content-and-footer">
        <Content className="page-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfileSettingsWithNavigation;
