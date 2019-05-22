import React from "react";
import { createStackNavigator, withNavigation } from "react-navigation";
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
    screen: WebViewComponent
  };

  navigationStack["Search"] = {
    screen: SearchContainer,
    navigationOptions: {
      title: "검색",
      header: null
    }
  };
  return createStackNavigator(navigationStack);
};

export default CreateStackNavigation;
