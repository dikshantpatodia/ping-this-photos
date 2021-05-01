import PageNotFound from 'src/web/components/common/error';
import { errorRoutes } from './index';

export const ERROR_ROUTES = {
  pageNotFound: {
    path: errorRoutes.pageNotFound,
    component: PageNotFound,
  },
};
