import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import HeadlineContainer from "../views/headline";
import CreateStackNavigation from "./CreateStackNavigation";
// import LoadIcon from "../components/LoadIcon";

const MainNavigation = createAppContainer(
  createBottomTabNavigator(
    {
      Business: {
        screen: CreateStackNavigation(HeadlineContainer, "business", {
          title: "경제"
        })
      },
      General: {
        screen: CreateStackNavigation(HeadlineContainer, "general", {
          title: "종합"
        })
      },
      Science: {
        screen: CreateStackNavigation(HeadlineContainer, "science", {
          title: "과학"
        })
      },
      Technology: {
        screen: CreateStackNavigation(HeadlineContainer, "technology", {
          title: "기술"
        })
      },
      Sport: {
        screen: CreateStackNavigation(HeadlineContainer, "sport", {
          title: "스포츠"
        })
      },
      Entertainment: {
        screen: CreateStackNavigation(HeadlineContainer, "entertainment", {
          title: "연예"
        })
      }
    },
    {
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
      initialRouteName: "Business",
      tabBarOptions: {
        // showIcon: true
      }
    }
  )
);

export default MainNavigation;
