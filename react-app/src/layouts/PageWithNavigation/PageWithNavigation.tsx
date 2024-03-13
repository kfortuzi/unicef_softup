import {
  BarsOutlined,
  ContainerOutlined,
  LogoutOutlined,
  ProductOutlined,
  ReadOutlined,
  SettingOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import useLogOut from 'src/api/auth/hooks/useLogOut';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { Route } from 'src/router/enums';

import Footer from '../Footer/Footer';

const PageWithNavigation: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'pageWithNavigation' });
  const navigate = useNavigate();
  const location = useLocation();

  const { data: user } = useGetProfile();
  const { logOut } = useLogOut();

  useEffect(() => {
    if (location.pathname === Route.ROOT) {
      navigate(`${Route.ROOT}${Route.YOUTH_CAREER_ORIENTATION}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  const navigationItems: MenuProps['items'] = useMemo(
    () => [
      {
        label: t('youthCareerOrientation'),
        key: 'youthCareerOrientation',
        icon: <ProductOutlined />,
        onClick: () => navigate(Route.YOUTH_CAREER_ORIENTATION),
      },
      {
        label: t('resume'),
        key: 'resume',
        icon: <SolutionOutlined />,
        onClick: () => navigate(Route.RESUME),
      },
      {
        label: t('coverLetter'),
        key: 'coverLetter',
        icon: <ContainerOutlined />,
        onClick: () => navigate(Route.COVER_LETTERS),
      },
      {
        label: t('jobs'),
        key: 'jobs',
        icon: <BarsOutlined />,
        onClick: () => navigate(Route.JOBS),
      },
      {
        label: t('training'),
        key: 'training',
        icon: <ReadOutlined />,
        onClick: () => navigate(Route.TRAINING),
      },
      {
        label: `${user?.firstName || 'John'} ${user?.lastName || 'Doe'}`,
        key: 'profile-menu',
        icon: <UserOutlined />,
        children: [
          {
            label: t('settings'),
            key: 'settings',
            icon: <SettingOutlined />,
            onClick: () => navigate(Route.PERSONAL_INFO),
          },
          {
            label: t('logOut'),
            key: 'logOut',
            icon: <LogoutOutlined />,
            onClick: logOut,
          },
        ],
      },
    ],
    [logOut, navigate, t, user?.firstName, user?.lastName],
  );

  return (
    <Layout className="page-with-navigation-container">
      <Header className="navigation-bar">
        <Menu
          items={navigationItems}
          theme="dark"
          mode="horizontal"
          selectable={false}
        />
      </Header>
      <Layout className="page-content-and-footer">
        <Content className="page-content">
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default PageWithNavigation;
