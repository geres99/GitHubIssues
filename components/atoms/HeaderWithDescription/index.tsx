import StyledView from 'components/styles/StyledView/styles';
import React from 'react';
import Typography from '../Typography';
import { HeaderWithDescriptionProps } from './types';

const HeaderWithDescription: React.FC<HeaderWithDescriptionProps> = ({
  header,
  description,
}) => (
  <>
    <Typography variant='h3Bold'>{header}</Typography>
    <StyledView pt={2}>
      <Typography>{description}</Typography>
    </StyledView>
  </>
);

export default HeaderWithDescription;
