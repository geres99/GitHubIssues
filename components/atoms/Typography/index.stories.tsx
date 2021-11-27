import React from 'react';
import { View } from 'react-native';
import { Meta, Story } from '@storybook/react/types-6-0';
import Typography from '.';
import StyledView from '../../styles/StyledView/styles';

const typographyStoriesMeta: Meta = {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    text: {
      name: 'Text',
      control: {
        type: 'text',
      },
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
};

export default typographyStoriesMeta;

const TypographyText: React.FC<{
  text: string;
  variant?: 'h4Bold' | 'h4' | 'h4Light';
}> = ({ text, variant }) => <Typography {...{ variant }}>{text}</Typography>;

export const Base: Story<{ text: string }> = (args) => (
  <View>
    <StyledView pt={20}>
      <TypographyText text='h4 Bold' variant='h4Bold' />
      <TypographyText {...args} variant='h4Bold' />
    </StyledView>
    <StyledView pt={20}>
      <TypographyText text='h4 Regular' variant='h4' />
      <TypographyText {...args} variant='h4' />
    </StyledView>
    <StyledView pt={20}>
      <TypographyText text='h4 Light' variant='h4Light' />
      <TypographyText {...args} variant='h4Light' />
    </StyledView>
  </View>
);
