import React from 'react';
import { LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home';
import WelcomeScreen from 'screens/Welcome';
import { ScreenNames } from './enums';
import InformationScreen from 'screens/Information';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

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
        options={{
          title: 'Additional Information',
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
