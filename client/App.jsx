import React from 'react';
import { render } from 'react-dom';

import AppRouter from './Router';

render(
  <AppRouter/>,
  document.querySelector('#app')
);
