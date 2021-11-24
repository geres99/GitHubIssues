import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
      font-family: 'sourceSansProBold';
      src: url("/fonts/sourcesanspro-bold.ttf");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
    font-family: 'sourceSansProSemiBold';
    src: url("/fonts/sourcesanspro-semibold.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
      font-family: 'sourceSansProRegular';
      src: url("/fonts/sourcesanspro-regular.ttf");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
`;
