import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Typography from ".";

const typographyStoriesMeta: Meta = {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    text: {
      name: "Text",
      control: {
        type: "text",
      },
      defaultValue: "Hello World!",
    },
  },
};

export default typographyStoriesMeta;

const TypographyText: React.FC<{ text: string }> = ({ text }) => (
  <Typography variant="h4Bold">{text}</Typography>
);

export const Base: Story<{ text: string }> = (args) => (
  <TypographyText {...args} />
);
