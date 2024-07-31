import { MenuOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Content, Header } from 'antd/es/layout/layout';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate, useMatches, UIMatch } from 'react-router-dom';

import useLogOut from 'src/api/auth/hooks/useLogOut';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import logo from 'src/assets/images/logo.png';
import FloatingChatbot from 'src/components/chatbot/FloatingChatbot';
import { Route } from 'src/router/enums';

const PageWithNavigation: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'pageWithNavigation' });
  const navigate = useNavigate();
  const location = useLocation();
  const [hasBaseCv, setHasBaseCv] = useState(false);

  const { data: resumes, isFetched } = useGetResumes();
  const { logOut } = useLogOut();

  useEffect(() => {
    if (isFetched && !resumes?.length) {
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
        key: Route.RESUMES,
        onClick: () => navigate(Route.RESUMES),
        disabled: !hasBaseCv,
      },
      {
        label: t('coverLetters'),
        key: Route.COVER_LETTERS,
        disabled: !hasBaseCv,
        children: [
          {
            label: t('coverLetters'),
            key: 'coverLetters',
            onClick: () => navigate(Route.COVER_LETTERS),
          },
          {
            label: t('coverLetterWizard'),
            key: 'coverLetterWizard',
            onClick: () => navigate(Route.COVER_LETTER_QUESTIONNAIRE),
          },
        ],
      },
      {
        label: t('jobs'),
        key: Route.JOBS,
        onClick: () => navigate(Route.JOBS),
        disabled: !hasBaseCv,
      },
      {
        label: t('training'),
        key: Route.TRAINING_VIDEOS,
        disabled: !hasBaseCv,
        children: [
          {
            label: t('trainingVideos'),
            key: 'trainingVideos',
            onClick: () => navigate(Route.TRAINING_VIDEOS),
          },
          {
            label: t('trainingArticles'),
            key: Route.TRAINING_ARTICLES,
            onClick: () => navigate(Route.TRAINING_ARTICLES),
          },
        ],
      },
      {
        label: t('profile'),
        key: Route.PERSONAL_INFO,
        disabled: false,
        children: [
          {
            label: t('settings'),
            key: 'settings',
            onClick: () => navigate(Route.PERSONAL_INFO),
            disabled: !hasBaseCv,
          },
          {
            label: t('logOut'),
            key: 'logOut',
            onClick: logOut,
            disabled: false,
          },
        ],
      },
    ],
    [hasBaseCv, logOut, navigate, t],
  );

  type Handle = {
    crumb?: () => string;
  };
  const matches = useMatches() as UIMatch<unknown, Handle>[];

  const crumbs = matches
    .filter((match) => {
      return Boolean(match.handle?.crumb);
    })
    .map((match) => (match.handle?.crumb ? match.handle.crumb() : undefined));

  const breadCrumbItems: BreadcrumbItemType[] | undefined = crumbs.length
    ? crumbs.map((crumb) => ({
        key: crumb,
        title: crumb,
      }))
    : undefined;

  return (
    <Layout className="page-with-navigation-container">
      <Header className="navigation-bar">
        <div className="navigation-wrapper">
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
            selectedKeys={[location.pathname]}
            selectable={false}
            overflowedIndicator={<MenuOutlined />}
          />
        </div>
      </Header>
      <Layout className="layout-content">
        <Content className="page-content">
          {breadCrumbItems && (
            <Breadcrumb
              className={'breadcrumb-container'}
              items={breadCrumbItems}
            />
          )}
          <Outlet />
        </Content>
      </Layout>
      <FloatingChatbot />
    </Layout>
  );
};

export default PageWithNavigation;
