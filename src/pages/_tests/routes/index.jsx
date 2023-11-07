import React from 'react';

import AnchorTestPage from '../Anchor/AnchorTestPage';
import ButtonTestPage from '../Button/ButtonTestPage';
import CardTestPage from '../Card/CardTestPage';
import TestPage from '../TestPage';

import { registerRoute } from '../../../routes/Register';
import IconFactoryTestPage from '../IconFactory/IconFactoryTestPage';
import SpinnerTestPage from '../Spinner/SpinnerTestPage';

registerRoute({
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
    {
      path: 'Spinner',
      element: <SpinnerTestPage />,
    },
    {
      path: 'IconFactory',
      element: <IconFactoryTestPage />,
    },
  ],
});
