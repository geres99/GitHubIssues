import { IconFood } from 'assets/svg/icons';
import React from 'react';
import { View } from 'react-native';
import Typography from '../../components/atoms/Typography';
import StyledView from '../../components/styles/StyledView/styles';

const HomeScreen = () => (
  <View>
    <StyledView pt={20}>
      <Typography>Hello World!</Typography>
      <IconFood fill='blue' height={60} width={60} />
    </StyledView>
  </View>
);

export default HomeScreen;
