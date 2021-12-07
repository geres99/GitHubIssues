import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {
  sourceSansProBold,
  sourceSansProRegular,
  sourceSansProSemiBold,
} from './assets/fonts/index';
import MainNavigation from './setup/navigation';
import UserContextWrapper from 'contexts/UserContext/UserContextWrapper';
import ThemeWrapper from 'theme/ThemeContextWrapper';

export default function App() {
  const [fontsLoaded] = useFonts({
    sourceSansProBold: sourceSansProBold,
    sourceSansProSemiBold: sourceSansProSemiBold,
    sourceSansProRegular: sourceSansProRegular,
  });

  return (
    <UserContextWrapper>
      <ThemeWrapper>
        <NavigationContainer>
          {fontsLoaded ? <MainNavigation /> : <AppLoading />}
        </NavigationContainer>
      </ThemeWrapper>
    </UserContextWrapper>
  );
}
