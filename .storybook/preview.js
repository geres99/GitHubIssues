import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Fonts from "./fonts";
import ThemeWrapper from "../theme/ThemeContextWrapper";
import StyledView from "components/styles/StyledView/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "grey",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone6",
  },
  layout: "fullscreen",
};

export const decorators = [
  (StoryContent) => (
    <ThemeWrapper>
      <Fonts />
      <StyledView p={16}>
        <StoryContent />
      </StyledView>
    </ThemeWrapper>
  ),
];
