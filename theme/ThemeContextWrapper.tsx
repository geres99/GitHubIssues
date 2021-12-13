import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '.';

const ThemeWrapper: React.FC = ({ children }) => (
  <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
);

export default ThemeWrapper;
