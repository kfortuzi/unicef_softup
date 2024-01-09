import devConfig from './development.json';
import prodConfig from './production.json';

const config = {
  API_BASE_URL: process.env.NODE_ENV === 'development' ? devConfig.apiBaseUrl : prodConfig.apiBaseUrl,
};

export default config;
