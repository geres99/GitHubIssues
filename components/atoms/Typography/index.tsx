import React from 'react';
import { typography } from '../../../theme/config/typography';
import StyledText from './styles';
import { TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({
  variant = 'h4',
  children,
}) => <StyledText {...typography[variant]}>{children}</StyledText>;

export default Typography;
