const process = require('process');

const {
  REACT_APP_API_BASE_URL,
  REACT_APP_ENVIRONMENT,
} = process.env;

export const API_BASE_URL = REACT_APP_API_BASE_URL || 'https://picsum.photos';
export const APP_ENVIRONMENT = REACT_APP_ENVIRONMENT || 'development';
