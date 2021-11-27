import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Icons from '.';
import { allIcons } from './consts';

const iconsStoriesMeta: Meta = {
  title: 'Atoms/Icons',
  component: Icons,
};

export default iconsStoriesMeta;

export const Base: Story = () => <Icons items={allIcons} />;
