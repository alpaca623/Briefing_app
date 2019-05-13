import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  margin-top:100px;
  flex: 1;
  background-color: white;
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color={"black"} />
  </Container>
);
