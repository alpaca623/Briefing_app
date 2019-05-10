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
      articles: null,
      searchFlag: false
    };
  }

  searchText = text => {
    this.setState({
      searchText: text
    });
  };

  searchStart = async () => {
    const viewName = this.props.navigation.getParam("name");
    try {
      this.setState({
        loading: true
      });
      ({
        data: { articles }
      } = await requestData.headline(viewName, 1, this.state.searchText));
    } catch (e) {
      this.setState({
        error: e
      });
    } finally {
      this.setState({
        loading: false,
        articles,
        searchFlag: true
      });
    }
  };

  render() {
    const { loading, articles } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <SearchPresenter
        searchText={this.searchText}
        searchStart={this.searchStart}
        searchResult={articles}
        searchFlag={this.state.searchFlag}
      />
    );
  }
}

export default SearchContainer;
