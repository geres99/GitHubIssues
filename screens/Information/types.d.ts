import { RouteProp } from '@react-navigation/native';

export interface InformationScreenItemProps {
  id: number;
  title: string;
  state: string;
  body: string;
}

export interface InformationScreenInformationProps {
  item: InformationScreenItemProps;
}

export interface InformationScreenParamsProps {
  information: InformationScreenInformationProps;
}

export interface InformationScreenProps {
  route: RouteProp;
}
