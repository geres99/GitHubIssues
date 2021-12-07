import React from 'react';
import StyledView from 'components/styles/StyledView/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledScreenContentWrapper } from './styles';

const ScreenContentWrapper: React.FC = ({ children }) => {
  const { top } = useSafeAreaInsets();

  return (
    <StyledScreenContentWrapper testID='ScreenContentWrapper'>
      <StyledView pt={top}>{children}</StyledView>
    </StyledScreenContentWrapper>
  );
};

export default ScreenContentWrapper;
