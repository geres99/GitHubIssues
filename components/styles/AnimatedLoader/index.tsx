import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import {
  StyledAnimatedLoaderContentWrapper,
  StyledAnimatedLoaderSquare,
} from './styles';

const AnimatedLoader: React.FC = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 45,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 45,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

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
