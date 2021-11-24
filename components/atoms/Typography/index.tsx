import React from "react";
import { Text } from "react-native";
import { typography } from "../../../theme/config/typography";
import { TypographyProps } from "./types";

const Typography: React.FC<TypographyProps> = ({
  variant = "h4",
  children,
}) => <Text style={{ ...typography[variant] }}>{children}</Text>;

export default Typography;
