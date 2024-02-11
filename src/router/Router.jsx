import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/Layout';
import BridgePage from 'pages/BridgePage';
import TokensLayout from '../components/TokensLayout';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BridgePage />,
      },
      {
        element: <TokensLayout />,
        children: [
          {
            path: '/tokens/send',
            element: 'Hello send',
          },
          {
            path: '/tokens/swap',
            element: 'Hello swap',
          },
        ],
      },
    ],
  },
]);
