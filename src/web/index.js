import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import configureWebFontService from './common/WebFontService';
import history from './history';

import './css/root.scss';
import './css/index.scss';
import App from './components/App';

function AppInitializer() {
  render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('root'),
  );
}

const main = () => {
  AppInitializer();
  configureWebFontService();
};

try {
  main();
  // eslint-disable-next-line no-console
  console.info('App initialized');
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Unable to initialize app. See following error', err);
}
