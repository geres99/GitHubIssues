import { ListRenderItemInfo } from 'react-native';
import { ItemsProps } from 'screens/Home/types';
import { ScreenNames } from './enums';

export interface RootStackParamList {
  [ScreenNames.Welcome]: undefined;
  [ScreenNames.Home]: undefined;
  [ScreenNames.Information]: { information: ListRenderItemInfo<ItemsProps> };
}
