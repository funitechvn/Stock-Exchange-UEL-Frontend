var lodash = require('lodash');

const base = {
  dateDisplay: 'MMMM D, YYYY',
  dateFormat: 'YYYY-MM-DD',
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
  lang: 'vn',
  logging: 'INFO' //level INFO/TRACE/DEBUG
}

const env = {
  development: {
    logging: 'DEBUG',
    apiBaseURL: 'https://stage.api.webdevstudios.org/api/v2',
    apiURL: 'http://api.diachido.info',
  },
  stage: {
    apiBaseURL: 'https://stage.api.webdevstudios.org/api/v2',
    apiURL: 'http://api.diachido.info',
  },
  production: {
    apiBaseURL: 'https://fese.api.webdevstudios.org',
    apiURL: 'https://fese.api.webdevstudios.org',
    socketServer: "https://fese.api.webdevstudios.org",
    allowedOrigins: "https://fese.api.webdevstudios.org"
  },
  onLocal: {
    apiBaseURL: 'http://localhost:1309',
    apiURL: 'http://localhost:1309',
    socketServer: "http://localhost:1309",
    allowedOrigins: "http://localhost:1309",
  }
}

const envConfig = lodash.get(process.env, 'REACT_APP_NODE_ENV', 'stage');

const configsExport = { ...base, ...env[envConfig] }
const isDebug = configsExport.logging === 'DEBUG' ? true : false;

export default {
  ...configsExport,
  isDebug
};

export const TITLE = "Cổng thông tin Hoạt động Đoàn - Hội UIT";
export const DESCRIPTION = "Cổng thông tin Hoạt động Đoàn - Hội UIT"
export const IMAGE = "https://hsvuit.org/images/homepage.JPG"