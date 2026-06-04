import { createBrowserRouter } from 'react-router-dom';

import { BlankPage } from '@pages/blank/BlankPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BlankPage />,
  },
]);
