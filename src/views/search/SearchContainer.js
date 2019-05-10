import React from "react";
import SearchPresenter from "./SearchPresenter";

import styled from "styled-components";

const HeaderSearchContainer = styled.View`
  margin-top: 40px;
  height:20px;
`;

const HeaderSearchContainer = styled.TextInput`
`;

class SearchContainer extends React.Component {
  static navigationOptions = {
    header: (
      <Header>
        <HeaderSearchContainer />
      </Header>
    )
  };
  render() {
    return <SearchPresenter />;
  }
}

export default SearchContainer;
