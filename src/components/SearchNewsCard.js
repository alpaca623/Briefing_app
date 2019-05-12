import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import { convertDate } from "../util/StringUtil";

const Container = styled.View`
  flex-direction: row;
  height: 120px;
  border-bottom-width: 1px;
  border-bottom-color: #bdc3c7;
`;

const ImageCover = styled.View`
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: white;
  /* padding-left:15px; */
`;

const NewsImg = styled.Image`
  width: 85px;
  height: 85px;
`;

const ContentCover = styled.View`
  background-color: white;
  width: 70%;
  /* justify-content: center; */
  padding-top: 13px;
  padding-right: 20px;
  /* padding: 15px 17px 10px; */
`;

const DateCover = styled.View`
  margin-bottom: 3px;
`;

const Date = styled.Text`
  font-size: 13px;
  color: #636e72;
`;

const TitleCover = styled.View``;

const Title = styled.Text`
  font-size: 19px;
`;

const SearchNewsCard = ({
  title,
  uri,
  navigation,
  urlToImage,
  publishedAt
}) => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate("WebView", { uri: uri })}
  >
    <Container>
      <ImageCover>
        <NewsImg source={{ uri: urlToImage }} onError={error => {}} />
      </ImageCover>
      <ContentCover>
        <DateCover>
          <Date>{convertDate(publishedAt)}</Date>
        </DateCover>
        <TitleCover>
          <Title>{title}</Title>
        </TitleCover>
      </ContentCover>
    </Container>
  </TouchableWithoutFeedback>
);

export default withNavigation(SearchNewsCard);
