import express from 'express';
import appRouter from '../client/Router';
import request from 'request';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match, createRoutes } from 'react-router';

import DataProvider from './DataProvider';

const expressRouter = express.Router();
const routes = createRoutes(appRouter());

expressRouter.get('/list', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      request('http://jsonplaceholder.typicode.com/users', (error, response, body) => {
        const data = { items: JSON.parse(body) };
        // Pass data to DataProvider component to make it available for other components
        // via react context.
        const content = renderToString(<DataProvider {...renderProps} data={data}/>);
        res.render('index', {
          title: 'User List (pre-rendered)',
          data, // second way to add data: inject into page as global varibale
          content
        });
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

expressRouter.get('*', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      if (req.url === '/') {
        res.redirect('/home');
      }
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {
        title: 'Page',
        data: false,
        content
      });
    } else {
      res.status(404).send('Not Found');
    }
  })
})

module.exports = expressRouter;
