import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenNames } from 'setup/navigation/enums';
import { RootStackParamList } from 'setup/navigation/types';

type InformationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Welcome
>;
