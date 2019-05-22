import React from "react";
import { DrawerItems, SafeAreaView } from "react-navigation";

import { NavigationActions } from "react-navigation";

import { height } from "../constants/Screen";

import styled from "styled-components";

const Container = styled.View`
  height: ${height};
`;

const ScrollDrawer = styled.ScrollView``;

const DrawerHeaderContainer = styled.View`
  justify-content: center;
  /* align-items: center; */
`;

const HeaderHead = styled.View`
  align-items: flex-start;
  /* margin-bottom: 10px; */
`;

const HeaderText = styled.Text`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`;

const HeaderContent = styled.View`
  justify-content: flex-end;
  align-items: flex-start;
  background-color: #f1f2f6;
  height: 40px;
  padding-left: 13px;
  padding-bottom: 5px;

  border-top-width: 1px;
  border-top-color: #ced6e0;
  border-bottom-color: #ced6e0;
  border-bottom-width: 1px;
`;

const CustomDrawerContentComponent = ({ props }) => {
  const { navigation } = props;
  return (
    <Container>
      <ScrollDrawer>
        <SafeAreaView
          style={{ flex: 1 }}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <DrawerHeaderContainer>
            {/* <HeaderHead>
              <HeaderText weight={500} size={10} color="black">
                icon
              </HeaderText>
            </HeaderHead> */}
            <HeaderContent>
              <HeaderText weight={600} size={13} color="#57606f">
                주제별 헤드라인
              </HeaderText>
            </HeaderContent>
          </DrawerHeaderContainer>
          <DrawerItems
            {...props}
            onItemPress={({ route }) => {
              navigation.navigate(route.routeName.toLowerCase(), {
                menuChange: true
              });
            }}
          />
        </SafeAreaView>
      </ScrollDrawer>
    </Container>
  );
};

export default CustomDrawerContentComponent;
