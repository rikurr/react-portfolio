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
          <ListItems><NavLink
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >Top</NavLink></ListItems>
          <ListItems><NavLink
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >About Me</NavLink></ListItems>
          <ListItems><NavLink
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >Project</NavLink></ListItems>
          <ListItems><NavLink
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >Skills</NavLink></ListItems>
        </List>
      </Nav>
      </NavigationContainer>
    );
  };

  export default Navigation;
