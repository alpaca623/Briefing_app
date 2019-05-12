import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import SearchNewsCard from "../../components/SearchNewsCard";
import { FlatList } from "react-native-gesture-handler";

const Container = styled.View`
  height: 100%;
`;

const Header = styled.View`
  height: 7%;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #dcdde1;
`;

const SearchInput = styled.TextInput`
  width: 75%;
  height: 30px;
  margin-left: 20px;
  background-color: #ecf0f1;
  border-radius: 5px;
`;

const CancleBtn = styled.Text`
  margin-left: 10px;
  color: blue;
`;

const SearchNoticeContainer = styled.View`
  height: 93%;
  background-color: #f1f2f6;
  align-items: center;
  justify-content: center;
`;

const SearchResultContainer = styled.View`
  background-color: #f1f2f6;
`;

const SearchListHeader = styled.View`
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color:white;
  border-bottom-width:1px;
  border-bottom-color: #bdc3c7;
`;

const SearchListResult = styled.Text`
  font-size:17px;
  font-weight:500;
`;

const SearchNoticeText = styled.Text``;

function SearchPresenter({
  navigation,
  searchText,
  searchStart,
  searchResult,
  searchFlag,
  requestNextPage,
  totalResults
}) {
  let onEndReachedCalledDuringMomentum = true;
  return (
    <Container>
      <Header>
        <SearchInput
          returnKeyType={"search"}
          onChangeText={text => searchText(text)}
          onSubmitEditing={() => searchStart()}
          clearButtonMode={"while-editing"}
        />
        <CancleBtn onPress={() => navigation.goBack()}>Cancel</CancleBtn>
      </Header>
      <SearchResultContainer>
        {searchFlag ? (
          searchResult.length !== 0 ? (
            <React.Fragment>
              <SearchListHeader>
                <SearchListResult>검색결과 총 {totalResults} 개</SearchListResult>
              </SearchListHeader>
              <FlatList
                style={{ backgroundColor: "#f1f2f6" }}
                data={searchResult}
                renderItem={({ item }) => (
                  <SearchNewsCard
                    title={item.title}
                    uri={item.url}
                    urlToImage={item.urlToImage}
                    publishedAt={item.publishedAt}
                    description={item.description}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
                // keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.2}
                onEndReached={info => {
                  if (!onEndReachedCalledDuringMomentum) {
                    requestNextPage();
                    onEndReachedCalledDuringMomentum = true;
                  }
                }}
                onMomentumScrollBegin={() => {
                  onEndReachedCalledDuringMomentum = false;
                }}
              />
            </React.Fragment>
          ) : (
            <SearchNoticeContainer>
              <SearchNoticeText>검색결과가 없습니다</SearchNoticeText>
            </SearchNoticeContainer>
          )
        ) : (
          <SearchNoticeContainer>
            <SearchNoticeText>검색하세요!</SearchNoticeText>
          </SearchNoticeContainer>
        )}
      </SearchResultContainer>
    </Container>
  );
}

export default withNavigation(SearchPresenter);
