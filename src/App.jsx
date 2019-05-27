import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// Theme
// TODO: this is borrowed from 
// https://github.com/devias-io/react-material-dashboard
import theme from './theme';

import Routes from './Routes';

// Browser History
const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    )
  }
}


