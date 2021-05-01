import { API_BASE_URL } from './env';

const root = API_BASE_URL;
const version = 'v2';
const BASE_URL_V2 = `${root}/${version}`;

const API_END_POINTS = {
  list: `${BASE_URL_V2}/list`,
};

export default API_END_POINTS;
