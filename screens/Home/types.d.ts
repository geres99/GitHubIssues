import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenNames } from 'setup/navigation/enums';
import { RootStackParamList } from 'setup/navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;
