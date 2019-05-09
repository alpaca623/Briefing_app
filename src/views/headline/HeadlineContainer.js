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
    let articles, error;
    try {
      ({
        data: { articles }
      } = await requestData.headline(
        this.props.navigation.state.routeName,
        this.state.refreshing ? "1" : this.state.page
      ));
    } catch (e) {
      // error = "error!! email send please. alpaca023@gmail.com";
      console.warn("error", e);
    } finally {
      console.log(articles)
      this.setState({
        loading: false,
        refreshing: false,
        error,
        articles: this.state.refreshing
          ? articles
          : this.state.articles.concat(articles)
      });
    }
  };

  componentDidMount = () => {
    const {
      navigation: {
        state: { routeName }
      }
    } = this.props;
    this.getData();
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
