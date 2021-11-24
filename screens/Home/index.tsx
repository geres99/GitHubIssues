import React from "react";
import { View, Text } from "react-native";
import Typography from "../../components/atoms/Typography";
import StyledView from "../../components/styles/StyledView/styles";

const HomeScreen = () => (
  <View>
    <StyledView pt={20}>
      <Typography>Hello World!</Typography>
    </StyledView>
  </View>
);

export default HomeScreen;
