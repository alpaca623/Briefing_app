import React from "react";
import { Platform } from "react-native";

import { Icon } from "react-native-elements";

export default ({ name, size, color, type }) => {
  return (
    <Icon
      // onPress={() => navigation.navigate(pageName)}
      name={`${Platform.OS === "ios" ? "ios-" : "md-"}${name}`}
      size={size}
      color={color}
      type={type}
    />
  );
};
