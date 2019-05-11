import React from "react";
import SearchPresenter from "./SearchPresenter";

import { requestData } from "../../api/newsApi";
import Loader from "../../components/Loader";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchText: "",
      articles: [],
      searchFlag: false,
      page: 1,
      pageSize: 20,
      onEndReached: false,
      totalResults: 0
    };
  }

  searchText = text => {
    this.setState({
      searchText: text
    });
  };

  getData = async () => {
    const viewName = this.props.navigation.getParam("name");
    let { articles, error, totalResults } = this.state;
    try {
      ({
        data: { articles },
        totalResults
      } = await requestData.headline(
        viewName,
        this.state.page,
        this.state.pageSize,
        this.state.searchText
      ));
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
    const { loading, articles } = this.state;
    console.log(articles);
    return loading ? (
      <Loader />
    ) : (
      <SearchPresenter
        searchText={this.searchText}
        searchStart={this.searchStart}
        searchResult={articles}
        searchFlag={this.state.searchFlag}
        requestNextPage={this.requestNextPage}
      />
    );
  }
}

export default SearchContainer;
