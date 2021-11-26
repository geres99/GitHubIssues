export interface IconItem {
  name: string;
  icon: SvgComponentType;
}

export interface IconsCategoryItem {
  items: IconItem[];
}

export interface IconsProps {
  items: IconsCategoryItem[];
}
