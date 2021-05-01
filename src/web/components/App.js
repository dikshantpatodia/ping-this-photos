import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { openRoutes } from 'src/web/routes';
import { ERROR_ROUTES } from 'src/web/routes/componentRoutes';
import Homepage from 'src/web/components/Homepage';
import Navbar from 'src/web/components/common/Navbar';
import AppWrapper from './templates/AppWrapper';
import theme from '../theme';

const App = ({
  location,
  history,
}) => (
  <ThemeProvider theme={{ ...theme.default }}>
    <Navbar />
    <Switch location={location} history={history}>
      <AppWrapper>
        <Route
          exact={true}
          path={openRoutes.root}
          component={Homepage}
        />
      </AppWrapper>
      <Route component={ERROR_ROUTES.pageNotFound.component} />
    </Switch>
  </ThemeProvider>
);

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(App);
