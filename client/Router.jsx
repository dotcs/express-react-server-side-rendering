import React from 'react';
import { Router, browserHistory, Route } from 'react-router';

import AppRoot from './AppRoot';
import Home from './components/Home';
import List from './components/List';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppRoot}>
        <Route path="/home" component={Home}/>
        <Route path="/list" component={List}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
