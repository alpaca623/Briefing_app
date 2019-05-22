import React from "react";
import HeadlinePresenter from "./HeadlinePresenter";
import { requestData } from "../../api/newsApi";
import Loader from "../../components/Loader";
import { withNavigation } from "react-navigation";

import styled from "styled-components";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import LoadIcon from "../../components/LoadIcon";

const LeftContainer = styled.View`
  /* padding-left: 5px; */
  margin: 10px 15px 10px 24px;
`;

const RightContainer = styled.View`
  margin: 10px 24px 10px 15px;
`;

const HeaderText = styled.Text`
  color: blue;
`;

class HeadlineContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <LeftContainer>
            {/* <HeaderText>section</HeaderText> */}
            <LoadIcon name={"menu"} type="ionicon" size={24} />
          </LeftContainer>
        </TouchableWithoutFeedback>
      ),
      headerRight: (
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate("Search", { name: navigation.state.routeName })
          }
        >
          <RightContainer>
            <LoadIcon name={"search"} type="ionicon" size={20} />
          </RightContainer>
        </TouchableWithoutFeedback>
      )
    };
  };
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
    error: null,
    articles: [],
    page: 1,
    refreshing: false,
    menuChange: false
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
      } = await requestData.headline(
        refreshing ? "1" : page,
        "7",
        null,
        routeName
      ));
    } catch (e) {
      // error = "error!! email send please. alpaca023@gmail.com";
      console.warn("error", e);
    } finally {
      this.setState({
        loading: false,
        refreshing: false,
        error,
        articles: refreshing ? articles : this.state.articles.concat(articles),
        menuChange: false
      });
    }
  };

  // shouldComponentUpdate = () => {
  //   // this.getData();
  //   return false;
  // };

  static getDerivedStateFromProps = (props, state) => {
    console.log(props);
    console.log(state);
    return null;
  };

  componentDidMount = () => {
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
