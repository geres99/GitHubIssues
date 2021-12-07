import { typography } from './config/typography';
import { colors } from './config/colors';

const theme = {
  typography,
  colors,
};

export default theme;

export type Theme = typeof theme;
