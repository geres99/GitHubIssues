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

export default function App() {
  const [fontsLoaded] = useFonts({
    sourceSansProBold: sourceSansProBold,
    sourceSansProSemiBold: sourceSansProSemiBold,
    sourceSansProRegular: sourceSansProRegular,
  });

  return (
    <NavigationContainer>
      {fontsLoaded ? <MainNavigation /> : <AppLoading />}
    </NavigationContainer>
  );
}
