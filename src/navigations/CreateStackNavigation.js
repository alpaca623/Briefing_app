import { createStackNavigator } from "react-navigation";
import WebViewComponent from "../components/WebViewComponent";

const CreateStackNavigation = (screenObj, screenName, option) => {
  let navigationStack = {};
  console.log(option);
  navigationStack["" + screenName] = {
    screen: screenObj,
    navigationOptions: option
  };

  navigationStack["WebView"] = {
    screen: WebViewComponent,
    navigationOptions: {
      title: "Open WebView"
    }
  };
  return createStackNavigator(navigationStack);
};

export default CreateStackNavigation;
