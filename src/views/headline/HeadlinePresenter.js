import React, { Component } from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const Container = styled.View``;

const Title = styled.Text``;

function HeadlinePresenter({ navigation }) {
  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("WebView", { uri: "https://www.naver.com" })
        }
      >
        <Title>thank you react-native</Title>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default withNavigation(HeadlinePresenter);
