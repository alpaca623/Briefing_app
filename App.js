/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import styled from 'styled-components';
import MainNavigation from "./src/navigations/MainNavigation";
// import WebView from 'react-native-webview';

export default class App extends Component {
  render() {
    // return <WebView source={{uri:"https://www.google.com"}} />
    return <MainNavigation />
  }
}
