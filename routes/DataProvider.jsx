import express from 'express';
import request from 'request';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match, createRoutes } from 'react-router';

import appRouter from '../client/Router';

const routes = createRoutes(appRouter());

class DataProvider extends Component {
  getChildContext() {
    const { data } = this.props;
    return { data };
  }
  render() {
    return <RouterContext {...this.props}/>;
  }
}

DataProvider.propTypes = {
  data: PropTypes.object
};

DataProvider.childContextTypes = {
  data: PropTypes.object
};

export default DataProvider;
