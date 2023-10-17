import { createBrowserRouter } from 'react-router-dom';

import '../pages/_tests/routes';
import '../pages/app/routes';

import { getRoutes } from './Register';

export default function getBrowerRouter() {
  return createBrowserRouter(getRoutes());
}
