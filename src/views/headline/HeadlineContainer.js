import React from "react";
import { AsyncStorage } from "react-native";
import HeadlinePresenter from "./HeadlinePresenter";
import { requestData } from "../../api/newsApi";
import { extraData } from "../../sample/total";
import Loader from "../../components/Loader";

class HeadlineContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    articles: null
  };

  requestCategory = async category => {
    let articles, error;
    try {
      // ({ articles } = await extraData[category]);
      ({data : {articles}} = await requestData.headline(category));
      // ({
      //   data: { articles }
      // } = await JSON.stringify(requestData.headline(category)));

      // AsyncStorage.setItem('articles', await requestData.headline(category)))
    } catch (e) {
      // error = "error!! email send please. alpaca023@gmail.com";
      console.log("error", e);
    } finally {
      this.setState({
        loading: false,
        error,
        articles
      });
    }
  };

  componentDidMount = () => {
    const {
      navigation: {
        state: { routeName }
      }
    } = this.props;
    this.requestCategory(routeName);
  };

  render() {
    const { articles, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <HeadlinePresenter
        articles={articles}
        requestCategory={this.requestCategory}
      />
    );
  }
}

export default HeadlineContainer;
