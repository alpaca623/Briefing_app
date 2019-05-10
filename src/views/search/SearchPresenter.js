import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FlatList } from "react-native-gesture-handler";

const Container = styled.View``;

function SearchPresenter() {
  return (
    <Container>
      <FlatList />
    </Container>
  );
}

export default SearchPresenter;
