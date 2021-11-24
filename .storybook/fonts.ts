import { createGlobalStyle } from "styled-components";
import { makeStorybookAssetUrl } from "../utils/storybook";

export default createGlobalStyle`
  @font-face {
      font-family: 'sourceSansProBold';
      src: url(${makeStorybookAssetUrl("/fonts/SourceSansPro-Bold.ttf")});
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
    font-family: 'sourceSansProSemiBold';
    src: url(${makeStorybookAssetUrl("/fonts/SourceSansPro-SemiBold.ttf")});
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
      font-family: 'sourceSansProRegular';
      src: url(${makeStorybookAssetUrl("/fonts/SourceSansPro-Regular.ttf")});
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
`;
