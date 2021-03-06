import React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import HeadlineContainer from "../views/headline";
import CreateStackNavigation from "./CreateStackNavigation";

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
        screen: CreateStackNavigation(HeadlineContainer, "all", {
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
      contentComponent: props => <CustomDrawerContentComponent props={props} />,
      contentOptions: {
        labelStyle: {
          fontWeight: "600"
        },
        itemStyle: {
          borderBottomWidth: 1,
          borderColor: "#ced6e0"
        },
        itemsContainerStyle: {
          paddingVertical: 0
          // backgroundColor:"red",
        },
        activeBackgroundColor: "#dcdde1",
        activeTintColor: "black",
      },
      initialRouteName: "All",
      tabBarOptions: {
        // showIcon: true
      }
    }
  )
);

export default MainNavigation;
