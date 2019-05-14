import React, { Component } from "react";

import styled from "styled-components";
import { width, height } from "../../constants/Screen";
import { withNavigation } from "react-navigation";
import HeadlineComponent from "../../components/HeadlineComponent";

const Container = styled.View``;

const HorizontalContainer = styled.ScrollView``;

// const VerticalContainer = styled.FlatList``;

const Section = styled.View`
  /* background-color: yellow; */
  width: ${width}px;
  /* height: ${height}px; */
`;

const Sample = styled.Text``;

function HeadlinePresenter({
  articles,
  moreData,
  refreshChecking,
  refreshing,
  slideViewName,
  navigation
}) {
  return (
    <Container>
      <HorizontalContainer
        horizontal={true}
        pagingEnabled={true}
        onMomentumScrollBegin={e => {
          e.persist();
          console.log(e);
        }}
        scrollEventThrottle={1}
        // onScrollBeginDrag={() => navigation.navigate("general")}
      >
        <Section name="business">
          <HeadlineComponent
            refreshChecking={refreshChecking}
            refreshing={refreshing}
            moreData={moreData}
            articles={articles}
          />
        </Section>
      </HorizontalContainer>
    </Container>
  );
}

export default withNavigation(HeadlinePresenter);
