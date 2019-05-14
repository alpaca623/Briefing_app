import React from "react";

import { FlatList } from "react-native";
import NewsCard from "../components/NewsCard";

const newsList = ({ item, index, separators }) => {
  return (
    <NewsCard
      key={index}
      title={item.title}
      uri={item.url}
      description={item.description}
      publishedAt={item.publishedAt}
      urlToImage={item.urlToImage}
    />
  );
};

class HeadlineComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let onEndReachedCalledDuringMomentum = true;
    const { articles, refreshChecking, refreshing, moreData } = this.props;
    return (
      <FlatList
        data={articles}
        renderItem={newsList}
        refreshing={refreshing}
        onRefresh={() => {
          refreshChecking();
        }}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.4}
        onEndReached={info => {
          if (!onEndReachedCalledDuringMomentum) {
            moreData();
            onEndReachedCalledDuringMomentum = true;
          }
        }}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
      />
    );
  }
}

export default HeadlineComponent;
