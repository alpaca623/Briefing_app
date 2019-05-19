import React from "react";
import { WebView } from "react-native-webview";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import styled from "styled-components";

const BackBtn = styled.View`
  margin-left: 19px;
`;

const BackTitle = styled.Text`
  font-size:15px;
  color:blue;
`;

class WebViewComponent extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <BackBtn>
            <BackTitle>뒤로</BackTitle>
          </BackBtn>
        </TouchableWithoutFeedback>
      )
    };
  };
  render() {
    return <WebView source={{ uri: this.props.navigation.getParam("uri") }} />;
  }
}

export default WebViewComponent;
