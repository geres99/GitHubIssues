/* eslint-disable @typescript-eslint/no-empty-interface */

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

import 'styled-components/native';
import { Theme } from './theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
