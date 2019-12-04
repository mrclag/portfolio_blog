import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Montserrat', 'Helvetica' !important;
  }

  .error {
    font-weight: 500;
    color: red;
  }
`;

export default GlobalStyle;
