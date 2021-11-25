import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
      font-family: 'sourceSansProBold';
      src: url("/fonts/SourceSansPro-Bold.ttf");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
    font-family: 'sourceSansProSemiBold';
    src: url("/fonts/SourceSansPro-SemiBold.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
      font-family: 'sourceSansProRegular';
      src: url("/fonts/SourceSansPro-Regular.ttf");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
`;
