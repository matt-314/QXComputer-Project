import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import AnchorTestPage from '../_tests/AnchorTestPage';
import ButtonTestPage from '../_tests/ButtonTestPage';
import CardTestPage from '../_tests/Card/CardTestPage';
import TestPage from '../_tests/TestPage';

export default function getBrowerRouter() {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/_test',
      element: <TestPage />,
      children: [
        {
          path: 'Button',
          element: <ButtonTestPage />,
        },
        {
          path: 'Anchor',
          element: <AnchorTestPage />,
        },
        {
          path: 'Card',
          element: <CardTestPage />,
        },
      ],
    },
  ]);
}
