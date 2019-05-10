import React from "react";
import { createStackNavigator } from "react-navigation";
import WebViewComponent from "../components/WebViewComponent";
import SearchContainer from "../views/search/SearchContainer";

const CreateStackNavigation = (screenObj, screenName, option) => {
  let navigationStack = {};
  navigationStack["" + screenName] = {
    screen: screenObj,
    navigationOptions: {
      ...option
    }
  };

  navigationStack["WebView"] = {
    screen: WebViewComponent,
    navigationOptions: {
      title: "Open WebView"
    }
  };

  navigationStack["Search"] = {
    screen: SearchContainer,
    navigationOptions: {
      title: "검색"
    }
  };
  return createStackNavigator(navigationStack);
};

export default CreateStackNavigation;
