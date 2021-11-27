import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  render,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';
import ThemeWrapper from 'theme/ThemeContextWrapper';

export const wrapper: React.FC = ({ children }) => (
  <NavigationContainer>
    <ThemeWrapper>{children}</ThemeWrapper>
  </NavigationContainer>
);

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions
): RenderAPI => render(ui, { ...{ wrapper }, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
