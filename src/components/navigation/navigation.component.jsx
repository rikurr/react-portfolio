import React from "react";

import {
  NavigationContainer,
  CheckBox,
  Label,
  Background,
  Nav,
  List,
  ListItems,
  NavLink,
  Icon
} from "./navigation.styles";
const Navigation = () => {
  return (
    <NavigationContainer>
      <CheckBox type="checkbox" id="navi-toggle"></CheckBox>
      <Label for="navi-toggle">
        <Icon>&nbsp;</Icon>
      </Label>
      <Background>&nbsp;</Background>
      <Nav>
        <List>
          <ListItems>
            <NavLink
              href="https://github.com/riku0329/"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </NavLink>
          </ListItems>
          <ListItems>
            <NavLink
              href="https://twitter.com/r3csf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </NavLink>
          </ListItems>
          <ListItems>
            <NavLink
              href="https://react-crwn.herokuapp.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Project
            </NavLink>
          </ListItems>
        </List>
      </Nav>
    </NavigationContainer>
  );
};

export default Navigation;
