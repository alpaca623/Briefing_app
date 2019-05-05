import React from "react";
import styled from "styled-components";

const Container = styled.View``;

const ImageCover = styled.View`
  /* width: 80%; */
  justify-content: center;
`;

const NewsImg = styled.Image`
  /* width: 80%; */
  height: 200px;
`;

const classificationCoverImage = path => {
  let result = true;
  switch (path) {
    case "https://file.mk.co.kr/news/facebook_mknews.jpg":
      result = false;
      break;
    case "https://img.hankyung.com/img/hk_news.png":
      result = false;
      break;
  }
  return result;
};

const NewsImage = ({ urlToImage }) =>
  classificationCoverImage(urlToImage) ? (
    <Container>
      <ImageCover>
        <NewsImg source={{ uri: urlToImage }} onError={error => {}} />
      </ImageCover>
    </Container>
  ) : null;

export default NewsImage;
