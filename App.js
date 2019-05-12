/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import MainNavigation from "./src/navigations/MainNavigation";
import './src/util/initFunction';

export default class App extends Component {
  render() {
    // return <WebView source={{uri:"https://www.google.com"}} />
    return <MainNavigation />
  }
}
