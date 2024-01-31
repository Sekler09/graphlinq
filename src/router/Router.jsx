import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/Layout';
import BridgePage from 'pages/BridgePage';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BridgePage />,
      },
    ],
  },
]);
