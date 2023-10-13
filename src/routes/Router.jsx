import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import AnchorTestPage from '../pages/_tests/Anchor/AnchorTestPage';
import ButtonTestPage from '../pages/_tests/Button/ButtonTestPage';
import CardTestPage from '../pages/_tests/Card/CardTestPage';
import TestPage from '../pages/_tests/TestPage';

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
