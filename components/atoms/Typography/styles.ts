import styled from 'styled-components/native';
import { StyledTypographyProps } from './types';

const StyledText = styled.Text<StyledTypographyProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-family: ${({ fontFamily }) => fontFamily};
`;

export default StyledText;
