import styled from 'styled-components/native';
import { StyledImageProps } from './types';

const StyledImage = styled.Image<StyledImageProps>`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
`;

export default StyledImage;
