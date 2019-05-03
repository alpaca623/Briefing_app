import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HeadlineContainer from "../views/headline";
import CreateStackNavigation from "./CreateStackNavigation";

const MainNavigation = createAppContainer(
  createSwitchNavigator({
    Headline: {
      screen: CreateStackNavigation(HeadlineContainer, "Headline", {
        title: "이시각 헤드라인"
      })
    }
  })
);

export default MainNavigation;
