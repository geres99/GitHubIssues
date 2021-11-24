import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home";
import ThemeWrapper from "../../theme/ThemeContextWrapper";

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeWrapper>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ThemeWrapper>
  );
};

export default MainNavigation;
