import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import HeadlineContainer from "../views/headline";
import CreateStackNavigation from "./CreateStackNavigation";
import LoadIcon from "../components/LoadIcon";

import CustomDrawerContentComponent from "../components/CustomDrawerComponent";

const commonNavigationOptions = (label, iconName) => {
  return {
    drawerLabel: label
    // tabBarLabel: label,
    // tabBarIcon: ({ tintColor }) => (
    //   <LoadIcon name={iconName} type="ionicon" size={20} />
    // ),
  };
};

const MainNavigation = createAppContainer(
  createDrawerNavigator(
    {
      All: {
        screen: CreateStackNavigation(HeadlineContainer, "All", {
          title: "최신기사"
        }),
        navigationOptions: commonNavigationOptions("최신기사", "")
      },
      Business: {
        screen: CreateStackNavigation(HeadlineContainer, "business", {
          title: "경제"
        }),
        navigationOptions: commonNavigationOptions("경제", "business")
      },
      General: {
        screen: CreateStackNavigation(HeadlineContainer, "general", {
          title: "종합"
        }),
        navigationOptions: commonNavigationOptions("종합", "apps")
      },
      Science: {
        screen: CreateStackNavigation(HeadlineContainer, "science", {
          title: "과학"
        }),
        navigationOptions: commonNavigationOptions("과학", "flame")
      },
      Technology: {
        screen: CreateStackNavigation(HeadlineContainer, "technology", {
          title: "기술"
        }),
        navigationOptions: commonNavigationOptions("기술", "build")
      },
      Sport: {
        screen: CreateStackNavigation(HeadlineContainer, "sport", {
          title: "스포츠"
        }),
        navigationOptions: commonNavigationOptions("스포츠", "football")
      },
      Entertainment: {
        screen: CreateStackNavigation(HeadlineContainer, "entertainment", {
          title: "연예"
        }),
        navigationOptions: commonNavigationOptions("연예", "tv")
      }
    },
    {
      contentComponent: (props) => <CustomDrawerContentComponent props={props}/>,
      // drawerType: "front",
      // defaultNavigationOptions: ({ navigation }) => ({
      //   tabBarIcon: () => {
      //     let icon = "";
      //     const {
      //       state: { routeName }
      //     } = navigation;
      //     switch (routeName) {
      //       case "Business":
      //         icon = `business`;
      //         break;
      //       case "General":
      //         icon = `clipboard`;
      //         break;
      //       case "Science":
      //         icon = "magnet";
      //         break;
      //       case "Technology":
      //         icon = "book";
      //         break;
      //       case "Sport":
      //         icon = "basketball";
      //         break;
      //       case "Entertainment":
      //         icon = "cafe";
      //         break;
      //     }
      //     return LoadIcon(
      //       `${Platform === "ios" ? "ios" : "md"}-${icon}`,
      //       12,
      //       "black",
      //       navigation,
      //       routeName
      //     );
      //   }
      // }),
      initialRouteName: "All",
      tabBarOptions: {
        // showIcon: true
      }
    }
  )
);

export default MainNavigation;
