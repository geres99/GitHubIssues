import React from 'react';
import StyledImage from './styles';
import { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({ source, size }) => (
  <StyledImage {...{ source, size }} testID='avatar' />
);

export default Avatar;
