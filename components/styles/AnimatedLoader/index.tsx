import React from 'react';
import { Animated } from 'react-native';
import useAnimatedLoader from './hooks';
import {
  StyledAnimatedLoaderContentWrapper,
  StyledAnimatedLoaderSquare,
} from './styles';

const AnimatedLoader: React.FC = () => {
  const { translateX, translateY } = useAnimatedLoader();

  return (
    <StyledAnimatedLoaderContentWrapper>
      <StyledAnimatedLoaderSquare
        as={Animated.View}
        style={{ transform: [{ translateX }, { translateY }] }}
      />
    </StyledAnimatedLoaderContentWrapper>
  );
};

export default AnimatedLoader;
