import React from "react";
import SearchPresenter from "./SearchPresenter";

import { requestData } from "../../api/newsApi";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchText: "",
      articles: null
    };
  }

  searchText = text => {
    this.setState({
      searchText: text
    });
  };

  searchStart = async () => {
    const viewName = this.props.navigation.getParam("name");
    let article, loading;
    try {
      this.setState({
        loading: true
      })(
        ({
          data: { articles }
        } = await requestData.headline(viewName, 1, this.state.searchText))
      );
    } catch (e) {
      this.setState({
        error: e
      });
    } finally {
      this.setState({
        loading: false,
        articles
      });
    }
  };

  render() {
    const { loading, articles } = this.state;
    return loading ? (
      <SearchPresenter />
    ) : (
      <SearchPresenter
        searchText={this.searchText}
        searchStart={this.searchStart}
        searchResult={articles}
      />
    );
  }
}

export default SearchContainer;
