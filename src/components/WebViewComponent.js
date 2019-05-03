import React from "react";
import { WebView } from "react-native-webview";

class WebViewComponent extends React.Component {
  render() {
    return <WebView source={{ uri: this.props.navigation.getParam("uri") }} />;
  }
}

export default WebViewComponent;
