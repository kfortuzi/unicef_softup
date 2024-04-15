import devConfig from './development.json';
import prodConfig from './production.json';

const config = {
  API_BASE_URL: import.meta.env.MODE === 'development' ? devConfig.apiBaseUrl : prodConfig.apiBaseUrl,
};

export default config;
