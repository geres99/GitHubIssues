import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenNames } from 'setup/navigation/enums';
import { RootStackParamList } from 'setup/navigation/types';

export interface UserProps {
  login: string;
  avatar_url: string;
}

export interface ItemsProps {
  title: string;
  user: UserProps;
  number: string;
}

export type DataProps = ItemsProps[];

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;
