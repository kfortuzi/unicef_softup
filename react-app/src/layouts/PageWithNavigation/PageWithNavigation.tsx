import { BookOutlined, HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { CheckboxOptionType, Flex, Image, Layout, Menu, MenuProps, Radio } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import useLogOut from 'src/api/auth/hooks/useLogOut';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { Entity } from 'src/components/acl/enums';
import changeLanguage from 'src/helpers/changeLanguage';
import { Locale } from 'src/locales';
import { Route } from 'src/router/enums';
import getAccessibleRoutes from 'src/router/helpers/getAccessibleRoutes';

const PageWithNavigation: React.FC = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'pageWithNavigation' });
  const navigate = useNavigate();
  const location = useLocation();

  const { data: user } = useGetProfile();
  const { logOut } = useLogOut();

  useEffect(() => {
    if (location.pathname === Route.ROOT) {
      navigate(`${Route.ROOT}${Route.HOME}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  const accessibleRoutes = getAccessibleRoutes(user?.role);

  const navigationItems: MenuProps['items'] = useMemo(
    () => [
      {
        label: t('home'),
        key: 'home',
        icon: <HomeOutlined />,
        onClick: () => navigate(Route.HOME),
      },
      accessibleRoutes[Entity.ARTICLES]
        ? {
            label: t('articles'),
            key: 'articles',
            icon: <BookOutlined />,
            onClick: () => navigate(Route.ARTICLES),
          }
        : null,
      {
        label: `${user?.firstName} ${user?.lastName}`,
        key: 'profile-menu',
        icon: <UserOutlined />,
        children: [
          {
            label: t('profile'),
            key: 'profile',
            icon: <ProfileOutlined />,
            disabled: true,
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
    [accessibleRoutes, logOut, navigate, t, user],
  );

  const languageOptions: CheckboxOptionType[] = [
    {
      label: t('en'),
      value: Locale.ENGLISH,
    },
    {
      label: t('sq'),
      value: Locale.ALBANIAN,
    },
  ];

  return (
    <Layout className="page-with-navigation-container">
      <Header className="navigation-bar">
        <Flex align="center">
          <Image
            className="logo"
            src="/softup.png"
            preview={false}
          />
        </Flex>
        <Menu
          items={navigationItems}
          theme="dark"
          mode="horizontal"
          selectable={false}
          disabledOverflow
        />
        <Flex align="center">
          <Radio.Group
            options={languageOptions}
            className="language-selector"
            onChange={({ target: { value } }) => changeLanguage(value)}
            value={i18n.language}
            optionType="button"
            buttonStyle="solid"
            size="small"
          />
        </Flex>
      </Header>
      <Content className="page-content">
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>{t('footerText')}</Footer>
    </Layout>
  );
};

export default PageWithNavigation;
