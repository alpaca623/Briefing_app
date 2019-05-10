import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";

const Container = styled.View``;
const TitleCover = styled.View`
  background-color: white;
  height: 70px;
  width: 100%;
  justify-content: center;
  padding: 15px 17px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #bdc3c7;
`;

const Title = styled.Text`
  font-size: 19px;
`;

const SearchNewsCard = ({ title, uri, navigation }) => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate("WebView", { uri: uri })}
  >
    <Container>
      <TitleCover>
        <Title>{title}</Title>
      </TitleCover>
    </Container>
  </TouchableWithoutFeedback>
);

export default withNavigation(SearchNewsCard);
