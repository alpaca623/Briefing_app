import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  flex-direction: row;

  height: 120px;
  border-bottom-width: 1px;
  border-bottom-color: #bdc3c7;
`;

const ImageCover = styled.View`
  justify-content: center;
  align-items: center;
  width:23%;
  background-color:white;
  padding-left:10px;
`;

const NewsImg = styled.Image`
  width: 90px;
  height: 90px;
`;

const TitleCover = styled.View`
  background-color: white;
  width: 77%;
  justify-content: center;
  padding:0 20px 0 10px;
  /* padding: 15px 17px 10px; */
`;

const Title = styled.Text`
  font-size: 19px;
`;

const SearchNewsCard = ({ title, uri, navigation, urlToImage }) => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate("WebView", { uri: uri })}
  >
    <Container>
      <ImageCover>
        <NewsImg source={{ uri: urlToImage }} onError={error => {}} />
      </ImageCover>
      <TitleCover>
        <Title>{title}</Title>
      </TitleCover>
    </Container>
  </TouchableWithoutFeedback>
);

export default withNavigation(SearchNewsCard);
