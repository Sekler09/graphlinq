import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';
import Router from './router/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
