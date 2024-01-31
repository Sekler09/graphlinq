import { createGlobalStyle } from 'styled-components';

import Gilroy from 'assets/fonts/Gilroy-Semibold.woff2';
import BackgroundImage from 'assets/images/bg.png';

export default createGlobalStyle`
  @font-face {
    font-family: Gilroy-SemiBold;
    src: url(${Gilroy});
  }


  body {
    place-items: baseline;
    background: url(${BackgroundImage});
    background-blend-mode: saturation, normal;
  }

  * {
	  padding: 0;
	  margin: 0;
	  border: none;
    font-family: Gilroy-SemiBold, sans-serif;
  }

  *,
  *::before,
  *::after {
	  box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
  }

  aside, nav, footer, header, section, main {
	  display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
	  font-weight: inherit;
  }

  ul, ul li {
	  list-style: none;
  }

  img, svg {
	  height: auto;
  }

  *:active,
  *:hover,
  *:focus {
    outline: none;
  }
`;
