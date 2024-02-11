import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/Layout';
import TokensLayout from 'components/TokensLayout';
import BridgePage from 'pages/BridgePage';
import TokensSwapPage from 'pages/TokensSwapPage';

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
            path: '/tokens/swap',
            element: <TokensSwapPage />,
          },
          {
            path: '/tokens/send',
            element: 'Hello send',
          },
        ],
      },
    ],
  },
]);
