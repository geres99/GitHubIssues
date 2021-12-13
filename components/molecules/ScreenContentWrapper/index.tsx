import React from 'react';
import StyledView from 'components/styles/StyledView/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledScreenContentWrapper } from './styles';
import { ScreenContentWrapperProps } from './types';

const ScreenContentWrapper: React.FC<ScreenContentWrapperProps> = ({
  areItemsCentered,
  children,
}) => {
  const { top } = useSafeAreaInsets();

  return (
    <StyledScreenContentWrapper
      {...{ areItemsCentered }}
      testID='ScreenContentWrapper'
    >
      <StyledView pt={top}>{children}</StyledView>
    </StyledScreenContentWrapper>
  );
};

export default ScreenContentWrapper;
