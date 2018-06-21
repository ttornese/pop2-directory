import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ol,
    ul,
    p,
    figure,
    menu {
      margin: 0;
      padding: 0;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
