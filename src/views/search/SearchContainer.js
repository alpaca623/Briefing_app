import React from "react";
import SearchPresenter from "./SearchPresenter";

import styled from "styled-components";

const HeaderSearchContainer = styled.View``;

const HeaderText = styled.Text``;

const SearchInput = styled.TextInput``;

class SearchContainer extends React.Component {
  render() {
    return <SearchPresenter />;
  }
}

export default SearchContainer;
