import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { TouchableWithoutFeedback } from "react-native";

import { reduceDescription } from "../util/StringUtil";
import NewsImage from "./NewsImage";
import { NavigationActions, withNavigation } from "react-navigation";

import { convertDate } from "../util/StringUtil";

const Container = styled.View`
  /* border: 1px solid black; */
  background-color: white;
  box-shadow: 0 1px 3px #bdc3c7;
  justify-content: center;
  /* align-items:center; */
  margin: 0 0 13px;
`;

const TitleCover = styled.View`
  /* width: 80%; */
  justify-content: center;
  margin: 15px 17px 10px;
`;
const DescriptionCover = styled.View`
  /* width: 80%; */
  justify-content: center;
  margin: 10px 17px;
`;

const DateBoxCover = styled.View`
  justify-content: center;
  margin-left: 17px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 23px;
  font-weight: 600;
`;
const Desciption = styled.Text`
  font-size: 13px;
`;
const DateBox = styled.Text`
  color: #636e72;
`;

const NewsCard = ({
  title,
  urlToImage,
  description,
  uri,
  publishedAt,
  navigation
}) => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate("WebView", { uri: uri, title: title })}
  >
    <Container>
      <NewsImage urlToImage={urlToImage} />
      <TitleCover>
        <Title>{title}</Title>
      </TitleCover>
      <DescriptionCover>
        <Desciption>{reduceDescription(description, 100, 100)}</Desciption>
      </DescriptionCover>
      <DateBoxCover>
        <DateBox>{convertDate(publishedAt)}</DateBox>
      </DateBoxCover>
    </Container>
  </TouchableWithoutFeedback>
);

NewsCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string
};

export default withNavigation(NewsCard);
