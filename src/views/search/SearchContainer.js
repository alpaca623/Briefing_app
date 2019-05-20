import React from "react";
import SearchPresenter from "./SearchPresenter";

import { requestData } from "../../api/newsApi";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchText: "",
      articles: [],
      searchFlag: false,
      page: 1,
      pageSize: 15,
      onEndReached: false,
      totalResults: 0
    };
  }

  // 검색창 입력 처리
  searchText = text => {
    this.setState({
      searchText: text
    });
  };

  // 검색어 기반 검색 요청
  getData = async () => {
    // const viewName = this.props.navigation.getParam("name");
    let { articles, error, totalResults } = this.state;
    try {
      ({ data } = await requestData.headline(
        this.state.page,
        this.state.pageSize,
        this.state.searchText
      ));
      // 임시 방편으로..
      articles = data.articles;
      totalResults = data.totalResults;
    } catch (e) {
      this.setState({
        error: e
      });
    } finally {
      this.setState({
        articles: this.state.onEndReached
          ? this.state.articles.concat(articles)
          : articles,
        loading: false,
        onEndReached: false,
        searchFlag: true,
        totalResults
      });
    }
  };

  searchStart = () => {
    this.setState(
      {
        loading: true
      },
      this.getData
    );
  };

  // 페이지 위로 당길때 데이터 추가 요청
  requestNextPage = () => {
    this.setState(
      {
        page: this.state.page + 1,
        onEndReached: true
      },
      this.getData
    );
  };

  render() {
    const { loading, articles, totalResults } = this.state;
    return (
      <SearchPresenter
        searchText={this.searchText}
        searchStart={this.searchStart}
        searchFlag={this.state.searchFlag}
        requestNextPage={this.requestNextPage}
        totalResults={totalResults}
        searchResult={articles}
        loading={loading}
      />
    );
  }
}

export default SearchContainer;
