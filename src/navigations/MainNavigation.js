import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HeadlineContainer from "../views/headline";

const MainNavigation = createAppContainer(
  createSwitchNavigator({
    Headline: {
      screen: HeadlineContainer
    }
  })
);

export default MainNavigation;
