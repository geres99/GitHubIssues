import StyledView from 'components/styles/StyledView/styles';
import React from 'react';
import Typography from '../Typography';
import { IconsProps } from './types';

const Icons: React.FC<IconsProps> = ({ items }) => (
  <>
    {items.map(({ items: icons }) => (
      <>
        <Typography>Icons:</Typography>
        <StyledView flexDirection='row'>
          {icons.map(({ name, icon: Icon }) => (
            <StyledView
              alignItems='center'
              p={20}
              flex={1}
              style={{ borderWidth: 1, borderColor: 'black' }}
              key={name}
            >
              <Icon height={40} width={40} fill='grey' />
              <Typography>{name}</Typography>
            </StyledView>
          ))}
        </StyledView>
      </>
    ))}
  </>
);

export default Icons;
