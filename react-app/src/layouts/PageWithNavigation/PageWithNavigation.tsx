import {
  BarsOutlined,
  ContainerOutlined,
  LogoutOutlined,
  ReadOutlined,
  SettingOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import useLogOut from 'src/api/auth/hooks/useLogOut';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import logo from 'src/assets/images/logo.png';
import { Route } from 'src/router/enums';

import Footer from '../Footer/Footer';

const PageWithNavigation: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'pageWithNavigation' });
  const navigate = useNavigate();
  const location = useLocation();
  const [hasBaseCv, setHasBaseCv] = useState(false);

  const { data: user } = useGetProfile();
  const { data: resumes, isFetched } = useGetResumes();
  const { logOut } = useLogOut();

  useEffect(() => {
    if (isFetched && !resumes) {
      navigate(Route.RESUME_QUESTIONNAIRE, { replace: true });
      setHasBaseCv(false);
    } else {
      setHasBaseCv(true);
    }
    if (location.pathname === Route.ROOT) {
      navigate(`${Route.ROOT}${Route.HOME}`, { replace: true });
    }
  }, [isFetched, location.pathname, navigate, resumes]);

  const navigationItems: MenuProps['items'] = useMemo(
    () => [
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
        children: [
          {
            label: t('trainingVideos'),
            key: 'trainingVideos',
            onClick: () => navigate(Route.TRAINING_VIDEOS),
          },
          {
            label: t('trainingArticles'),
            key: 'trainingArticles',
            onClick: () => navigate(Route.TRAINING_ARTICLES),
          },
        ],
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
        <img
          onClick={() => hasBaseCv && navigate(Route.HOME)}
          className="logo"
          src={logo}
        />
        <Menu
          className="navigation-menu"
          items={navigationItems}
          theme="dark"
          mode="horizontal"
          selectable={false}
          disabled={!hasBaseCv}
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
