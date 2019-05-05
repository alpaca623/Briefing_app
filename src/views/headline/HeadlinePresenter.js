import React, { Component } from "react";
import styled from "styled-components";
import { width, height } from "../../constants/Screen";
import NewsCard from "../../components/NewsCard";

const Container = styled.View``;

const HorizontalContainer = styled.ScrollView``;

const VerticalContainer = styled.ScrollView``;

const Section = styled.View`
  /* background-color: yellow; */
  width: ${width}px;
  /* height: ${height}px; */
`;

function HeadlinePresenter({ articles, navigation }) {
  return (
    <Container>
      <HorizontalContainer
        horizontal={true}
        pagingEnabled={true}
        scrollEventThrottle={1}
      >
        <Section>
          <VerticalContainer>
            {articles ? (
              articles.map((article, index) => (
                <NewsCard
                  key={index}
                  title={article.title}
                  uri={article.url}
                  description={article.description}
                  urlToImage={article.urlToImage}
                />
              ))
            ) : (
              <Title>business</Title>
            )}
          </VerticalContainer>
        </Section>
      </HorizontalContainer>
    </Container>
  );
}

export default HeadlinePresenter;
