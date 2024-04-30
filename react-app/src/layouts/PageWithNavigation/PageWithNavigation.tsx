import {
  BarsOutlined,
  ContainerOutlined,
  LogoutOutlined,
  ReadOutlined,
  SettingOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Content, Header } from 'antd/es/layout/layout';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate, useMatches, UIMatch } from 'react-router-dom';

import useLogOut from 'src/api/auth/hooks/useLogOut';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import logo from 'src/assets/images/logo.png';
import { Route } from 'src/router/enums';

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
        label: t('resumes'),
        key: 'resumes',
        icon: <SolutionOutlined />,
        onClick: () => navigate(Route.RESUMES),
        disabled: !hasBaseCv,
      },
      {
        label: t('coverLetters'),
        key: 'coverLetter',
        icon: <ContainerOutlined />,
        disabled: !hasBaseCv,
        children: [
          {
            label: t('coverLetterWizard'),
            key: 'coverLetterWizard',
            onClick: () => navigate(Route.COVER_LETTER_QUESTIONNAIRE),
          },
          {
            label: t('coverLetters'),
            key: 'myCoverLetters',
            onClick: () => navigate(Route.COVER_LETTERS),
          }
        ],
      },
      {
        label: t('jobs'),
        key: 'jobs',
        icon: <BarsOutlined />,
        onClick: () => navigate(Route.JOBS),
        disabled: !hasBaseCv,
      },
      {
        label: t('training'),
        key: 'training',
        icon: <ReadOutlined />,
        disabled: !hasBaseCv,
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
        disabled: false,
        children: [
          {
            label: t('settings'),
            key: 'settings',
            icon: <SettingOutlined />,
            onClick: () => navigate(Route.PERSONAL_INFO),
            disabled: !hasBaseCv
          },
          {
            label: t('logOut'),
            key: 'logOut',
            icon: <LogoutOutlined />,
            onClick: logOut,
            disabled: false
          },
        ],
      },
    ],
    [hasBaseCv, logOut, navigate, t, user?.firstName, user?.lastName],
  );

  type Handle = {
    crumb?: () => string;
  };
  const matches = useMatches() as UIMatch<unknown, Handle>[];

  const crumbs = matches
    .filter((match) => {
      return Boolean(match.handle?.crumb);
    })
    .map((match) => match.handle?.crumb ? match.handle.crumb() : undefined);

  const breadCrumbItems: BreadcrumbItemType[] = crumbs.map((crumb) => ({
    key: crumb,
    title: crumb,
  }));

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
        />
      </Header>
      <Layout className="layout-content">
        <Content className="page-content">
          <Breadcrumb
            className={'breadcrumb-container'}
            items={breadCrumbItems}
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageWithNavigation;
