import React, { Component } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { width, height } from "../../constants/Screen";
import NewsCard from "../../components/NewsCard";
import { withNavigation } from "react-navigation";

const Container = styled.View``;

const HorizontalContainer = styled.ScrollView``;

// const VerticalContainer = styled.FlatList``;

const Section = styled.View`
  /* background-color: yellow; */
  width: ${width}px;
  /* height: ${height}px; */
`;

const newsList = ({ item, index, separators }) => {
  return (
    <NewsCard
      key={index}
      title={item.title}
      uri={item.url}
      description={item.description}
      urlToImage={item.urlToImage}
    />
  );
};

function HeadlinePresenter({
  articles,
  navigation,
  moreData,
  refreshChecking,
  refreshing
}) {
  let onEndReachedCalledDuringMomentum = true;
  return (
    <Container>
      <HorizontalContainer
        horizontal={true}
        pagingEnabled={true}
        scrollEventThrottle={1}
        // onScrollBeginDrag={() => navigation.navigate("general")}
      >
        <Section>
          <FlatList
            data={articles}
            renderItem={newsList}
            refreshing={refreshing}
            onRefresh={() => {
              refreshChecking();
            }}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.2}
            onEndReached={info => {
              if(!onEndReachedCalledDuringMomentum){
                moreData();
                onEndReachedCalledDuringMomentum = true;
              }
            }}
            onMomentumScrollBegin={() => {
              onEndReachedCalledDuringMomentum = false;
            }}
          />
        </Section>
      </HorizontalContainer>
    </Container>
  );
}

export default withNavigation(HeadlinePresenter);
