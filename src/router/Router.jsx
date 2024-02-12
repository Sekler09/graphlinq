import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/Layout';
import TokensLayout from 'components/TokensLayout';
import BridgePage from 'pages/BridgePage';
import SwapTokensPage from 'pages/SwapTokensPage';
import SendTokensPage from 'pages/SendTokensPage';

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
            element: <SwapTokensPage />,
          },
          {
            path: '/tokens/send',
            element: <SendTokensPage />,
          },
        ],
      },
    ],
  },
]);
