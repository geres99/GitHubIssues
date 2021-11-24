import React from "react";
import { View } from "react-native";
import { Meta, Story } from "@storybook/react/types-6-0";
import Typography from ".";
import StyledView from "../../styles/StyledView/styles";
import { StyledBox } from "./styles";

const typographyStoriesMeta: Meta = {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    text: {
      name: "Text",
      control: {
        type: "text",
      },
      defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
};

export default typographyStoriesMeta;

const TypographyText: React.FC<{
  text: string;
  variant?: "h4Bold" | "h4" | "h4Light";
}> = ({ text, variant }) => <Typography {...{ variant }}>{text}</Typography>;

export const Base: Story<{ text: string }> = (args) => (
  <View>
    <TypographyText text="h4 Bold" variant="h4Bold" />
    <TypographyText {...args} variant="h4Bold" />
    <TypographyText text="h4 Regular" variant="h4" />
    <TypographyText {...args} variant="h4" />
    <TypographyText text="h4 Light" variant="h4Light" />
    <TypographyText {...args} variant="h4Light" />
    <StyledView />
  </View>
);
