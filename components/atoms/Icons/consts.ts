import { getAllIcons } from './utils';

const iconsContext = require.context(
  '../../../assets/svg/icons',
  true,
  /index.ts$/
);

export const allIcons = getAllIcons(iconsContext);
