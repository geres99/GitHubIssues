import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home';
import WelcomeScreen from 'screens/Welcome';
import { ScreenNames } from './enums';
import InformationScreen from 'screens/Information';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={ScreenNames.Welcome}>
      <Stack.Screen
        name={ScreenNames.Welcome}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.Information}
        component={InformationScreen}
        options={{ title: 'Additional Information' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
