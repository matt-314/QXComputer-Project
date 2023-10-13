import React from 'react';

import App from '../App';

import { registerRoute } from '../../../routes/Register';
import Home from '../home/Home';

registerRoute({
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />,
    },
  ],
});
