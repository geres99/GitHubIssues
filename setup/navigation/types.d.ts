import { ScreenNames } from './enums';

export interface RootStackParamList {
  [ScreenNames.Welcome]: undefined;
  [ScreenNames.Home]: undefined;
  [ScreenNames.Information]: { information: any };
}
