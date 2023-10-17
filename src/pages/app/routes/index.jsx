import React from 'react';

import App from '../App';
import Detail from '../detail/Detail';
import Home from '../home/Home';

import { registerRoute } from '../../../routes/Register';

registerRoute({
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: ':categoryName',
      element: <Home />,
    },
    {
      path: 'item/:itemId',
      element: <Detail />,
    },
  ],
});
