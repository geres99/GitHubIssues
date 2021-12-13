import { ImageProps } from 'react-native';

export interface AvatarProps extends ImageProps {
  size: number;
}

export type StyledImageProps = Pick<AvatarProps, 'size'>;
