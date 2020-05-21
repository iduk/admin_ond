import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
//
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
// Import Main styles for this application
import '../scss/style.scss';

// Containers
import Full from './containers/Full/';

// Store
import Store from './views/Store';

// Views
import Login from './views/Pages/Login/';
import Register from './views/Pages/Register/';
import Page404 from './views/Pages/Page404/';
import Page500 from './views/Pages/Page500/';

const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={history}>
    <Switch>
      <Route path='/' name='Home' component={Full} />
      {/* pages */}
      <Route exact path='/store' name='Store' component={Store} />
      {/* member */}
      <Route exact path='/login' name='Login Page' component={Login} />
      <Route exact path='/register' name='Register Page' component={Register} />
      <Route exact path='/404' name='Page 404' component={Page404} />
      <Route exact path='/500' name='Page 500' component={Page500} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
