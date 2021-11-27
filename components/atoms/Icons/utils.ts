import { IconsCategoryItem } from './types';

export const getAllIcons = (
  context: __WebpackModuleApi.RequireContext
): IconsCategoryItem[] =>
  context.keys().map<IconsCategoryItem>((svgGroupPath) => {
    const svgsGroup: any = context(svgGroupPath);

    return {
      items: Object.entries(svgsGroup).map(([key, icon]) => ({
        name: key,
        icon,
      })),
    };
  });
