import React from "react";
import HeadlinePresenter from "./HeadlinePresenter";
import { requestData } from "../../api/newsApi";
import Loader from "../../components/Loader";
import { withNavigation } from "react-navigation";

class HeadlineContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    articles: [],
    page: 1,
    refreshing: false
  };

  getData = async () => {
    const { page, refreshing } = this.state;
    const {
      navigation: {
        state: { routeName }
      }
    } = this.props;
    let { articles, error } = this.state;
    try {
      ({
        data: { articles }
      } = await requestData.headline(routeName, refreshing ? "1" : page));
    } catch (e) {
      // error = "error!! email send please. alpaca023@gmail.com";
      console.warn("error", e);
    } finally {
      this.setState({
        loading: false,
        refreshing: false,
        error,
        articles: refreshing ? articles : this.state.articles.concat(articles)
      });
    }
  };

  componentDidMount = () => {
    this.state.refreshing ? "" : this.getData();
  };

  requestMoreData = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      this.getData
    );
  };

  refreshChecking = () => {
    this.setState(
      {
        refreshing: true
      },
      this.getData
    );
  };

  render() {
    const { articles, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <HeadlinePresenter
        articles={articles}
        moreData={this.requestMoreData}
        refreshChecking={this.refreshChecking}
        refreshing={this.state.refreshing}
        onRefresh={this.getData}
      />
    );
  }
}

export default withNavigation(HeadlineContainer);
