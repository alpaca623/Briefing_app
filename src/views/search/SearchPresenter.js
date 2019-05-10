import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import SearchNewsCard from "../../components/SearchNewsCard";

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

const SearchResultContainer = styled.ScrollView`
  background-color: #f1f2f6;
`;

const SearchNoticeText = styled.Text``;

function SearchPresenter({
  navigation,
  searchText,
  searchStart,
  searchResult,
  searchFlag
}) {
  console.log(searchResult);
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
      {searchFlag ? (
        searchResult.length !== 0 ? (
          <SearchResultContainer>
            {searchResult.map((item, index) => (
              <SearchNewsCard
                key={index}
                title={item.title}
                uri={item.url}
                description={item.description}
              />
            ))}
          </SearchResultContainer>
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
    </Container>
  );
}

export default withNavigation(SearchPresenter);
