import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App, ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import queryClient from './clients/reactQuery';
import i18n from './locales';
import Router from './router';
import theme from './theme.json';
import './styles/main.scss';
import 'video-react/dist/video-react.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={process.env.GOOGLE_OAUTH_CLIENT_ID as string}>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ConfigProvider theme={theme}>
          <App component={false}>
            <Router />
          </App>
        </ConfigProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </I18nextProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);
